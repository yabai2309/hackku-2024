<script>
	import '../global.css';
	import { fade, fly } from 'svelte/transition'

  let links = [
		{ display: "HACKERDOC", action: () => window.open("https://hackku.notion.site/hackku/HackerDoc-HackKU-2023-d870cdb8e84b425ab67a2eedcb41344c", "_blank")},
		{ display: "ABOUT", action: () => scrollToID("about")},
		{ display: "FAQ", action: () => scrollToID("faq")},
		{ display: "SPONSORS", action: () => scrollToID("sponsors")},
		{ display: "CONTACT", action: () => scrollToID("contact")},
    { display: "REGISTER NOW!", action: () => window.open("https://forms.gle/Sck3FsitxKgNQMpP8", "_blank")}, 
	]
  const scrollToID = (id) => {
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      behavior: 'smooth'
    });
  }
	
	let hamburgerExpanded = false

	let loaded = 0
	function popup(desktop) {
		if (loaded == 0 || loaded == 1) {
			loaded = loaded + 1
			if (desktop) {
				notifications.info(' ', 6000)
			}
		}
	}
</script>

<div>
  <!-- {#if hamburgerExpanded}
		<div on:click={() => hamburgerExpanded = false} transition:fade class="fixed z-20 top-0 left-0 w-screen h-screen flex flex-col p-4 gap-2 justify-between" style="background-color:var(--background)">
			{#each links as link}
				<div on:click={link.action} class="link body-text cursor-pointer flex-grow flex justify-center items-center">{link.display}</div>
			{/each}
		</div>
	{:else}
		<div class="link-container" on:load={popup(0)} transition:fly>
			<div class="hamburgerMenu cursor-pointer" on:click={() => hamburgerExpanded = !hamburgerExpanded}>
				<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><defs><style>.hamburgerMenuSvg{fill:none;stroke:var(--body-text);stroke-linecap:round;stroke-miterlimit:10;stroke-width:4px;}</style></defs><line class="hamburgerMenuSvg" x1="6.36" y1="9.61" x2="47.33" y2="9.61"/><line class="hamburgerMenuSvg" x1="6.52" y1="27" x2="47.48" y2="27"/><line class="hamburgerMenuSvg" x1="6.67" y1="44.39" x2="47.64" y2="44.39"/></svg>
			</div>
		</div>
	{/if} -->
</div>

<style>
.link-container {

}
</style>