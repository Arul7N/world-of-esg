<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled"
    class="inline-flex items-center gap-2 font-display font-medium transition-all duration-300"
    :class="[
      variant === 'primary' 
        ? 'btn-primary px-8 py-4 hover:-translate-y-1' 
        : 'btn-ghost px-8 py-4 hover:-translate-y-1',
      sizeClass,
      disabled && 'opacity-50 cursor-not-allowed'
    ]"
    @click="handleClick"
  >
    <BaseIcon 
      v-if="iconLeft" 
      :name="iconLeft" 
      :size="iconSize"
    />
    
    <slot />
    
    <BaseIcon 
      v-if="iconRight" 
      :name="iconRight" 
      :size="iconSize"
      class="arrow"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseIcon from './BaseIcon.vue'

interface Props {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
}

interface Emits {
  (e: 'click', event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button'
})

const emit = defineEmits<Emits>()

const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'router-link'
  return 'button'
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'text-sm px-6 py-2.5',
    md: 'text-base px-8 py-4',
    lg: 'text-lg px-10 py-5'
  }
  return sizes[props.size]
})

const iconSize = computed(() => {
  const sizes = {
    sm: '1em',
    md: '1.05em',
    lg: '1.1em'
  }
  return sizes[props.size]
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}</script>