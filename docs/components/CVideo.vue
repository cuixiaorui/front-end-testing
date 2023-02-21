<template>
  <div class="container m-auto p-6">
    <div class="aspect-w-16 aspect-h-9">
      <iframe
        :src="src"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  src: String,
});
</script>

<style>
.aspect-w-16 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  --tw-aspect-w: 16;
}
.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.aspect-h-9 {
  --tw-aspect-h: 9;
}

.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.m-auto {
  margin: auto;
}

.p-6 {
  padding: 1.5rem /* 24px */;
}
</style>
