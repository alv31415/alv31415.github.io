---
layout: default
title: My Work
---

# My Work

## Publications

<div class="paper-grid">
{% for p in site.data.publications %}
  <article class="paper" data-year="{{ p.year }}" data-type="publication">
    <h3>{{ p.title }}</h3>
    <div class="meta">{{ p.authors }} — {{ p.year }}</div>
    <p>{{ p.description }}</p>
    {% if p.pdf %}
      <a class="button" href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
    {% endif %}

    {% if p.website %}
      <a class="button" href="{{ p.website }}" target="_blank" rel="noopener">Website</a>
    {% endif %}

    {% if p.arxiv %}
      <a class="button" href="{{ p.arxiv }}" target="_blank" rel="noopener">arXiv</a>
    {% endif %}

    {% if p.conference %}
      <a class="button" href="{{ p.conference }}" target="_blank" rel="noopener">Conference</a>
    {% endif %}

    {% if p.code %}
      <a class="button" href="{{ p.code }}" target="_blank" rel="noopener">Code</a>
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
      <a class="button" href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
    {% endif %}

    {% if p.website %}
      <a class="button" href="{{ p.website }}" target="_blank" rel="noopener">Website</a>
    {% endif %}

    {% if p.arxiv %}
      <a class="button" href="{{ p.arxiv }}" target="_blank" rel="noopener">arXiv</a>
    {% endif %}

    {% if p.conference %}
      <a class="button" href="{{ p.conference }}" target="_blank" rel="noopener">Conference</a>
    {% endif %}

    {% if p.code %}
      <a class="button" href="{{ p.code }}" target="_blank" rel="noopener">Code</a>
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
      <a class="button" href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
    {% endif %}

    {% if p.website %}
      <a class="button" href="{{ p.website }}" target="_blank" rel="noopener">Website</a>
    {% endif %}

    {% if p.arxiv %}
      <a class="button" href="{{ p.arxiv }}" target="_blank" rel="noopener">arXiv</a>
    {% endif %}

    {% if p.conference %}
      <a class="button" href="{{ p.conference }}" target="_blank" rel="noopener">Conference</a>
    {% endif %}

    {% if p.code %}
      <a class="button" href="{{ p.code }}" target="_blank" rel="noopener">Code</a>
    {% endif %}
  </article>
{% endfor %}
</div>

