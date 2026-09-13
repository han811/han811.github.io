---
layout: page
title: Blog
description: Occasional columns on things I've been studying: robot learning, RL, and engineering notes.
permalink: /blog/
---

{% if site.posts.size > 0 %}
<div class="post-list">
  {% include post-list.html posts=site.posts %}
</div>
{% else %}
<p class="empty">No posts yet. First one coming soon.</p>
{% endif %}
