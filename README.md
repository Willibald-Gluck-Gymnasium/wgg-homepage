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
date: 2023-04-16
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

#### Retain transparancy by adding `format="png"`
```html
<img src="/images/schule.jpg" format="png" alt="Ein Foto der roten Schule von vorne">
```

### Other options
```html
<img src="src" alt="alt" width="width" height="height" format="format" preset="preset">
```

[More Info](https://image.nuxtjs.org/components/nuxt-img)



### Pin/Highlight articles

Pinned articles will appear in the Highlights Section of the homepage and appear first on the tag site.

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

***Slides ignore `hidden`.***


### Add expiration date (archive Articles)

Hidden articles will not appear on the homepage or on the category view. It is searchable though.

```yaml
---
title: 'Artikel wird archiviert am 17.06.2023'
expireOn: 2023-06-17
...
---
```

```yaml
---
title: 'Artikel wird archiviert am 30.01.2023 um 8:00 Uhr'
expireOn: 2023-01-30T08:00
...
---
```

***Slides ignore `expireOn`.***



### Redirect from article

If the redirect property is set on an article, the user will be redirected to the set url. The history entry will be replaced. 

```yaml
---
title: 'Beispiel Artikel'
redirect: '/tag/Bücher'
...
---
```

## Misc

### Searching by tags

You can display all articles containing a tag (or one of multiple tags). Tags are seperated by a plus sign.

`http://localhost:3000/tag/Geschichte`

`http://localhost:3000/tag/Geschichte+Mathe+Deutsch`


## Database 

To enable login functionality you need to connect a database (MariaDB) and a json web token.

```
NUXT_MARIA_DB_HOST = localhost
NUXT_MARIA_DB_DEFAULT_DATABASE = database
NUXT_MARIA_DB_USER = user
NUXT_MARIA_DB_PASSWORD = password
NUXT_MARIA_DB_PORT = 3306

NUXT_JWT_SECRET = 5e3b515547be8f9547d562991f2e7b1d5f5aca309e076763ef3388c8604db5e4
```