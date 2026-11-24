---
layout: default
title: My Work
---

# My Work

## Publications

<div class="paper-grid">
{% for p in site.data.publications %}
  {% include paper.html p=p type="publication" %}
{% endfor %}
</div>


## Preprints

<div class="paper-grid">
{% for p in site.data.preprints %}
  {% include paper.html p=p type="preprint" %}
{% endfor %}
</div>


## Personal

<div class="paper-grid">
{% for p in site.data.personal %}
  {% include paper.html p=p type="personal" %}
{% endfor %}
</div>

<script src="{{ '/assets/js/bibtex.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
