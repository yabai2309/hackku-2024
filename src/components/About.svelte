<script>
	import '../global.css';
  import Heart from './assets/heart-red-shad.svelte';
</script>

<div>
  <div class="section" id="about">
    <div class="about-container">
      <h2>What is HackKU?</h2>
      <div class="description-container">
        <p class="description-text">
          HackKU is the annual 36-hour hackathon hosted at the University of Kansas, 
          where students have the opportunity to innovate new ideas, discover different paths, 
          and push the boundaries of technology. Work with teams of up to four people to 
          create unique solutions to real-world problems. No experience necessary!
        </p>
      </div>
      <div class="about-container">
        <h3>Check out previous HackKU events</h3>
        <div class="button-heart-container">
          <div class="heart">
            <Heart />
          </div>
          <div class="button-container">
            <div class="button-container">
              <img src="images/20.png" class="previous-button" alt="HackKU20" />
              <img src="images/21.png" class="previous-button" alt="HackKU21" />
            </div>
            <div class="button-container">
              <img src="images/22.png" class="previous-button" alt="HackKU22" />
              <img src="images/23.png" class="previous-button" alt="HackKU23" />
            </div>
          </div>
          <div class="heart">
            <Heart />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .about-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 8rem;
  }
  .description-container {
    background-color: var(--off-white);
    border: 1.5rem solid var(--yellow-shad);
    border-radius: 50%;
    max-width: 80vw;
    margin: 0 0 4rem 0;
  }
  .description-text {
    padding: 5rem 8rem;
    text-align: center;
  }
  .button-heart-container {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  .button-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
  .previous-button {
    width: 15rem;
  }
  .heart {
    width: 3rem; 
  }
</style>