<template>
  <div class="card">
    <div class="flex flex-col gap-2">
      <label for="money-per-month">Money per month</label>
      <InputNumber prefix="$" id="money-per-month" v-model="moneyPerMonth"/>
      <small id="money-per-month-help">Enter your fixed money per month.</small>
    </div>
    <div class="flex flex-col gap-2">
      <label for="month">Number of month</label>
      <InputNumber id="month" v-model="month"/>
      <small id="month-help">Type in your month you choose to send money.</small>
    </div>
    <div class="flex flex-col gap-2">
      <label for="rate">Rate</label>
      <InputNumber :minFractionDigits="2" id="rate" v-model="rate" prefix="%" fluid/>
      <small id="rate-help">Enter your bank rate.</small>
    </div>
    <div class="flex flex-col gap-2" style="margin-top: 15px">
      <Button label="Calculate" severity="contrast" @click="calculateMoney"/>
    </div>
    <div>
      {{ totalMoney }}
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";

let rate = ref(0);
let moneyPerMonth = ref(0);
let month = ref(0);
let totalMoney = ref(0);

function calculateMoney() {
  let totalMoneyInAccount = 0;
  let totalInterest = 0;
  for (let i = 0; i < month.value; i++) {
    totalMoneyInAccount += moneyPerMonth.value;
    let interestReceivedPerMonth = totalMoneyInAccount * rate.value / 100
    totalInterest += interestReceivedPerMonth;
  }
  totalMoney.value = totalMoneyInAccount + totalInterest;
}
</script>
<style scoped>
.card {
  position: relative;
  height: 600px;
  width: 400px;
  border-radius: 15px;
  animation: show-form 3s ease forwards;
}

@keyframes show-form {
  from {
    right: -300px;
    opacity: 0
  }
  to {
    right: 0;
    opacity: 1
  }
}
</style>
