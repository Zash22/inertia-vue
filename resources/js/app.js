import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

//Pinia related
// import { createPinia } from 'pinia'
// import App from app
// import App from './App.vue'
// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)
// app.mount('#app')
//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia();
// export default pinia

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// app.use(pinia);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(pinia) //huh, why did this work?
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
