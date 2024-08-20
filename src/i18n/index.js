import {createI18n} from "vue-i18n";

const i18n = createI18n({
    legacy: false, locale: 'en', fallbackLocale: 'en', messages: {
        en: {
            calculateForm: {
                originalMoney: 'Original Money',
                originalMoneyHelp: 'Enter your money you have from start.',
                moneyPerMonth: 'Money per month',
                moneyPerMonthHelp: 'Enter your fixed money per month.',
                numberOfMonth: 'Number of month',
                numberOfMonthHelp: 'Type in your month you choose to send money.',
                rate: 'Rate',
                rateHelp: 'Enter your bank rate',
                calculate: 'Calculate',
                clear: 'Clear'
            },
            moneyTable: {
                money: 'Money',
                yourMoney: 'Your money',
                interestMoney: 'Interest Money',
                totalMoney: 'Total Money'
            }
        }, vie: {
            calculateForm: {
                originalMoney: 'Số tiền gốc',
                originalMoneyHelp: 'Nhập vào số tiền gốc bạn có ban đầu.',
                moneyPerMonth: 'Tiền gửi vào hàng tháng',
                moneyPerMonthHelp: 'Nhập vào số tiền bạn gửi cố định hàng tháng.',
                numberOfMonth: 'Số tháng gửi',
                numberOfMonthHelp: 'Nhập vào số tháng bạn gửi tiền.',
                rate: 'Lãi',
                rateHelp: 'Nhập lãi ngân hàng.',
                calculate: 'Tính toán',
                clear: 'Xóa'
            },
            moneyTable: {
                money: 'Số tiền có được',
                yourMoney: 'Số tiền của bạn',
                interestMoney: 'Số tiền lãi nhận được',
                totalMoney: 'Tổng tiền nhận được'
            }
        }
    }
})

export function changeLocale(newLocale) {
    i18n.global.locale.value = newLocale;
}

export default i18n;
