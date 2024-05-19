<script>
  import "$lib/app.css";
  import Footer from "../components/Footer.svelte";
</script>
<!-- <div class="fixed w-full h-full top-0 left-0 z-0">
     <div class="gradient1 opacity-90"></div>    
      <div class="gradient2 opacity-80"></div>
</div> -->
<main class="min-h-screen h-screen max-h-screen overflow-auto w-screen giphy -z-10">
     
      
  <slot />
  <Footer />

</main>

    <style>
       :global(.giphy){
          background: url(https://ik.imagekit.io/nurman/AlgoDapps/main-bg.gif?updatedAt=1715557322990)
          no-repeat center;
          background-size: cover;
      }

:global(.gradient1) {
  position: absolute;
  width: 80%;
  height: 80%;
  top: -25%;
  left: 65%;
  background: url(https://ik.imagekit.io/nurman/AlgoDapps/gradient1.png?updatedAt=1715681244110)
    no-repeat center;
  background-size: cover;
  filter: blur(20px);
}

:global(.gradient2) {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 15%;
  left: -20%;
  background: url(https://ik.imagekit.io/nurman/AlgoDapps/gradient2.png?updatedAt=1715681237175)
    no-repeat center;
  background-size: cover;
  filter: blur(20px);
}
    </style>


  

