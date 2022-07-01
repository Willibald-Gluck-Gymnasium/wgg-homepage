require('./bootstrap');
require('./images.js')


import { createApp, h, component } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import VueLazyLoad from 'vue3-lazyload'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => import(`./Pages/${name}`), // Dynamic import
    // resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            // .use(VueLazyLoad)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({
    delay: 150,
    color: '#ff881a'
});
