---
title: Deep Visual Odometry for Robot Navigation
category: Research
org: Tobigs
role: Team Project
period: Mar 2020 - Jul 2020
date: 2020-07-01   # end of the period; lists are sorted newest first
image: /assets/img/projects/deepvo-hardware.jpg
summary: DeepVO as an EKF measurement model in the ROS navigation stack, evaluated against noisy wheel odometry on a real robot.
tags: [Visual Odometry, Deep Learning, ROS, Navigation]
---

We implemented **DeepVO**, a deep visual odometry model ([paper 1](https://arxiv.org/abs/1709.08429), [paper 2](https://arxiv.org/abs/1812.07869)), to estimate a robot's motion from a sequence of camera images, and integrated it with the ROS navigation stack.

[Code on GitHub](https://github.com/han811/Tobigs_VO)

To test its effectiveness we added Gaussian noise to the wheel odometry and compared navigation performance with and without DeepVO in the localization loop. In the end DeepVO was added as a **measurement model to the EKF** localization algorithm.

<div class="fig-grid">
{% include figure.html src="/assets/img/projects/deepvo-hardware.jpg" caption="Robot hardware configuration." %}
{% include figure.html src="/assets/img/projects/deepvo-system.png" caption="Navigation software architecture." %}
</div>

<div class="fig-grid">
{% include figure.html src="/assets/img/projects/deepvo-env1.jpg" caption="Experiment environment, scene 1." %}
{% include figure.html src="/assets/img/projects/deepvo-env2.jpg" caption="Experiment environment, scene 2." %}
</div>

## Result

The red dot is the target destination.

<div class="fig-grid">
{% include video.html src="/assets/img/projects/deepvo-without.mp4" poster="/assets/img/projects/deepvo-without.jpg" caption="Navigation without DeepVO." %}
{% include video.html src="/assets/img/projects/deepvo-with.mp4" poster="/assets/img/projects/deepvo-with.jpg" caption="Navigation with DeepVO." %}
</div>
