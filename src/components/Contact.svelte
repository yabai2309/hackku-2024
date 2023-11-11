<script>
	import '../global.css';
</script>

<div>
  <div class="section contact-container" id="contact">
    <h2 id="header">Meet the team</h2>
    <div class="contact_gallery">
    <div class="contact_images">
      <img src="images/20.png" alt="contact1" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact2" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact3" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact4" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact5" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact6" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact7" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact8" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact9" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact10" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact11" id="portrait">
    </div>
    <div class="contact_images">
      <img src="images/20.png" alt="contact12" id="portrait">
    </div>
  </div>
    </div>
  </div>

<style>
  .contact-container {
    background-color: var(--green-shad)
  }
  .contact_images {
  width: 225px; 
  height: 300px;
  overflow: hidden;
  border-radius: 50%; 
  border: 5px solid #FFCD59;
  }
  
  .contact_images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
  .contact_gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    justify-content:center;
    row-gap: 100px;
    column-gap: 50px;
    margin: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  #header {
    color: white;
  }
</style>