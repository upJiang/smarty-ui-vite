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
            <SButton>普通按钮</SButton>
        </div>
    `
})
.use(SmartyUI)
.mount("#app");