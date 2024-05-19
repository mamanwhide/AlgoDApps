<script>
  import { data } from '../lib/data';
  import '../lib/app.css';
  import {page} from "$app/stores";

  const style = {
    link: 'bg-putih-pucat text-black',
    active: 'bg-black text-white bg-auto'

  }
</script>


<nav class="flex justify-between mt-20 mb-5 px-10 py-5 mx-24 items-center glass-box">
    <a href="/" class="font-nico text-3xl text-gray-800 font-bold algo-dapps">AlgoDApps</a>
    <div class="flex items-center">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input class="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Search..." />
      </div>
      <ul class="flex items-center space-x-6">
        
          {#each data as halaman}
          <li class="font-nico">

            <a  href={halaman.link}>
              <div class={`menu $style.link ${halaman.link === $page.url.pathname ? style.active : style.link}`}>
                {halaman.title}
              </div>
            </a>
          </li>
        {/each}       
      
        <slot name="basket"/>   
        <slot name="login" />
          
      </ul>
    </div>
  </nav>

  <style>
     .algo-dapps {

color: #000000;
font-weight: 400;
white-space: nowrap;
letter-spacing:-0.68px;
text-shadow: 0 4px 4px rgba(255, 255, 255, 0.25);
}

.menu{
  border: none;
  border-radius: 60px;
  width: 125px;
  height: 42px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}


  </style>