<script setup>
import { ref, computed, defineComponent, h } from 'vue';
import LandingPage from './components/LandingPage.vue'
import InspirationPage from './components/InspirationPage.vue'
import CocktailsPage from './components/CocktailsPage.vue'
import PlantsPage from './components/PlantsPage.vue'


// Define routes with absolute paths
const routes = {
  "/": LandingPage,                 
  "/inspiration": InspirationPage, // images
  "/cocktails": CocktailsPage, // accordion
  "/plants": PlantsPage,   // grid
};

// Component to handle dynamic view based on URL hash
const DynamicView = defineComponent({
  setup() {
    const currentPath = ref(window.location.hash.slice(1)); // Get the current hash

    // Update the current path on hash change
    window.addEventListener("hashchange", () => {
      currentPath.value = window.location.hash.slice(1);
    });

    // Compute the component to render based on the current path
    const currentView = computed(() => {
      return routes[currentPath.value] || routes["/"]; // Default to Home if route not found
    });

    return { currentView };
  },
  render() {
    return this.currentView ? h(this.currentView) : h('div', 'Page Not Found');
  }
});
</script>

<template>
  <div>
    <nav>
      <a href="#/">Garden & Sips</a>
      <a href="#inspiration">Inspiration</a>
      <a href="#cocktails">Cocktails</a>
      <a href="#plants">Plants</a>
    </nav>
    <DynamicView />
  </div>
</template>

<style>
/* Add your styles here */
</style>
