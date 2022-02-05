<script setup lang="ts">
import {ref} from 'vue';
import Brand from "./Brand.vue";

const open = ref(false);

</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-800 max-w-7xl md:mx-auto rounded-lg drop-shadow-md mx-3 mb-5">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:grid md:place-items-center">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            v-on:click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              v-bind:class="{ 'hidden': open, 'block': !open }"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
              v-bind:class="{ 'block': open,  'hidden': !open}"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <router-link class="navbar-brand" to="/">
              <brand />
            </router-link>
          </div>
          <div class="hidden sm:block sm:ml-6 mt-3">
            <!-- <div class="flex space-x-4">
              <router-link
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-bind:class="{ 'bg-gray-900': $route.path.includes('about') }"
                to="/about"
              >
                About
              </router-link>
              <router-link
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-bind:class="{ 'bg-gray-900': $route.path.includes('research') }"
                to="/research"
              >
                Research
              </router-link>
              <router-link
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-bind:class="{ 'bg-gray-900': $route.path.includes('projects') }"
                to="/projects"
              >
                Projects
              </router-link>
              <router-link
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                v-bind:class="{ 'bg-gray-900': $route.path.includes('blog') }"
                to="/blog"
              >
                Blog
              </router-link>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden"
      id="mobile-menu"
      v-bind:class="{ 'hidden': !open }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <!-- <router-link
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          v-bind:class="{ 'bg-gray-900': $route.path.includes('about') }"
          to="/about"
        >
          About
        </router-link>
        <router-link
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          v-bind:class="{ 'bg-gray-900': $route.path.includes('research') }"
          to="/research"
        >
          Research
        </router-link>
        <router-link
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          v-bind:class="{ 'bg-gray-900': $route.path.includes('projects') }"
          to="/projects"
        >
          Projects
        </router-link>
        <router-link
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          v-bind:class="{ 'bg-gray-900': $route.path.includes('blog') }"
          to="/blog"
        >
          Blog
        </router-link> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  width: 50px;
}
</style>
