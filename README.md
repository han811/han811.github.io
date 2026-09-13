# han811.github.io

[han811.github.io](https://han811.github.io) 소스. 테마·플러그인 최소화한 Jekyll 사이트이며, `main`에 push하면 GitHub Pages가 알아서 빌드합니다
(Settings → Pages → Source: *Deploy from a branch*, `main` / `/ (root)`).

## 로컬 미리보기

```bash
docker compose up      # → http://localhost:4000  (첫 실행만 이미지 빌드로 몇 분 소요)
```

파일을 고치면 자동으로 다시 빌드되고, 브라우저 새로고침만 하면 됩니다. Ctrl+C로 종료.

## 어디를 고치나

| 하고 싶은 것 | 파일 |
|---|---|
| 소개글, 소속, 링크, 메뉴 | `index.md`, `_config.yml` |
| 경력 / 학력 | `_data/experience.yml` |
| 논문 / 특허 | `_data/publications.yml` (썸네일: `assets/img/publications/`) |
| 홈의 로봇 목록 | `_data/robots.yml` |
| 경력 상세 / 프로젝트 | `_projects/<slug>.md`, front matter의 `category`(Work → /experience/, Research → /projects/), `date`(기간 종료 시점, 최신순 정렬 기준), `home: true`(홈에 노출), `image`, `summary` |
| 블로그 글 | `_posts/YYYY-MM-DD-slug.md` (아래 참고) |
| 색상 / 폰트 | `assets/css/main.scss` 맨 위 tokens 섹션 |

## 블로그 글 쓰기

`_posts/2026-09-20-my-post.md`처럼 만들면 `/blog/2026/my-post/`에 올라갑니다.

````markdown
---
title: 글 제목
tags: [robot-learning]   # 선택
math: true               # 수식 쓸 때만 (KaTeX 로드)
---
첫 문단은 RSS 요약으로 쓰입니다.
<!--more-->

* TOC
{:toc}

인라인 수식 $$\pi_\theta(a \mid s)$$, 블록 수식은 한 줄을 통째로:

$$
J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}\left[\sum_t \gamma^t r_t\right]
$$

```python
print("코드 블록은 자동 하이라이팅")
```

{% include figure.html src="/assets/img/posts/a.png" caption="캡션" width="70%" %}
{% include youtube.html id="VIDEO_ID" start=30 caption="캡션" %}
{% include video.html src="/assets/img/posts/clip.mp4" caption="캡션" %}
````

한국어 글이면 front matter에 `lang: ko`를 추가하세요.
