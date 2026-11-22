# han811.github.io

Source for [han811.github.io](https://han811.github.io). It is a Jekyll site with no theme and four plugins. GitHub Pages builds it on every push to `main`
(Settings > Pages > Source: *Deploy from a branch*, `main` / `/ (root)`).

## Local preview

```bash
docker compose up      # http://localhost:4000 (the first run builds the image, which takes a few minutes)
```

Saving a file rebuilds the site and reloads the browser. Changes to `_config.yml` need a restart. Press Ctrl+C to stop.

## Where to edit

| To change | Edit |
|---|---|
| Bio, affiliation, links, menu | `index.md`, `_config.yml` |
| Work experience and education on the home page | `_data/experience.yml` |
| Papers and patents | `_data/publications.yml` (thumbnails go in `assets/img/publications/`) |
| Robot strip on the home page | `_data/robots.yml` |
| Experience and project pages | `_projects/<slug>.md` (front matter below) |
| Blog posts | `_posts/YYYY-MM-DD-slug.md` (see below) |
| Colors and fonts | the tokens section at the top of `assets/css/main.scss` |

Front matter for `_projects/<slug>.md`:

| Key | Meaning |
|---|---|
| `category` | `Work` lists the page under /experience/, `Research` under /projects/ |
| `date` | End of the period. Lists are sorted newest first by this. Jekyll skips pages dated in the future. |
| `home: true` | Also show the card on the home page |
| `image` | Card image. The card crops it to 3:2. |
| `summary` | One line shown on the card. Optional. |

## Writing a blog post

A file named `_posts/2026-09-20-my-post.md` is published at `/blog/2026/my-post/`.

````markdown
---
title: Post title
tags: [robot-learning]   # optional
math: true               # only for posts with math (loads KaTeX)
---
The first paragraph is used as the RSS summary.
<!--more-->

* TOC
{:toc}

Inline math looks like $$\pi_\theta(a \mid s)$$. Block math goes on its own lines:

$$
J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}\left[\sum_t \gamma^t r_t\right]
$$

```python
print("code blocks are highlighted automatically")
```

{% include figure.html src="/assets/img/posts/a.png" caption="Caption" width="70%" %}
{% include youtube.html id="VIDEO_ID" start=30 caption="Caption" %}
{% include video.html src="/assets/img/posts/clip.mp4" caption="Caption" %}
````

For a post written in Korean, add `lang: ko` to the front matter.
