---
layout: default
title: My Work
---

# My Work

This page is divided into three sections: Publications, Preprints, and Personal.

## Publications

<div class="paper-grid">
{% for p in site.data.publications %}
  <article class="paper" data-year="{{ p.year }}" data-type="publication">
    <h3>{{ p.title }}</h3>
    <div class="meta">{{ p.authors }} — {{ p.year }}</div>
    <p>{{ p.description }}</p>
    {% if p.pdf %}
      <a class="button" href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">Download PDF</a>
    {% endif %}
  </article>
{% endfor %}
</div>


## Preprints

<div class="paper-grid">
{% for p in site.data.preprints %}
  <article class="paper" data-year="{{ p.year }}" data-type="preprint">
    <h3>{{ p.title }}</h3>
    <div class="meta">{{ p.authors }} — {{ p.year }}</div>
    <p>{{ p.description }}</p>
    {% if p.pdf %}
      <a class="button" href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">Download PDF</a>
    {% endif %}
  </article>
{% endfor %}
</div>


## Personal

<div class="paper-grid">
{% for p in site.data.personal %}
  <article class="paper" data-year="{{ p.year }}" data-type="personal">
    <h3>{{ p.title }}</h3>
    <div class="meta">{{ p.authors }} — {{ p.year }}</div>
    <p>{{ p.description }}</p>
    {% if p.pdf %}
      <a class="button" href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">Download PDF</a>
    {% endif %}
  </article>
{% endfor %}
</div>

