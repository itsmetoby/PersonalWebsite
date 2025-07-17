<script setup>

</script>

<template>
  <nav id="navbar">
    <span>this is a header</span>
    <router-link :to="{ name: 'about' }">
      <span>About</span>
    </router-link>
    <router-link :to="{ name: 'research' }">
      <span>Research</span>
    </router-link>
    <router-link :to="{ name: 'resume' }">
      <span>Resume</span>
    </router-link>
  </nav>
</template>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 57px;
  padding: 8px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 100;
}
</style>