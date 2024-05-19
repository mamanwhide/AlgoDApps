<script lang="ts">

  import Wallet from "../components/Wallet.svelte";
  import Navbar from "../components/Navbar.svelte";
  
  import Content from "../components/Content.svelte";
  
  let showModal = false;
    
    const handleToggleModal = () => {
    showModal = !showModal
  }

</script>

<svelte:head>
    <title>AlgoDApps</title>
</svelte:head>

<Wallet 
  open={showModal}
  on:close={()=> handleToggleModal()}
/>
<Navbar>


  <svelte:fragment slot="login">
    <button on:click={()=> handleToggleModal()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512" class="h-6 w-6 text-white"><path fill="currentColor" d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3z"/></svg>
    </button>
  </svelte:fragment>
</Navbar>



<Content>
  <main class="h-screen relative">
    <section class="rectangle-5 glass-box relative h-96 pl-11 flex items-center">
     <div class="flex-1 flex flex-col">
      <span class="font-nico text-white text-6xl">You Need
        <br/>a Coffe to Try</span >
    <span class="font-nova text-white text-base">Welcome to AlgoDApps, Choose ur Coffe and Enjoy</span >
     </div>
        <img src="https://ik.imagekit.io/nurman/AlgoDapps/home_coffee.gif?updatedAt=1714414956488" alt="home-coffee" class="flex-">
    </section>
    <section class="glass-box h-2/5 p-9 font-nova text-lg text-white text-right absolute bottom-24 right-0 w-[45%] z-20">Algocaffe lahir dari kebutuhan akan tempat yang tidak hanya menyediakan kopi berkualitas, tetapi juga memfasilitasi mahasiswa dalam menjalankan tugas-tugas akademik mereka.</section>
    <section class="glass-box h-2/5 p-9 font-nova text-lg text-white absolute bottom-0 left-0 w-[45%]">Dengan menyatukan budaya kopi yang hangat dengan teknologi modern, Algocaffe menjadi titik pertemuan yang unik bagi komunitas mahasiswa yang berorientasi pada prestasi dan pencapaian</section>

  </main>
</Content>

