---
title: Samsung Research
category: Work
permalink: /experience/samsung-research/
org: Samsung Research
org_url: https://research.samsung.com/
role: Robotics Research Engineer
period: Jul 2022 - Aug 2026
date: 2026-08-01   # end of the period; lists are sorted newest first
image: /assets/img/projects/samsung-research.jpg
summary: VLA models, imitation learning, and RL fine-tuning for precise manipulation and humanoid control. Sound source localization for Samsung Ballie.
tags: [VLA, Imitation Learning, Reinforcement Learning, Humanoid, Sound Source Localization]
redirect_from:
  - /projects/samsung_research/
---

As a Robotics Research Engineer at [Samsung Research](https://research.samsung.com/), I worked on learning-based robot manipulation: vision-language-action (VLA) models, imitation learning, and reinforcement learning for manipulators and humanoids. I also developed the sound source localization (SSL) algorithm for the home robot **Samsung Ballie**.

## VLA models for manipulation and humanoid control

- Developed a **reinforcement learning post-training** method for VLA models: trained **residual RL policies** on top of the pre-trained VLA and imitation-learning policies, targeting precise assembly tasks with **2 mm tolerance** on real hardware. Also explored training a small policy with offline RL and fine-tuning it online (following [residual assembly](https://residual-assembly.github.io/) and [WSRL](https://zhouzypaul.github.io/wsrl/)).
- Benchmarked existing VLA models ([π0](https://www.physicalintelligence.company/blog/pi0), [π0.5](https://www.physicalintelligence.company/blog/pi05), [GR00T N1.7](https://github.com/NVIDIA/Isaac-GR00T), [OpenVLA-OFT](https://openvla-oft.github.io/)) across multiple robot platforms, including the **RB-Y1 humanoid**, and built a unified VLA deployment framework for systematic evaluation from coarse- to fine-grained tasks.
- Collaborated with academic labs, industry partners, and startups.

{% include youtube.html id="owLx0JoQ_UE" start=335 title="Samsung Tech Conference 2025" caption="Humanoid manipulation demo I worked on, shown at the 2025 Samsung Tech Conference (from 5:35)." %}

{% include youtube.html id="KnW9lU0lK5g" start=165 title="NVIDIA promotional video" caption="A short appearance of the RB-Y1 humanoid control in an NVIDIA promotional video (2:45)." %}

## End-to-end policies for bi-manual assembly

- Designed an imitation-learning architecture that incorporates **force/torque sensing** for high-precision bi-manual assembly, building on [Octo](https://octo-models.github.io/). Added vision backbones for stronger spatial perception and built tooling that automates data acquisition.
- Benchmarked behavior cloning models ([ACT](https://tonyzhaozh.github.io/aloha/), [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/), [Octo](https://octo-models.github.io/)) across diverse manipulation tasks.

## Dexterous in-hand manipulation via reinforcement learning

- Trained **in-hand object rotation** policies from scratch in Isaac Lab with a multi-fingered robotic hand, building on [HORA](https://haozhi.io/hora/) (In-Hand Object Rotation via Rapid Motor Adaptation, CoRL 2022). HORA trains a policy in simulation with privileged object information (size, mass, friction), then trains an adaptation module that estimates those properties from proprioception alone, so the policy can be deployed on the real hand without vision. I trained the policy in Isaac Lab and deployed it on the real multi-fingered hand.

## Sound source localization for Samsung Ballie

- Developed a lightweight **MobileNetV3-based SSL model** robust to 0 dB SNR conditions.
- Deployed and tuned a classical SSL pipeline on the Ballie platform.

{% include youtube.html id="YBfSX3QiqDM" start=48 title="Samsung Ballie" caption="Samsung Ballie. The SSL feature I worked on appears at 0:48." %}
