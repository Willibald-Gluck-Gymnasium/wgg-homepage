# Content v2 Minimal Starter

Look at the [Content documentation](https://content-v2.nuxtjs.org/) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.


## Writing Content

### Metadata in the document head

```yaml
---
title: 'Beispiel Artikel'
date: 2023.04.31
tags: [Mathe, Neuigkeiten, Unterricht]
author: 'Max Mustermann'
thumbnail: 
    src: thumbnail.jpg # Place it inside the public/images/ folder
    alt: Ein thumbnail
---
# Content
```

### Images in the article

#### Plain markdown
```markdown
![Ein Foto der roten Schule von vorne](/images/schule.jpg)
```

#### As html tag (if you want to add some css for example)
```html
<img src="/images/schule.jpg" alt="Ein Foto der roten Schule von vorne">
```

#### With a caption
```html
<figure>
    <img src="/images/schule.jpg" alt="Ein Foto der roten Schule von vorne">
    <figcaption>Ein Foto der roten Schule von vorne</figcaption>
</figure>
```

### Pin/Highlight articles+

Pinned articles will appear in the Highlights Section of the homepage.

```yaml
---
title: 'Beispiel Artikel'
pinned: true
...
---
```

### Hide Articles

Hidden articles will not appear on the homepage or on the category view. It is searchable though.

```yaml
---
title: 'Beispiel Artikel'
hidden: true
...
---
```

### Redirect from article

If the redirect property is set on an article, the user will be redirected to the set url. The history entry will be replaced. 

```yaml
---
title: 'Beispiel Artikel'
redirect: '/tag/Bücher'
...
---
```