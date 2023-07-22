<template>
  <div class="gallery-container">
    <figure v-if="imageData[i]">
      <img :src="imageData[i].src" />
      <figcaption v-if="imageData[i].caption">{{ imageData[i].caption }}</figcaption>
    </figure>
    <div style="text-align: center">
      <button @click="prev" class="arrow arrow-left" role="button" width="50%">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>
      </button>
      <button @click="next" class="arrow arrow-right" role="button" width="50%">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
        </svg>
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

<style lang="scss" scoped>
.gallery-container {
  position: relative;
  margin: 2rem;
}

// Copied / Adapted from the Slideshow.vue file
.arrow {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: hsla(0, 0%, 0%, 0.5);
  box-shadow: 0 0 10px 0 #0003;
  padding: 7px;
  cursor: pointer;
  transition: all 100ms;
  fill: #FFFFFF;

  @at-root html.backdropfilter & {
    // fill: #000000;
    background-color: transparent;
    backdrop-filter: blur(10px) saturate(180%) brightness(0.7);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  svg {
    fill: inherit;
    width: 100%;
    height: 100%;
  }

  &.arrow-left {
    svg {
      transform: translateX(-2px);
    }
  }

  &.arrow-right {
    svg {
      transform: translateX(2px);
    }
  }
}

$arrow-screen-padding: 10px;

.arrow-left {
  left: max(calc((100% - 1080px) / 2 + $arrow-screen-padding), $arrow-screen-padding);
}

.arrow-right {
  left: auto;
  right: max(calc((100% - 1080px) / 2 + $arrow-screen-padding), $arrow-screen-padding);
}
</style>
