---
layout: default
permalink: /
---

<section class="hero">
  <div>
    <h1>{{ site.author.name }}</h1>
    <p class="role">{{ site.author.role }} · {% if site.author.affiliation_url != "" %}<a href="{{ site.author.affiliation_url }}">{{ site.author.affiliation }}</a>{% else %}{{ site.author.affiliation }}{% endif %}</p>
    <div class="bio">
      <p>I'm a research engineer working on <strong>learning-based robot manipulation and humanoids.</strong> At <a href="https://www.ludorobotics.ai/">Ludo Robotics</a>, I'm building a foundation model for social humanoid interaction.</p>
      <p>Before that, I spent four years at <a href="https://research.samsung.com/">Samsung Research</a>, working on vision-language-action (VLA) models, imitation-learning policies, and RL fine-tuning for precise manipulation and humanoid control. I also built the sound source localization system for <a href="https://www.youtube.com/watch?v=YBfSX3QiqDM&t=48s">Samsung Ballie</a>.</p>
    </div>
    <div class="links">
      {% for l in site.links %}<a href="{{ l.url }}"{% unless l.url contains "mailto:" %} target="_blank" rel="noopener"{% endunless %}>{% include icon.html name=l.icon %}{{ l.name }}</a>{% endfor %}
    </div>
  </div>
  <img class="hero-photo" src="{{ site.author.photo | relative_url }}" alt="{{ site.author.name }}" width="168" height="168">
</section>

<section class="robots">
  <p class="robots-label">Robots I've worked with</p>
  <div class="robots-grid">
    {% assign robots = site.data.robots | sort: "date" | reverse %}
    {% for r in robots %}
    <a class="robot" href="{% if r.url contains '://' %}{{ r.url }}{% else %}{{ r.url | relative_url }}{% endif %}">
      <img src="{{ r.image | relative_url }}" alt="{{ r.name }}" loading="lazy" width="70" height="70">
      <span>{{ r.name }}</span>
    </a>
    {% endfor %}
  </div>
</section>

<section class="section" id="experience">
  <div class="section-head"><h2>Work Experience</h2><a class="more" href="{{ '/experience/' | relative_url }}">All work experience &rarr;</a></div>
  <div class="xp-list">
    {% for x in site.data.experience.work %}
    <div class="xp">
      <div>
        <span class="xp-org">{% if x.page %}<a href="{{ x.page | relative_url }}">{{ x.org }}</a>{% elsif x.url %}<a href="{{ x.url }}">{{ x.org }}</a>{% else %}{{ x.org }}{% endif %}</span>
        <span class="sep">·</span><span class="xp-role">{{ x.role }}</span>
      </div>
      <span class="xp-period">{{ x.period }}</span>
      {% if x.summary %}<p class="xp-summary">{{ x.summary }}</p>{% endif %}
    </div>
    {% endfor %}
  </div>
</section>

<section class="section" id="education">
  <div class="section-head"><h2>Education</h2></div>
  <div class="xp-list">
    {% for e in site.data.experience.education %}
    <div class="xp">
      <div><span class="xp-org">{{ e.org }}</span><span class="sep">·</span><span class="xp-role">{{ e.role }}</span></div>
      <span class="xp-period">{{ e.period }}</span>
    </div>
    {% endfor %}
  </div>
</section>

<section class="section" id="publications">
  <div class="section-head"><h2>Publications</h2><a class="more" href="{{ '/publications/' | relative_url }}">All publications &rarr;</a></div>
  <div class="pub-list">
    {% assign selected = site.data.publications.papers | where: "selected", true %}
    {% for pub in selected %}{% include pub.html pub=pub %}{% endfor %}
  </div>
</section>

<section class="section" id="projects">
  <div class="section-head"><h2>Projects</h2><a class="more" href="{{ '/projects/' | relative_url }}">All projects &rarr;</a></div>
  <div class="cards">
    {% assign picks = site.projects | where: "home", true | sort: "date" | reverse %}
    {% for p in picks %}{% include project-card.html project=p %}{% endfor %}
  </div>
</section>

{% if site.posts.size > 0 %}
<section class="section" id="writing">
  <div class="section-head"><h2>Writing</h2><a class="more" href="{{ '/blog/' | relative_url }}">All posts &rarr;</a></div>
  <div class="post-list">
    {% assign latest = site.posts | slice: 0, 5 %}
    {% include post-list.html posts=latest %}
  </div>
</section>
{% endif %}
