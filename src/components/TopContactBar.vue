<template>
  <aside class="top-contact-bar" aria-label="Contact information">
    <div class="top-contact-inner max-w-[1380px] mx-auto px-6 md:px-10">
      <div class="top-contact-links">
        <a href="tel:+918123019616" class="top-contact-link">
          <svg class="icon" style="width:1em;height:1em"><use href="#i-phone" /></svg>
          <span>+91 81230 19616</span>
        </a>
        <a href="mailto:hello@worldofesg.in" class="top-contact-link">
          <svg class="icon" style="width:1em;height:1em"><use href="#i-mail" /></svg>
          <span>hello@worldofesg.in</span>
        </a>
      </div>

      <div class="top-contact-socials" aria-label="Follow World of ESG">
        <a href="https://linkedin.com/company/world-of-esg" target="_blank" rel="noopener" aria-label="Follow us on LinkedIn">
          <svg class="icon" style="width:1em;height:1em"><use href="#i-linkedin" /></svg>
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.top-contact-bar {
  position: relative;
  z-index: 101;
  background: #fff;
  border-bottom: 1px solid rgba(70, 83, 72, 0.16);
  color: var(--graphite);
  font-size: 0.8125rem;
  font-weight: 500;
}

.top-contact-inner {
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.top-contact-links,
.top-contact-link,
.top-contact-socials,
.top-contact-socials a {
  display: flex;
  align-items: center;
}

.top-contact-location,
.top-contact-link {
  gap: 0.55rem;
}

.top-contact-links { gap: 1.75rem; }
.top-contact-socials { justify-content: flex-end; gap: 0.9rem; }

.top-contact-link,
.top-contact-socials a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}

.top-contact-link:hover,
.top-contact-socials a:hover {
  color: var(--forest);
}

.top-contact-socials a:hover { transform: translateY(-1px); }

@media (max-width: 767px) {
  .top-contact-inner {
    min-height: 38px;
  }

  .top-contact-socials { display: none; }
  .top-contact-links { gap: 1rem; }
}

@media (max-width: 440px) {
  .top-contact-link { gap: 0.4rem; }
  .top-contact-link span { font-size: 0.72rem; }
}
</style>
