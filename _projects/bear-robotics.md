---
title: Bear Robotics
category: Work
permalink: /experience/bear-robotics/
org: Bear Robotics
org_url: https://www.bearrobotics.ai/
role: Software Engineer Intern
period: Apr 2022 - Jul 2022
date: 2022-07-01   # end of the period; lists are sorted newest first
image: /assets/img/projects/bear-robotics.jpg
summary: Graph-based SLAM and visual SLAM (ORB-SLAM3, UcoSLAM) benchmarking for the Servi serving robot.
tags: [SLAM, Navigation, ROS]
redirect_from:
  - /projects/bearrobotics/
---

As a Software Engineer Intern at [Bear Robotics](https://www.bearrobotics.ai/), I worked on the navigation stack of **Servi**, an autonomous serving robot for restaurants. My focus was mapping and localization: replacing the filter-based SLAM with a graph-based approach and evaluating visual SLAM algorithms on the robot.

{% include youtube.html id="G2bimZ5hBBc" title="Bear Robotics Servi" caption="Servi in action." %}

## Graph-based SLAM

Integrated a more robust, noise-tolerant **graph-based SLAM** algorithm on Servi, moving away from the previous filter-based approach. The result was more consistent maps at a lower computational cost.

{% include figure.html src="https://google-cartographer-ros.readthedocs.io/en/latest/_images/demo_2d.gif" caption="An example of graph-based SLAM (Google Cartographer)." %}

## Visual SLAM evaluation

Ran experiments applying open-source visual SLAM algorithms, **ORB-SLAM3** and **UcoSLAM**, to the robot's cameras and compared their mapping and localization quality against the LiDAR-based pipeline.

{% include youtube.html id="HyLNq-98LRo" title="ORB-SLAM3 example" caption="An example of visual SLAM (ORB-SLAM3)." %}
