---
layout: page
title: Projects
description: Research and side projects.
permalink: /projects/
redirect_from:
  - /projects/misc/
---

{% assign side = site.projects | where: "category", "Research" | sort: "date" | reverse %}
<div class="cards">
  {% for p in side %}{% include project-card.html project=p %}{% endfor %}
</div>
