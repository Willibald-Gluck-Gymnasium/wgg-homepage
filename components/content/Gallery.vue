<template>
  <div class="gallery-container" aria-label="Gallerie">
    <button aria-label="Vorheriges Bild" @click="prev" class="arrow arrow-left" role="button">
      <div aria-hidden="true" class="arrow-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>
      </div>
    </button>
    <figure aria-label="Bildanzeige" class="gallery-figure" v-if="imageData[i]">
      <img :src="imageData[i].src" :alt="imageData[i].caption" />
      <figcaption v-if="imageData[i].caption">{{ imageData[i].caption }}</figcaption>
    </figure>
    <button aria-label="Nächstes Bild" @click="next" class="arrow arrow-right" role="button">
      <div aria-hidden="true" class="arrow-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  images: string,
  captions: string
}>();

let i = ref(0);

const splitCaptions = props.captions?.split(/, */g);

let imageData: { src: string, caption?: string }[] = props.images.split(/, */g).map((imageSrc, index) => {
  return {
    src: imageSrc,
    caption: splitCaptions && splitCaptions[index]
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
  margin: 2rem auto;
  display: flex;
  width: max-content;
  max-width: 100%;
}

figure.gallery-figure {
  margin: 0;
  height: max-content;
  position: relative;
  width: max-content;

  img {
    border-radius: 0;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: #fff;
    background-color: #000d;
    margin: 0;
    padding: 5px;

    @at-root .backdropfilter & {
      background: transparent;
      backdrop-filter: blur(80px) saturate(180%) brightness(0.7);
    }
  }
}

// Copied / Adapted from the Slideshow.vue file
.arrow {
  width: 40px;
  border: none;
  padding: 7px;
  cursor: pointer;
  transition: all 100ms;
  fill: #000;
  background: transparent;

  &:hover,
  &:focus-visible {
    background: #0002;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 2px #000;
    outline: none
  }

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  svg {
    fill: inherit;
    width: 100%;
    height: 100%;
  }

  .arrow-container {
    width: 20px;
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
