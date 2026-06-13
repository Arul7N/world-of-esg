<template>
  <section id="manifesto" class="relative bg-sand overflow-hidden">
    <div class="blob" style="width:540px;height:540px;background:radial-gradient(circle,#DDF5E5,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%)"></div>
    <div class="manifesto-pin min-h-screen flex items-center relative z-10">
      <div class="max-w-[1100px] mx-auto px-6 md:px-10 w-full">
        <span class="eyebrow mb-9 block">Our Purpose</span>
        <p id="manifesto-text" class="font-display font-bold text-[clamp(1.9rem,5.2vw,4.4rem)]" style="line-height:1.16">We turn climate <em class="key not-italic">ambition</em> into <em class="key not-italic">measurable</em> results — strategy, technology, talent, and <em class="key not-italic">execution</em>, in one continuous system.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const text = document.getElementById('manifesto-text')
  if (!text) return

  const words = text.innerHTML.split(/(\s+|(<em[^>]*>.*?<\/em>))/g).filter(Boolean)
  const wrapped = text.innerHTML
    .replace(/(<em[^>]*class="key[^"]*"[^>]*>)(.*?)(<\/em>)/g, (_m: string, open: string, inner: string, close: string) => {
      return inner.split(' ').map((w: string) => w ? `<span class="w key">${w}</span>` : w).join(' ')
        .replace(/<span class="w key">/, open + '<span class="w key">')
        .replace(/<\/span>$/, '</span>' + close)
    })
  void wrapped
  const html = text.innerHTML
  const parts = html.split(/(<em[^>]*>[\s\S]*?<\/em>)/g)
  let result = ''
  for (const part of parts) {
    if (part.startsWith('<em')) {
      const isKey = /class="key/.test(part)
      const inner = part.replace(/<\/?em[^>]*>/g, '')
      result += inner.split(/\s+/).filter(Boolean).map((w: string) => `<span class="w${isKey ? ' key' : ''}">${w}</span>`).join(' ')
    } else {
      result += part.split(/\s+/).filter(Boolean).map((w: string) => `<span class="w">${w}</span>`).join(' ')
    }
  }
  text.innerHTML = result

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const spans = text.querySelectorAll<HTMLElement>('.w')
        spans.forEach((span, i) => {
          setTimeout(() => span.classList.add('lit'), i * 60)
        })
      }
    })
  }, { threshold: 0.3 })
  observer.observe(text)
})
</script>
