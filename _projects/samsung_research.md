---
layout: page
title: Samsung Research
img: assets/img/projects/samsung_research/samsung_ballie.png
importance: 1
category: Work
---

As a **Robotics AI Engineer** at <a href="https://research.samsung.com/">Samsung Research</a>, I conducted research on imitation learning, vision-language-action models (VLA model) and reinforcement learning for robot manipulation and humanoids (e.g. nvidia promotion video <a href="https://www.youtube.com/watch?v=KnW9lU0lK5g&t=165s">(1-second appearance at 2:45)</a>, Samsung Tech Conference 2025 <a href="https://youtu.be/owLx0JoQ_UE?si=e-yl10B6Xao4pFUf&t=435">(7:15~7:35)</a>). I also developed a sound source localization algorithm for <a href="https://www.youtube.com/watch?v=YBfSX3QiqDM&t=48s">Samsung Ballie (shown at 0:48)</a>.

**Period: 2022.07 - present**

<br>

<h3>Projects</h3>
My work at Samsung Research focuses on two main areas:
1. Developing VLA models (e.g., <a href="https://openvla.github.io/">OpenVLA</a>, <a href="https://www.physicalintelligence.company/blog/pi0">&pi;0</a>) and imitation learning models (e.g., <a href="https://tonyzhaozh.github.io/aloha/">ACT</a>, <a href="https://diffusion-policy.cs.columbia.edu/">Diffusion Policy</a>) for robot manipulation and humanoid control.
2. Applying reinforcement learning to fine-tune these models for precise tasks.

In the imitation learning project, I designed a model architecture that incorporates force/torque (FT) sensors to enable high-precision manipulation. To further enhance performance, I integrated various vision backbones to leverage spatial perception and developed algorithms that automate the data acquisition process. (My work was based on <a href="https://octo-models.github.io/">OCTO</a>)

For VLA models, I evaluated various architectures across multiple robot platforms and built a unified VLA deployment framework, enabling systematic benchmarking from coarse-grained to fine-grained tasks.

In the reinforcement learning fine-tuning project, I worked on training the residuals of pre-trained imitation learning and VLA models, which enabled the application of learning-based algorithms for precision tasks. Furthermore, my research involved an approach of training a relatively small reinforcement learning policy with offline RL and then fine-tuning it with online RL. (My work was based on <a href="https://residual-assembly.github.io/">paper1</a> and <a href="https://zhouzypaul.github.io/wsrl/">paper2</a>)

Additionally, I also have experience developing a light-weight Sound Source Localization (SSL) algorithm for the robot, **Samsung Ballie**.

<br>

A brief introduction to a humanoid manipulation demo I worked on can be seen at 5:35.
<iframe width="100%" height="480" src="https://www.youtube-nocookie.com/embed/owLx0JoQ_UE?si=N-uOZ1LZVLdWDLA3&mute=1&amp;start=335" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<figcaption style="text-align: center;">2025 Samsung Tech Conference.</figcaption>

<br>

A short demonstration of the humanoid control I worked on appears at 2:45 for one second.
<iframe width="100%" height="480" title="YouTube video player" src="https://www.youtube.com/embed/KnW9lU0lK5g?si=v3xYX8GwglwINR-o&mute=1&amp;start=165" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption style="text-align: center;">NVIDIA Promotional Video.</figcaption>

<br>

The SSL feature I worked on for Samsung Ballie appears at 0:48.
<iframe width="100%" height="480" title="YouTube video player" src="https://www.youtube.com/embed/YBfSX3QiqDM?si=YCSoo7ZO5QZkqAIq&mute=1&amp;start=48" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<figcaption style="text-align: center;">Introduction of Samsung Ballie.</figcaption>
