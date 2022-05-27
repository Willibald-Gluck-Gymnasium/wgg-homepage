This is documentation for future developers on how to implement new features to the website. This should only be relevant to you if you decide to add a new component or make any mayor change to the way this website functions/looks.

## How to add another custom component for articles

In Vue, every component has to be registered before you can use them. You can register your component globally, or inside your parent component (more efficient). 

All articles share the same component, so you have to register your components there. Open `resources/js/Pages/Article.vue`, go to the setup function, to the `onMounted()` lifecycle hook. Here the vue function `createApp()` is called to render the Article code from the database. Here you register your components. They are registered like global components.

```js
//Other imports

import { Head, Link } from '@inertiajs/inertia-vue3';

//Other imports

import Youtube from '@components/Youtube'
import Image from '@components/Image'
import VueForm from '@components/VueForm'
import Component from '@components/Component' //Replace the actual parts with the relevant information

//Other imports

export default defineComponent({

	//Other component scripting

	setup(props) {

		//Other setup

		onMounted(() => {
			createApp(ArticleComponent)
				.component("youtube", Youtube)
				.component("v-image", Image)
				.component("inertia-link", Link)
				.component("vue-form", VueForm)
				.component("html-tag", Component) // Replace the actual parts with the relevant information
				.mount(articlecontent.value)
		})
	}
})
```