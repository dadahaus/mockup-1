
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

let tlMain = gsap.timeline({
  scrollTrigger: {
    trigger:".section-height",
  }
})

export default app
