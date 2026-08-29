<template>
  <aside class="top-contact-bar" aria-label="Contact information">
    <div class="top-contact-inner max-w-[1380px] mx-auto px-6 md:px-10">
      <div class="top-contact-links">
        <a href="tel:+918660510402" class="top-contact-link">
          <svg class="icon" style="width: 1em; height: 1em"><use href="#i-phone" /></svg>
          <span>+91 86605 10402</span>
        </a>
        <a href="mailto:hello@worldofesg.in" class="top-contact-link">
          <svg class="icon" style="width: 1em; height: 1em"><use href="#i-mail" /></svg>
          <span>hello@worldofesg.in</span>
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
  /* Contact details sit on the right now that the LinkedIn icon is gone. */
  justify-content: flex-end;
  gap: 1rem;
}

.top-contact-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.top-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.22s ease;
}

.top-contact-link:hover {
  color: var(--forest);
}

.top-contact-link:focus-visible {
  outline: 2px solid var(--forest);
  outline-offset: 3px;
  border-radius: 3px;
}

.top-contact-link .icon {
  color: var(--forest);
  flex: 0 0 auto;
}

@media (max-width: 767px) {
  .top-contact-inner {
    min-height: 38px;
  }

  .top-contact-links {
    gap: 1rem;
  }
}

@media (max-width: 440px) {
  .top-contact-link {
    gap: 0.4rem;
  }

  .top-contact-link span {
    font-size: 0.72rem;
  }
}
</style>
