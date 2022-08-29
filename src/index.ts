import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry'
// import SButton from "./button";
// createApp(SButton).mount("#app");
// import SFCButton from "./button/SFCButton.vue";

// createApp(SFCButton)
// .mount("#app");

createApp({
    template:`
    <div>
        <SButton color="blue" round plain icon="search" ></SButton>
        <SButton color="green" round plain icon="edit" ></SButton>
        <SButton color="gray" round plain icon="check" ></SButton>
        <SButton color="yellow" round plain icon="message" ></SButton>
        <SButton color="red" round plain icon="delete" ></SButton>
    </div>
    `
})
.use(SmartyUI)
.mount("#app");