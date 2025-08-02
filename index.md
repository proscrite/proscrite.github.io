---
layout: home
title: "Proscrite's Portfolio"
---

<img src="assets/profile.jpg" alt="Profile picture" style="width: 150px; border-radius: 50%;">

Welcome to my personal website. Here you'll find details and results of my projects.

## Projects

See a list of my recent work below 👇

<ul>
  {% for project in site.projects %}
    <li>
      <a href="{{ project.url }}">{{ project.title }}</a><br>
      <small>{{ project.description }}</small>
    </li>
  {% endfor %}
</ul>


{% include youtube.html id="4kHX6_VbOJY" %}

