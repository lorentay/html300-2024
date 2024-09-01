<template>
    <div class="carousel">
      <button @click="prevSlide">Previous</button>
      <div class="carousel-slides">
        <img :src="images[currentIndex]" alt="Inspiration Image" />
      </div>
      <button @click="nextSlide">Next</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Array of image URLs for the carousel
  const images = ref([
    '/images/plant-a-pot.jpeg',
    '/images/dress-the-table.jpeg',
    '/images/light-it-up.jpeg',
  ]);
  
  const currentIndex = ref(0);
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  };
  
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  };
  </script>
  
  <style>
  .carousel {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-slides img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  button {
    background-color: #ccc;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  