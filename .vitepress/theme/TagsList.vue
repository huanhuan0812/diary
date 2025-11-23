<template>
  <div>
    <h2>全部标签</h2>
    <div style="margin-bottom: 1.5em;">
      <Tag v-for="tag in tags" :key="tag.name" :text="tag.name" :color="tag.color" />
    </div>
    <div v-for="tag in tags" :key="tag.name" style="margin-bottom:2em;">
      <h3>
        <Tag :text="tag.name" :color="tag.color" />
      </h3>
      <ul>
        <li v-for="item in getNotesByTag(tag.name)" :key="item.title" style="margin-bottom:0.5em;">
            <a :href="item.link">{{ item.title }}</a>
            <span v-if="item.preview" style="color:#888;font-size:0.95em;margin-left:8px;">{{ item.preview }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tag from './Tag.vue'

const tags = [
  { name: '生活', color: 'green' },
  { name: '学习', color: 'blue' },
  { name: '随笔', color: 'orange' },
  { name: '成长', color: 'purple' },
  { name: '感悟', color: 'teal' }
]

// 自动引入生成的 tags-data.json
let notes: Array<any> = []
try {
  notes = require('../tags-data.json')
} catch (e) {
  notes = []
}

function getNotesByTag(tagName: string) {
  return notes.filter(n => n.tags.includes(tagName))
}
</script>
