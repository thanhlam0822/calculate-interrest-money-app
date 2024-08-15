import {createApp} from 'vue';
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "./style.css";
import "./flags.css";
import AppState from './plugins/appState.js';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import SelectButton from "primevue/selectbutton";
import ToggleSwitch from "primevue/toggleswitch";
import Noir from './presets/Noir.js';
import StyleClass from 'primevue/styleclass';


import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
});
app.use(AppState);
app.directive('styleclass', StyleClass);
app.component('ThemeSwitcher', ThemeSwitcher);
app.component('SelectButton', SelectButton);
app.component('ToggleSwitch', ToggleSwitch);
app.mount('#app');

