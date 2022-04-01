# WGG Homepage

![Tests](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/workflows/Tests/badge.svg)

## FAQ

> How do I contribute to this project?

Clone this repository, install the necessary dependencies with npm and composer and host it with artisan. For mor detailed information please refer to [CONTRIBUTING.md](/CONTRIBUTING.md).

> How do I write an article?

- Create an article.html file in `/resources/content/articles/`
- Give the file the appropriate header:
	```yml
	---
	title: 'Titel des Artikels'
	link: link-zum-artikel #Sollte dem Dateinamen entsprechen
	category: Allgemein #Bei Artikeln zu einem Fach sollte das Fach als Kategorie angegeben werden
	author: 'Max Mustermann' #Ist optional, kann auch weggelassen werden
	thumbnail: construction_sign_thumbnail #This and thumbnail_slide need to be registered in order for them to work
	thumbnail_slide: construction_sign_slide
	published_on: '02.11.2020 00:12' #Ist optional, kann auch weggelassen werden
	---
	```
- Put your images into `/resources/img/` and register them in `/resources/js/images.js` using the pipeline `thumbnail` for the thumbnail and `slide` for thumbnail_slide.
- Write the content of your article below the header with basic html syntax

For more information please refer to [WRITING.md](/WRITING.md).

> How do I put images into my articles?

- Register them in `images.js`
- Use the `<v-image>` component to insert the image into a `<figure>`:
	```html
	<figure>
		<v-image name="name_of_your_image" alt="Beschreibung"></v-image>
		<figcaption>Untertitel (optional)</figcaption>
	</figure>
	```
For more information please refer to [WRITING.md 2.3.5 Images](/WRITING.md#235-images).

> How do I put links into my articles?

- If you want to another article use the `<inertia-link>` component:
	```html
	<inertia-link href="/link-to-other-article">Text</inertia-link>
	```
- If you want to link away from our website use the default `<a>` tag from HTML:
	```html
	<a href="https://github.com">Text</a>
	```
> I'm an advanced developer, how do I add new features/components to this website?

This website was/is developed using Laravel, Vue.js 3 and InertiaJS. We have tried to stick to the industry standards and best practices as closely as possible. If you know how these work you will know how this project works. There is some more information you should know about:

If you want to use new custom Vue Components in articles, you will have to register them in `Article.vue` and apply them.

For more detailed information please refer to [DEVELOPING.md](/DEVELOPING.md).

## Live Deployment

View the [current version of the development branch](https://current-dev-version-rqm5kgi.alexanderhorner.com) and other deployments like pull requests in the environments section or under [deployments](https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage/deployments).

<img src="https://i.postimg.cc/FH8HjyBZ/Screenshot-2021-11-13-at-16-32-51.png" alt="Environment Section" width="350"/>

![homescreen](https://github.com/Erdragh/Erdragh.github.io/raw/master/img/home.png)


