<template>
  <header>
    <ThemeSwitcher/>
  </header>
  <div class="div-container">
    <div class="custom-display-flex">
      <form-title/>
    </div>
    <div>
      <calculate-money-form/>
    </div>
  </div>
</template>

<script setup>
import CalculateMoneyForm from "@/components/calculate-money-form/CalculateMoneyForm.vue";
import FormTitle from "@/components/calculate-money-form/components/FormTitle.vue";
</script>
<style>
.div-container {
  display: flex;
  justify-content: center;
  width: 100% !important;
}

.custom-display-flex {
  display: flex;
  align-items: center
}
</style>
