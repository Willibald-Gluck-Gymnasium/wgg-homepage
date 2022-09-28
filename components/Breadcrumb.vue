<template>
<span>
  <a :href="href" class="link">
      {{ text }}
  </a>
  <i class="material-icons">arrow_right</i>
</span>
</template>

<script>
export default {
props: ['href', 'text']
}
</script>

<style>

</style>