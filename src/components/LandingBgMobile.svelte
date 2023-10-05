<script>
	import '../global.css';
  import Sun from './assets/sunMobile.svelte';
  import Clouds from './assets/clouds.svelte';
  import Buildings from './assets/buildingsMobile.svelte';
  import Hills from './assets/hillsMobile.svelte';
  import Ground from './assets/groundMobile.svelte';
  import Ducks from './assets/ducksMobile.svelte';
  import Flowers from './assets/flowersMobile.svelte';
</script>

<div class="full-width">
  <div class="sky">
    <Sun />
    <Clouds />
  </div> 
  <!-- <Buildings/>
  <Hills /> -->
  <Ground />
  <Ducks />
  <Flowers />
</div>

<style>
  .full-width {
    width: 100vw;
    max-width: 100%;
    z-index: -10;
    margin: 0;
  }
  .sky {
    position: absolute;
    top: 0px;
  }
</style>