---
title: Multi-Sensor Fusion for Robotic Arms
category: Research
home: true   # shown on the home page
org: MLCS Lab, Yonsei University
role: Undergraduate Researcher
period: Jun 2019 - Nov 2020
date: 2020-11-01   # end of the period; lists are sorted newest first
image: /assets/img/projects/vrep.jpg
summary: A multi-modal VAE that fuses RGB-D images, joint states, and pressure data for reinforcement learning of a robotic arm (graduation thesis).
tags: [VAE, Sensor Fusion, Reinforcement Learning, Simulation]
---

As an undergraduate researcher in the Machine Learning and Control Systems (MLCS) Lab at Yonsei University (advisor: Prof. Jongeun Choi), I worked on two projects.

## Multi-modal VAE sensor fusion (graduation thesis)

For my graduation thesis I developed a **Multi-Modal Variational Autoencoder (MVAE)** that fuses RGB-D images, joint states, and pressure readings into a shared latent space, to be used as the state representation for reinforcement learning of a robotic arm. Data was collected in a CoppeliaSim (V-REP) simulation.

<div class="fig-grid">
{% include figure.html src="/assets/img/projects/vrep.jpg" caption="Simulation environment for robotic data collection." %}
{% include figure.html src="/assets/img/projects/data.png" caption="An example of the collected multi-modal data." %}
</div>

<div class="fig-grid">
{% include figure.html src="/assets/img/projects/system.png" caption="MVAE network architecture." %}
{% include figure.html src="/assets/img/projects/result.jpg" caption="Generated data when traversing each latent dimension." %}
</div>

## Mecanum-wheel mobile robot navigation

Developed an obstacle avoidance algorithm robust to dynamic environments for a mecanum-wheel mobile robot, combining an **Extended Kalman Filter**, obstacle clustering, and the **Dynamic Window Approach (DWA)**.
