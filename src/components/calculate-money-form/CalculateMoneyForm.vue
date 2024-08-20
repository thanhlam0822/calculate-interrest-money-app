<template>
  <div class="card">
    <div class="flex flex-col gap-2">
      <label for="original-money">{{ t('calculateForm.originalMoney') }}</label>
      <InputNumber prefix="$" id="original-money" v-model="originalMoney"/>
      <small id="original-money-help">{{ t('calculateForm.originalMoneyHelp') }}</small>
    </div>
    <div class="flex flex-col gap-2">
      <label for="money-per-month">{{ t('calculateForm.moneyPerMonth') }}</label>
      <InputNumber prefix="$" id="money-per-month" v-model="moneyPerMonth"/>
      <small id="money-per-month-help">{{ t('calculateForm.moneyPerMonthHelp') }}</small>
    </div>
    <div class="flex flex-col gap-2">
      <label for="month">{{ t('calculateForm.numberOfMonth') }}</label>
      <InputNumber id="month" v-model="month"/>
      <small id="month-help">{{ t('calculateForm.numberOfMonthHelp') }}</small>
    </div>
    <div class="flex flex-col gap-2">
      <label for="rate">{{ t('calculateForm.rate') }}</label>
      <InputNumber :minFractionDigits="2" id="rate" v-model="rate" prefix="%" fluid/>
      <small id="rate-help">{{ t('calculateForm.rateHelp') }}</small>
    </div>
    <div class="flex flex-col gap-2" style="margin-top: 15px">
      <div style="display:flex;justify-content: space-around;gap: 10px">
        <Button style="flex-grow: 1"
                :label="t('calculateForm.calculate')"
                severity="contrast"
                @click="calculateMoney"/>
        <Button v-if="isShowClearButton"
                style="flex-basis: 25%;"
                :label="t('calculateForm.clear')"
                @click="clearForm"/>
      </div>
    </div>
    <div>
      <total-money-table ref="totalMoneyTable"
                         :interest-money="formatMoneyResult(interestMoney)"
                         :total-money="formatMoneyResult(totalMoney)"
                         :your-money="formatMoneyResult(yourMoney)"/>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import TotalMoneyTable from "@/components/calculate-money-form/components/TotalMoneyTable.vue";
import {useI18n} from 'vue-i18n'

const {t} = useI18n();
let rate = ref(0);
let originalMoney = ref(0);
let moneyPerMonth = ref(0);
let month = ref(0);
let totalMoney = ref(0);
let totalMoneyTable = ref(TotalMoneyTable);
let yourMoney = ref(0);
let interestMoney = ref(0);
let isShowClearButton = ref(false);

function calculateMoney() {
  let totalMoneyInAccount = originalMoney.value;
  let totalInterest = 0;
  for (let i = 0; i < month.value; i++) {
    totalMoneyInAccount += moneyPerMonth.value;
    let interestReceivedPerMonth = totalMoneyInAccount * rate.value / 100
    totalInterest += interestReceivedPerMonth;
  }
  yourMoney.value = totalMoneyInAccount;
  interestMoney.value = totalInterest;
  totalMoney.value = totalMoneyInAccount + totalInterest;
  isShowClearButton.value = true;
  showResult();
}

function formatMoneyResult(money) {
  return money.toLocaleString();
}

function showResult() {
  if (totalMoneyTable.value) {
    totalMoneyTable.value?.showResult();
  }
}

function clearForm() {
  originalMoney.value = 0;
  moneyPerMonth.value = 0;
  month.value = 0;
  rate.value = 0;
  totalMoneyTable.value?.hideResult();
  isShowClearButton.value = false;
}
</script>
<style scoped>
.card {
  position: relative;
  height: auto;
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
