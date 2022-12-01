<script lang="ts">
  import "./dist/style.css";
  import Hero from './lib/Hero.svelte'
  import Second from './lib/Second.svelte'
  import Third from './lib/Third.svelte'
  import Fourth from './lib/Fourth.svelte'
  import Footer from './lib/Footer.svelte'

</script>



<Hero /> 
<Second class="section-height" />
<Third />
<Fourth />
<Footer />

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
