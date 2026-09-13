---
title: erAIser
category: Research
home: true   # shown on the home page
role: Project Member
period: Mar 2021 - Jul 2021
date: 2021-07-01   # end of the period; lists are sorted newest first
image: /assets/img/projects/eraiser-after.jpg
summary: Removing unwanted objects from video with segmentation, inpainting, and animation models. I implemented the VINet-based inpainting stage.
tags: [Video Inpainting, Computer Vision, Deep Learning]
redirect_from:
  - /projects/erAIser/
---

erAIser removes unwanted objects from videos end to end. The pipeline has three stages, each powered by a deep learning model: **video object segmentation** (VOSNet), **video inpainting** (VINet), and **re-animation** of the removed object's motion with new imagery (AANet). My role was implementing the VINet-based inpainting stage.

[Code on GitHub](https://github.com/sangnekim/erAIser)

## Result

{% include video.html src="/assets/img/projects/eraiser-before.mp4" poster="/assets/img/projects/eraiser-before.jpg" caption="Before inpainting." %}

{% include video.html src="/assets/img/projects/eraiser-after.mp4" poster="/assets/img/projects/eraiser-after.jpg" caption="After inpainting." width="60%" %}
