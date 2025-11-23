// 自动扫描 diary.md，提取 : tag: "xxx" : 结构，生成 tags-data.json 供 TagsList.vue 使用
// 用法：node scripts/gen-tags.js

const fs = require('fs')
const path = require('path')

const diaryPath = path.resolve(__dirname, '../diary.md')
const tagsDataPath = path.resolve(__dirname, '../.vitepress/tags-data.json')

const content = fs.readFileSync(diaryPath, 'utf-8')


// 匹配 :tag: "标签":，支持各种缩进和换行
const tagBlockRegex = /^\s*:tag:\s*"([^"]+)":\s*([\s\S]*?)(?=^\s*-+\s*####\s*\d+|$)/gm

let match
const notes = []
let lastDate = ''
let lastMonth = ''
let lastYear = ''

// 先提取年月日
const yearMatch = content.match(/^# (\d{4})/m)
if (yearMatch) lastYear = yearMatch[1]
const monthMatch = content.match(/## (\d{1,2})月/m)
if (monthMatch) lastMonth = monthMatch[1]
const dateMatch = content.match(/### (\d{1,2})日/m)
if (dateMatch) lastDate = dateMatch[1]


while ((match = tagBlockRegex.exec(content))) {
  const tag = match[1]
  const block = match[2]
  // 在 block 内查找所有 - #### n
  const subBlockRegex = /^\s*-+\s*####\s*(\d+)\n([\s\S]*?)(?=^\s*-+\s*####\s*\d+|$)/gm
  let subMatch
  while ((subMatch = subBlockRegex.exec(block))) {
    const num = subMatch[1]
    const text = subMatch[2].replace(/\n/g, ' ').trim().slice(0, 30) + '...'
    // 尝试获取日期
    const before = content.slice(0, match.index)
    const dateMatch = before.match(/### (\d{1,2})日/g)
    const date = dateMatch ? dateMatch[dateMatch.length - 1].replace('### ', '') : lastDate
    const title = `${lastMonth}月${date}日·${num}`
    notes.push({
      title,
      link: `/diary#_${num}`,
      tags: [tag],
      preview: text
    })
  }
}

fs.writeFileSync(tagsDataPath, JSON.stringify(notes, null, 2), 'utf-8')
console.log('标签数据已生成:', tagsDataPath)
