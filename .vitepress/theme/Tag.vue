<template>
  <span :style="tagStyle" class="tag">{{ text }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  text: String,
  color: String
})
const tagStyle = computed(() => ({
  display: 'inline-block',
  padding: '2px 10px',
  margin: '0 4px 4px 0',
  borderRadius: '12px',
  fontSize: '0.9em',
  background: props.color || '#eee',
  color: '#fff',
  fontWeight: 'bold',
  letterSpacing: '1px',
  boxShadow: '0 1px 2px #0001',
  verticalAlign: 'middle',
  border: 'none',
  cursor: 'default',
  userSelect: 'none',
  transition: 'all 0.2s',
  backgroundColor: props.color || '#888'
}))
</script>

<style scoped>
.tag {
  line-height: 1.6;
}
</style>
