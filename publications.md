---
layout: page
title: Publications
description: Newest first.
permalink: /publications/
redirect_from:
  - /publication/
---

{% assign years = site.data.publications.papers | map: "year" | uniq %}
{% for y in years %}
<h3 class="year">{{ y }}</h3>
<div class="pub-list">
  {% for pub in site.data.publications.papers %}{% if pub.year == y %}{% include pub.html pub=pub %}{% endif %}{% endfor %}
</div>
{% endfor %}
