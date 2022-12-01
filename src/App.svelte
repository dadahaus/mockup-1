<script lang="ts">
  import "./dist/style.css";
  import Hero from './lib/Hero.svelte'
  import Second from './lib/Second.svelte'
  import Third from './lib/Third.svelte'
  import Fourth from './lib/Fourth.svelte'
  import Footer from './lib/Footer.svelte'

</script>

<main class="wrapper">

  <Hero class="section section__1" /> 
  <Second class="section section__2" />
  <Third />
  <Fourth />
  <Footer />

</main>


<style lang="scss">

//   section {
//   height: 100vh;
//   display: flex;
//   flex-flow: column;
//   justify-content: center;
//   align-items: center;
//   gap: 1rem;
// }

</style>
