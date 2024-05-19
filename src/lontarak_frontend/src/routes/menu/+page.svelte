<script lang="ts">
  import type { Category } from "$lib/categories";
  import products, { type Product } from "$lib/products";
    import Content from "../../components/Content.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import OrderedList from "../../components/OrderedList.svelte";
    import CategoryList from "../../components/CategoryList.svelte";
    import ProductList from "../../components/ProductList.svelte";


      /**
   * @type {Product[]}
   */
  $: ordered = [];
  let showBasket = false
  
  const handleBasket = () =>{
      showBasket = !showBasket
  }


</script>

<Navbar>
  <svelte:fragment slot="basket">
    <button on:click={()=> handleBasket()} class="flex items-center justify-center relative">
  
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="h-8 w-8 text-white"><path fill="currentColor" d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921M17.307 15h-6.64l-2.5-6h11.39z"/><circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"/></svg><span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{ordered.length}
  </span>
  </button>
  </svelte:fragment>  
</Navbar>


<OrderedList bind:ordered
  open = {showBasket}
  on:close={()=>handleBasket()}
/>



<Content>
<div class="flex">
  <div class="border-r border-r-gray-300 w-1/5 relative z-10 glass-box px-2">
    <h1
    class="font-nico text-2xl h-24 flex items-center justify-center"
    >Category</h1>
      <CategoryList />
    </div>
    <div class="w-full relative h-screen overflow-y-scroll">
      <ProductList bind:ordered />
    </div>
</div>  
    <!-- menu start -->

<!-- menu end -->
</Content>