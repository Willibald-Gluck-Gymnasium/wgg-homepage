<template>
  <div margin-top="2rem" margin-bottom="2rem">
    <figure v-if="imageData[i]">
      <img :src="imageData[i].src" />
      <figcaption v-if="imageData[i].caption">{{ imageData[i].caption }}</figcaption>
    </figure>
    <div style="text-align: center">
      <button @click="prev" class="button-36" role="button" width="50%">
        &lt
      </button>
      <button @click="next" class="button-36" role="button" width="50%">
        &gt
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  images: string,
  captions: string
}>();

let i = ref(0);

const splitCaptions = props.captions.split(/, */g);

let imageData: { src: string, caption?: string }[] = props.images.split(/, */g).map((imageSrc, index) => {
  return {
    src: imageSrc,
    caption: splitCaptions[index]
  }
});

function change(by: number) {
  if (imageData.length < 1) {
    i.value = 0;
    return;
  }
  i.value = (i.value + by + imageData.length) % imageData.length;
}
function next() {
  change(1);
}
function prev() {
  change(-1);
}
</script>

<style lang="scss">
/* CSS */
.button-36 {
  background-color: #ff5e0e;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 50px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  height: 3, 75rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 5px;
  margin-right: 5px;
  opacity: 0.8;
}

.button-36:hover {
  box-shadow: rgba(255, 81, 0, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}
</style>
