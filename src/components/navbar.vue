<template>
    <div>
  <section class="relative mx-auto">
      <!-- navbar -->
    <nav class="flex justify-between bg-gray-900 text-white">
      <div class="px-5 md:px-5 xl:px-0 py-6 flex w-full items-center max-w-screen-xl mx-auto">
        <a class="text-3xl font-bold font-heading text-yellow-500" href="#">
          <!-- <img class="h-9" src="logo.png" alt="logo"> -->
          CMS.
        </a>
        <!-- Nav Links --> 
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><a class="hover:text-gray-200" href="#">Dashboard</a></li>
          <li><a class="hover:text-gray-200" href="#">Storage</a></li>
          <li><a class="hover:text-gray-200" href="#">Functions</a></li>
          
        </ul>
        <!-- Header Icons -->
        <div class="hidden xl:flex items-center space-x-5">
          <a class="hover:text-gray-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </a>
          <a class="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
            <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500">
                </span>
              </span>
          </a>
          <!-- Sign In / Register      -->
          <a class="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </a>
          
        </div>
      </div>
      <!-- Responsive navbar -->
      <a class="xl:hidden flex mr-6 items-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
        <span class="flex absolute -mt-5 ml-4">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-yellow-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500">
          </span>
        </span>
      </a>
      <a class="navbar-burger self-center mr-5 xl:hidden" href="#" @click="open = !open">
          <svg xmlns="http://www.w3.org/2000/svg" v-if="!open" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" v-if="open" class="h-6 w-6 hover:text-gray-200" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
      </a>
      
    </nav>
    <div  class="relative lg:hidden -mt-2">
        <button @click="open = !open"  class="hidden md:hidden flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600  hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <span>Dropdown</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div v-if="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
          <div class="px-2 py-2 bg-white shadow dark-mode:bg-gray-800">
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Dashboard</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Storage</a>
            <a class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Functions</a>
          </div>
        </div>
      </div>
    
  </section>

        
    </div>
</template>

<script>
export default {
    data(){
        return{
            open:false
        }
    }
}
</script>