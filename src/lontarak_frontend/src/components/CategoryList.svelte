<script lang="ts">
  import categories, { type Category } from "$lib/categories";
</script>

<li class="list-none text-lg sticky top-0">
  {#each categories as category}
    <ul
      class="border-b border-b-gray-300 font-semibold text-1xl hover:bg-putih-pucat cursor-pointer"
    >
      <a href={"#" + category.slug} class="h-full w-full text-start font-nova">
        <div class="p-4">{category.name}</div></a
      >
    </ul>
  {/each}
</li>
