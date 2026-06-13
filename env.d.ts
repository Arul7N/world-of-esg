/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'lenis' {
  export default class Lenis {
    constructor(options?: any)
    raf(time: number): void
    scrollTo(target: any, options?: any): void
  }
}