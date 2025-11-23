import Theme from 'vitepress/theme'
import Tag from './Tag.vue'
import TagsList from './TagsList.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('Tag', Tag)
    app.component('TagsList', TagsList)
  }
}
