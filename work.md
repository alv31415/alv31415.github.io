---
layout: default
title: My Work
---

# My Work

Below are selected papers.

<div class="paper-grid">
{% for p in site.data.papers %}
  <article class="paper">
    <h3>{{ p.title }}</h3>
    <div class="meta">{{ p.authors }} — {{ p.year }}</div>
    <p>{{ p.description }}</p>
    {% if p.pdf %}
      <a class="button" href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">Download PDF</a>
    {% endif %}
  </article>
{% endfor %}
</div>
