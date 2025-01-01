import { createApp } from 'vue';

import App from './App.vue'

import BaseCard from './UI/BaseCard.vue';

import BaseButton  from './UI/BasseButton.vue';


const app = createApp(App);

app.component('base-button',BaseButton);
app.component('base-card',BaseCard);

app.mount('#app');