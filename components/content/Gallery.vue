<template>
  <div ref="imagecon"></div>
  <div style="text-align: center">
    <button @click="changetoleft" class="button-36" role="button" width="50%">
      &lt
    </button>
    <button @click="changetoright" class="button-36" role="button" width="50%">
      &gt
    </button>
  </div>
</template>

<script>
export default {
  props: ["images", "captions"],
  data() {
    return {
      i: 0,
      imagesA: [],
      captionsA: [],
    };
  },
  methods: {
    changetoright() {
      if (this.i < this.imagesA.length - 1) {
        this.i++;
      } else {
        this.i = 0;
      }
      if (!this.captions) {
        this.$refs.imagecon.innerHTML =
          '<img src="' + this.imagesA[this.i] + '" alt = "">';
      } else {
        this.$refs.imagecon.innerHTML =
          '<figure><img src="' +
          this.imagesA[this.i] +
          '" alt=""><figcaption>' +
          this.captionsA[this.i] +
          "</figcaption></figure>";
      }
    },
    changetoleft() {
      if (this.i > 0) {
        this.i--;
      } else {
        this.i = this.imagesA.length - 1;
      }
      if (!this.captions) {
        this.$refs.imagecon.innerHTML =
          '<img src="' + this.imagesA[this.i] + '" alt = "">';
      } else {
        this.$refs.imagecon.innerHTML =
          '<figure><img src="' +
          this.imagesA[this.i] +
          '" alt=""><figcaption>' +
          this.captionsA[this.i] +
          "</figcaption></figure>";
      }
    },
    returnhello: function () {
      alert("hello");
    },
    returni: function (i) {
      alert(i);
    },
  },
  mounted() {
    this.imagesA = this.images.split(",");
    if (!this.captions) {
      this.$refs.imagecon.innerHTML =
        '<img src="' + this.imagesA[0] + '" alt="">';
    } else {
      this.captionsA = this.captions.split(",");
      if (this.imagesA.length == this.captionsA.length) {
        this.$refs.imagecon.innerHTML =
          '<figure><img src="' +
          this.imagesA[0] +
          '" alt=""><figcaption>' +
          this.captionsA[0] +
          "</figcaption></figure>";
      } else {
        allert("ANZAHL DER BILDER UND CAPTIONS STIMMT NICHT ÜBEREIN!!!");
      }
    }
  },
};
</script>

<style lang="scss">
/* CSS */
.button-36 {
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 4rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
}
</style>
