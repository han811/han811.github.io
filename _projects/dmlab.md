---
title: Deep Machine Lab
category: Work
permalink: /experience/dmlab/
org: Deep Machine Lab (now BEN)
org_url: https://beninc.ai/
role: Research Engineer Intern
period: Jul 2020 - Jan 2021
date: 2021-01-01   # end of the period; lists are sorted newest first
image: /assets/img/projects/dmlab.jpg
summary: Real-time face and object detection on the Google Coral Edge TPU, and a DialoGPT-based chatbot for an emotion-aware interactive avatar.
tags: [Edge AI, Object Detection, Chatbot]
redirect_from:
  - /projects/dmlab/
---

As a Research Engineer Intern at Deep Machine Lab, I built two pieces of an **emotion-aware interactive AI avatar**: on-device perception and a supportive dialogue model.

Deep Machine Lab has since merged into [Brand Engagement Network (BEN)](https://beninc.ai/), which trades on NASDAQ as **BNAI** ([article](https://www.mk.co.kr/en/it/10996415), [press release](https://www.nasdaq.com/press-release/ben-launches-iskye-ai-platform-2025-04-22)).

## On-device perception on the Coral Edge TPU

Implemented a **real-time face and object detection** system on the Google Coral hardware accelerator. This involved converting an SSD (Single Shot MultiBox Detector) model to a quantized TFLite model so it could run efficiently on the Edge TPU.

{% include figure.html src="https://lh3.googleusercontent.com/vvBAqSnXyg3h9yS0JLyVehhV-e__3NFbZ6q7Ft-rEZp-9wDTVZ49yjuYJwfa4jQZ-RVnChHMr-DDC0T_fTxVyQg3iBMD-icMQooD6A=w2000-rw" caption="Google Coral accelerator." %}

## Emotionally supportive chatbot

Fine-tuned [DialoGPT](https://arxiv.org/abs/1911.00536) on Korean sentiment data so the chatbot could hold emotionally sensitive conversations for the emotional-wellness domain.
