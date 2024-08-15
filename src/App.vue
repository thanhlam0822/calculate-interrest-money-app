<template>
  <header>
    <ThemeSwitcher/>
  </header>
  <div class="div-container">
    <div>
      <div class="card">
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
<style>
.div-container {
  display: flex;
  justify-content: center;
  width: 100% !important;
}

.card {
  height: 300px;
  animation: show-form 4s ease forwards;
}

@keyframes show-form {
  from {
    width: 0;
  }
  to {
    width: 1000px;
  }
}
</style>
