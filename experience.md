---
layout: page
title: Work Experience
description: Where I have worked and what I built there.
permalink: /experience/
---

{% assign work = site.projects | where: "category", "Work" | sort: "date" | reverse %}
<div class="cards">
  {% for p in work %}{% include project-card.html project=p %}{% endfor %}
</div>
