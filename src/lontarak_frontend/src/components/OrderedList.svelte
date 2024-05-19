<script lang="ts">
  import type { Product } from "$lib/products";
  import products from "$lib/products";
  import { afterUpdate, onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  export let ordered: Product[];
  export let open = false;
  const dispatch = createEventDispatcher();

  interface FormattedProduct {
    display: string;
    photo: string;
    count: number;
    price: number;
  }

  let a: FormattedProduct[] = [];
  $: formattedOrder = [...a];

  function formatOrder() {
    const productCounts: {
      [key: string]: FormattedProduct;
    } = {};

    ordered.forEach((order, i) => {
      let key = order.display;

      if (key in productCounts) {
        productCounts[key].count++;
      } else {
        productCounts[key] = {
          display: key,
          photo: order.photo,
          count: 1,
          price: order.price,
        };
      }
    });

    const formattedButNotAlphabeticallyOrderedYetAlsoSorryForTheLongVariableName =
      Object.values(productCounts).sort(function (a, b) {
        var textA = a.display.toUpperCase();
        var textB = b.display.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

    formattedOrder =
      formattedButNotAlphabeticallyOrderedYetAlsoSorryForTheLongVariableName;
  }

  onMount(formatOrder);

  afterUpdate(() => {
    formatOrder();
  });
</script>
          {#if open}
          <main class="z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center  lg:p-0">
            <div class="fixed w-full h-full bg-gray-900 opacity-50"></div>
            <div class="w-full h-4/5 max-w-7xl mx-auto rounded-lg shadow-2xl z-40">
              <div class="flex justify-between min-h-full gap-6 items-center border z-50 giphy rounded-2xl">
                <section class="font-nico flex flex-col gap-7 w-2/5">
                  <header class="text-white text-2xl flex items-center justify-center glass-box h-16 w-full" style="border-radius: 0px 16px 16px 0px;">Check Out</header>
                  <div class="glass-box font-nova text-white p-5 h-96 ml-16 overflow-hidden">
                    <div class="overflow-y-scroll h-full w-full p-1">
                      <div class="grid grid-cols-2 grid-rows-1 gap-2">
                        {#each formattedOrder as product, i}
                        <div>
                          <span>{product.display}</span>
                          <img src={product.photo} alt={product.display} class="rounded-2xl" />
                        </div>
                        
                        <div class="pt-8">
                          <span>Price :</span>
                          <span class="flex border border-white rounded-md">
                            <button
                            class="px-2 border border-gray-300 hover:bg-neutral-50 active:bg-neutral-100 cursor-pointer"
                            on:click={(e) => {
                              const index = ordered.findIndex(
                                (order) => order.display == product.display
                              );
                              if (index > -1) {
                                ordered.splice(index, 1);
                                ordered = [...ordered];
                              }
                            }}
                          >
                            -
                          </button>
                          <div class="px-3 mx-auto">{product.count}</div>
                          <button
                            class="px-2 border border-gray-300 hover:bg-neutral-50 active:bg-neutral-100 cursor-pointer"
                            on:click={() => {
                              ordered.push({
                                display: product.display,
                                photo: product.photo,
                                price: product.price,
                              });
                              ordered = [...ordered];
                            }}
                          >
                            +
                          </button>
                          {(product.price * product.count).toFixed(2)} ICP
                          </span>
                          <span>Request :</span>
                          <textarea name="request" id="nama" class="bg-putih-pucat rounded-md h-1/2">...</textarea>
                            
                        </div>
                        {/each}
                      </div>
                    </div>
                    </div>
                
                  </section>
                  
                <section class="font-nova text-white flex flex-col w-3/5 justify-end glass-box "> 
                  <button class=" absolute top-0 right-0 p-1 bg-gray-200 hover:bg-gray-300 rounded-full ml-4" on:click={() => dispatch("close")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                      ><path d="M0 0h24v24H0V0z" fill="none" /><path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                      /></svg>
                  </button>
                  <!-- <div class="overflow-y-scroll w-full p-1"> -->
                    <div class="p-3 overflow-y-scroll min-h-full">
                      <div class="flex flex-col col-span-10">
                        <span class="font-nico text-3xl item-center gap-3 grid grid-cols-12">
                          <img src="https://ik.imagekit.io/nurman/AlgoDapps/location.png?updatedAt=1716051668732" class="h-8 col-span-1" alt="location">
                          <h1 class="col-span-11">Your Location</h1>
                          <span class="col-span-1"></span>  <textarea name="location" class="col-span-11 rounded-2xl bg-putih-pucat"></textarea>
                        </span>
                        <span class="font-nico text-3xl item-center gap-3 grid grid-cols-12">
                          <img src="https://ik.imagekit.io/nurman/AlgoDapps/delivery.png?updatedAt=1716051667998" alt="delivery" class="h-8 col-span-1">
                          <h1 class="col-span-11">Choose Delivery Method</h1>
                          <span class="col-span-1"></span>  <textarea name="location" class="col-span-11 rounded-2xl bg-putih-pucat"></textarea>
                        </span>
                        <span class="font-nico text-3xl item-center gap-3 grid grid-cols-12">
                          <img src="https://ik.imagekit.io/nurman/AlgoDapps/payment.png?updatedAt=1716051668035" alt="payment" class="h-8 col-span-1">
                          <h1 class="col-span-11">Payment Details</h1>
                          <span class="col-span-1"></span>  <textarea name="location" class="col-span-11 rounded-2xl bg-putih-pucat"></textarea>
                        </span>
                      </div>
                      
                      <div class="">
                        <h1>Paymen total: {ordered.reduce((total, { price }) => total + price, 0).toFixed(2)} ICP</h1>
                      </div>
                
                    </div>
                  <!-- </div> -->
            
                
                </section>
                
              </div>
            </div>
          </main>
          {/if}



