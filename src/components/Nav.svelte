<script>
	import '../global.css';

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
</script>

<div>
  <div class="navbar" id="nav">
    {#each links as link}
      <p><a class="link" href="/" onclick="return false;" on:click={link.action}>{link.display}</a></p>
    {/each}
  </div>
</div>

<style>
  .navbar {
    position: relative;
    width: 100vw;
    display: flex;
    gap: 5rem;
    justify-content: center;
    z-index: 1000;
  }
  .link {
    text-decoration: none;
    color: var(--off-black);
  }
  .link:hover {
    color: var(--red);
  }
</style>