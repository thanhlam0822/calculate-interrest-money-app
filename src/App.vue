<template>
  <header>
    <div class="custom-display-flex-2">
      <div>
        <ThemeSwitcher/>
      </div>
      <div>
        <el-switch
            v-model="isVietnamese"
            @change="changeLanguage"
            inline-prompt
            active-text="Vie"
            inactive-text="Eng"
            style="--el-switch-on-color: #13ce66"
        />
      </div>
    </div>

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
import {ref} from "vue";
import {changeLocale} from "@/i18n";

let isVietnamese = ref(false);

function changeLanguage() {
  if (isVietnamese.value) {
    changeLocale('vie');
    return;
  }
  changeLocale('en')
}
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

.custom-display-flex-2 {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
}
</style>
