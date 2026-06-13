<template>
  <svg 
    class="icon" 
    :class="{ 'icon-fill': fill }"
    :style="{ width: size, height: size }"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <use :href="`#i-${name}`" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string
  size?: string
  fill?: boolean
}

withDefaults(defineProps<Props>(), {
  size: '1.5em',
  fill: false
})
</script>