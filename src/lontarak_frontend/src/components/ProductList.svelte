<script lang="ts">
  import type { Category } from "$lib/categories";
  import products, { type Product } from "$lib/products";
  import categories from "$lib/categories";

  export let ordered: Product[];
</script>

<div class="px-8 pt-8 flex flex-col gap-8 mb-32">
  {#each categories as category}
    <section id={category.slug}>
      <h2 class="text-3xl mb-8 font-nico kopi-kategori">{category.name}</h2>

      <li
        class="list-none grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 mb-2"
      >
        {#each products[category.slug] as product}
          <!-- <ul
            class="border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 active:bg-gray-100 select-none"
          > -->
          <ul
            class="font-nova rounded-md cursor-pointer select-none text-white flex flex-wrap"
          >
            <button
              on:click={() => {
                if (ordered.length <= 10) ordered = [...ordered, product];
              }}
              class="px-2 py-4 flex items-center justify-center glass-box h-86 w-[250px]"
            >
              <div class="flex flex-col gap-1 items-center mx-5">
                <img src={product.photo} alt={product.display} class="rounded-2xl"/>
                <span class="text-base font-normal">{product.display}</span>
              </div>
            </button>
          </ul>
        {/each}
      </li>
    </section>
  {/each}
</div>


<style>
 
  :global(.glass-box) {
    backdrop-filter: blur(21px);  
    border-radius: 16px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.411);
    border-right:  1px solid #cddeaa54;
    border-bottom: 1px solid #cddeaa54;

  }
  
  .glass-box::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .kopi-kategori{
    color: #000000;
  font-weight: 400;
  white-space: nowrap;
  letter-spacing:-0.68px;
  text-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);
  }
</style>
