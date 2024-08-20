<template>
  <table v-if="isShowResult">
    <tr>
      <th></th>
      <th>{{ t('moneyTable.money') }}</th>
    </tr>
    <tr>
      <td>{{ t('moneyTable.yourMoney') }}</td>
      <td>{{ props.yourMoney }} VND</td>
    </tr>
    <tr>
      <td>{{ t('moneyTable.interestMoney') }}</td>
      <td>{{ props.interestMoney }} VND</td>
    </tr>
    <tr>
      <td>{{ t('moneyTable.totalMoney') }}</td>
      <td>{{ props.totalMoney }} VND</td>
    </tr>
  </table>
</template>
<script setup>
import {ref, defineExpose, defineProps} from "vue";
import {useI18n} from 'vue-i18n'

const {t} = useI18n();
let props = defineProps({
  yourMoney: {
    type: String,
    required: false,
    default: '0'
  },
  interestMoney: {
    type: String,
    required: false,
    default: '0'
  },
  totalMoney: {
    type: String,
    required: false,
    default: '0'
  },
});
let isShowResult = ref(false);
defineExpose({
  showResult() {
    isShowResult.value = true;
  },
  hideResult() {
    isShowResult.value = false;
  }
})
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}


</style>
