---
layout: page
title: MISC
img: assets/img/projects/misc/misc.png
importance: 3
category: Project
---

<h3>Deep Visual Odometry</h3>

For this project, I implemented DeepVO based on <a href="https://arxiv.org/abs/1709.08429">arxiv1</a> and <a href="https://arxiv.org/abs/1812.07869">arxiv2</a>, a deep visual odometry model, to estimate the motion of a robot from a sequence of camera images.

**Period: 2020.03 - 2020.07**

[code](https://github.com/han811/Tobigs_VO)

Our team implemented DeepVO and integrated it with the ROS Navigation stack. To test its effectiveness, we added Gaussian noise to the wheel odometry data and compared the navigation performance with and without DeepVO in the localization algorithm. Ultimately, we added DeepVO as a measurement model to the EKF (Extended Kalman Filter) localization algorithm.

<table>
  <tr>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/deepvo_hardware.png' | relative_url }}" alt="Image 1" style="width: 100%;">
        <figcaption style="text-align: center;">Robot Hardware Configuration.</figcaption>
    </td>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/deepvo_system.png' | relative_url }}" alt="Image 2" style="width: 100%;">
        <figcaption style="text-align: center;">Navigation Software Architecture.</figcaption>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/deepvo_env1.png' | relative_url }}" alt="Image 1" style="width: 100%;">
        <figcaption style="text-align: center;">Environment Scene 1.</figcaption>
    </td>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/deepvo_env2.png' | relative_url }}" alt="Image 2" style="width: 100%;">
        <figcaption style="text-align: center;">Environment Scene 2.</figcaption>
    </td>
  </tr>
  <figcaption style="text-align: center;">Navigation Experiment Environment. (The red dot is the target destination.)</figcaption>
</table>

<br>

<table>
  <tr>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/deepvo_result1.gif' | relative_url }}" alt="Image 1" style="width: 100%;">
        <figcaption style="text-align: center;">Navigation without DeepVO.</figcaption>
    </td>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/deepvo_result2.gif' | relative_url }}" alt="Image 2" style="width: 100%;">
        <figcaption style="text-align: center;">Navigation with DeepVO.</figcaption>
    </td>
  </tr>
  <figcaption style="text-align: center;">Navigation Experiment Result. (The red dot is the target destination.)</figcaption>
</table>

<br>
<hr>

<h3>MVAE Multi-Sensor Data Fusion for Robotic Arms</h3>

For my graduation thesis, I conducted a study on fusing robot sensor data using an MVAE model.

**Period: 2020.03 - 2020.06**

<table>
  <tr>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/vrep.png' | relative_url }}" alt="Image 1" style="width: 100%;">
        <figcaption style="text-align: center;">Simulation Env for Robotic Data Collection.</figcaption>
    </td>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/data.png' | relative_url }}" alt="Image 2" style="width: 100%;">
        <figcaption style="text-align: center;">An Example of Collected Data.</figcaption>
    </td>
  </tr>
</table>

<br>

<table>
  <tr>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/system.png' | relative_url }}" alt="Image 1" style="width: 100%;">
        <figcaption style="text-align: center;">MVAE Neural Network Architecture.</figcaption>
    </td>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/result.png' | relative_url }}" alt="Image 2" style="width: 100%;">
        <figcaption style="text-align: center;">Data generation by manipulating the values of each dimension of the latent vector.</figcaption>
    </td>
  </tr>
</table>

<br>
<hr>

<h3>Autonomous AED Delivery Robot</h3>

For my graduation project, I designed and built an autonomous delivery robot from the ground up, including all the hardware and software components.

**Period: 2019.09 - 2019.12**

<table>
  <tr>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/aed_1.png' | relative_url }}" alt="Image 1" style="width: 100%;">
        <figcaption style="text-align: center;">3D CAD Modeling.</figcaption>
    </td>
    <td style="padding: 10px;">
        <img src="{{ '/assets/img/projects/misc/misc.png' | relative_url }}" alt="Image 2" style="width: 100%;">
        <figcaption style="text-align: center;">Final Product.</figcaption>
    </td>
  </tr>
</table>

<br>

<img src="/assets/img/projects/misc/aed_2.png" width="100%">
<figcaption style="text-align: center;">Overall System Architecture.</figcaption>

<br>

<div style="text-align: center;">
    <img src="/assets/img/projects/misc/aed.gif" width="50%">
    <figcaption style="text-align: center;">Scenario.</figcaption>
</div>
