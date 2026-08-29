<template>
  <footer class="site-footer text-white">
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <div class="grid gap-14 lg:grid-cols-[1.42fr_.82fr_1fr_1.05fr] lg:gap-x-16 xl:gap-x-24">
        <div>
          <router-link to="/" class="inline-flex items-center gap-4" aria-label="World of ESG home">
            <img
              src="/images/logo/logo.png"
              class="w-14 h-14 object-contain"
              alt=""
              aria-hidden="true"
            />
            <span class="font-display text-[clamp(1.8rem,2.6vw,2.45rem)] font-bold tracking-tight"
              >World of ESG</span
            >
          </router-link>
          <p class="footer-strap">
            Enabling organizations to drive sustainable change with data, strategy, and technology.
          </p>
          <div class="mt-14">
            <h3 class="footer-heading">Follow Us On</h3>
            <a
              :href="LINKEDIN_URL"
              target="_blank"
              rel="noopener"
              class="footer-linkedin"
              aria-label="Follow World of ESG on LinkedIn"
            >
              <svg class="icon icon-fill" style="width: 1.55rem; height: 1.55rem">
                <use href="#i-linkedin" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="footer-heading footer-heading-rule">Company</h3>
          <nav aria-label="Company links">
            <ul class="footer-list">
              <li><router-link to="/about">About</router-link></li>
              <li><a href="#solutions" @click="handleNavClick">Services</a></li>
              <li><a href="#impact" @click="handleNavClick">Impact</a></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 class="footer-heading footer-heading-rule">Solutions</h3>
          <nav aria-label="Solutions links">
            <ul class="footer-list">
              <li><a href="#solutions" @click="handleNavClick">ESG Strategy</a></li>
              <li><a href="#solutions" @click="handleNavClick">SaaS Platform</a></li>
              <li><a href="#solutions" @click="handleNavClick">Skill Development</a></li>
              <li><a href="#solutions" @click="handleNavClick">Decarbonization</a></li>
              <li><a href="#solutions" @click="handleNavClick">ESG Research</a></li>
              <li><a href="#solutions" @click="handleNavClick">Legal Aspects of Environment</a></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 class="footer-heading footer-heading-rule">Get in touch</h3>
          <address class="not-italic">
            <ul class="footer-contact-list">
              <li>
                <a href="mailto:hello@worldofesg.in"
                  ><svg class="icon"><use href="#i-mail" /></svg><span>hello@worldofesg.in</span></a
                >
              </li>
              <li>
                <a href="tel:+918660510402"
                  ><svg class="icon"><use href="#i-phone" /></svg><span>+91 86605 10402</span></a
                >
              </li>
              <li class="footer-address">
                <svg class="icon"><use href="#i-globe" /></svg
                ><span
                  >#235, 13th Cross<br />Indiranagar<br />Bangalore - 560038<br />Karnataka</span
                >
              </li>
            </ul>
          </address>
          <a
            href="https://maps.google.com/?q=235+13th+Cross+Indiranagar+Bangalore+560038"
            target="_blank"
            rel="noopener"
            class="footer-map-link"
          >
            <svg class="icon"><use href="#i-arrow-ur" /></svg><span>View on Map</span>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ year }} World of ESG Private Limited. All rights reserved.</p>
        <nav class="footer-legal" aria-label="Legal links">
          <router-link to="/privacy-policy">Privacy Policy</router-link>
          <router-link to="/cookie-policy">Cookie Policy</router-link>
          <router-link to="/terms-conditions">Terms &amp; Conditions</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { scrollToTarget } from '@/composables/useSmoothScroll'
import { LINKEDIN_URL } from '@/constants'
const router = useRouter()

const handleNavClick = async (event: Event) => {
  const target = (event.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (!target?.startsWith('#')) return

  event.preventDefault()

  // Footer renders on About too, where these sections don't exist — route home.
  if (!scrollToTarget(target)) {
    await router.push({ path: '/', hash: target })
    return
  }

  try {
    history.pushState(null, '', target)
  } catch (error) {
    console.warn('History pushState failed:', error)
  }
}

const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background:
    radial-gradient(circle at 9% 86%, rgba(25, 151, 100, 0.22), transparent 28%),
    radial-gradient(circle at 88% 12%, rgba(37, 100, 168, 0.13), transparent 31%),
    linear-gradient(135deg, #071e32 0%, #062536 47%, #062d25 100%);
}
.footer-strap {
  /* Starts under "World of ESG", not under the logo: logo w-14 (3.5rem) + gap-4 (1rem). */
  margin-top: 1.5rem;
  margin-left: 4.5rem;
  max-width: 19rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.05rem;
  line-height: 1.75;
}

@media (max-width: 640px) {
  .footer-strap {
    margin-left: 0;
  }
}

.footer-heading {
  color: rgba(255, 255, 255, 0.98);
  font-family: 'Inter Tight', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.footer-heading-rule::after {
  content: '';
  display: block;
  width: 2.4rem;
  height: 2px;
  margin-top: 1.25rem;
  background: linear-gradient(90deg, var(--aurora), var(--emerald));
}
.footer-list {
  display: grid;
  gap: 1.6rem;
  margin-top: 2.7rem;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.05rem;
  line-height: 1.45;
}
.footer-list a,
.footer-contact-list a,
.footer-legal a {
  color: inherit;
  text-decoration: none;
  transition:
    color 0.22s ease,
    transform 0.22s ease;
}
.footer-list a:hover,
.footer-contact-list a:hover,
.footer-legal a:hover {
  color: var(--aurora);
}
.footer-list a:hover {
  display: inline-block;
  transform: translateX(4px);
}
.footer-linkedin {
  width: 4.5rem;
  height: 4.5rem;
  display: grid;
  place-items: center;
  margin-top: 1.25rem;
  border: 1px solid rgba(91, 227, 139, 0.8);
  border-radius: 0.65rem;
  color: #fff;
  transition:
    color 0.22s ease,
    background 0.22s ease,
    transform 0.22s ease;
}
.footer-linkedin:hover {
  color: var(--deep);
  background: var(--aurora);
  transform: translateY(-3px);
}
.footer-contact-list {
  display: grid;
  gap: 1.9rem;
  margin-top: 2.7rem;
  color: rgba(255, 255, 255, 0.84);
  font-size: 1.05rem;
  line-height: 1.7;
}
.footer-contact-list a,
.footer-address,
.footer-map-link {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.footer-contact-list .icon,
.footer-map-link .icon {
  flex: 0 0 auto;
  width: 1.55rem !important;
  height: 1.55rem !important;
  margin-top: 0.22rem;
  color: var(--aurora);
}
.footer-map-link {
  width: max-content;
  margin-top: 2.3rem;
  color: var(--aurora);
  font-size: 1.05rem;
  text-decoration: none;
  transition:
    color 0.22s ease,
    transform 0.22s ease;
}
.footer-map-link:hover {
  color: #fff;
  transform: translateX(4px);
}
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 5rem;
  padding-top: 2.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
}
.footer-legal {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0;
}
.footer-legal a + a::before {
  content: '';
  display: inline-block;
  width: 1px;
  height: 1.1em;
  margin: 0 1.7rem;
  vertical-align: -0.15em;
  background: var(--aurora);
  opacity: 0.8;
}
@media (max-width: 1023px) {
  .footer-bottom {
    margin-top: 4rem;
  }
}
@media (max-width: 640px) {
  .footer-list,
  .footer-contact-list {
    margin-top: 1.7rem;
  }
  .footer-bottom {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 3.5rem;
    padding-top: 2rem;
  }
  .footer-legal {
    justify-content: flex-start;
    gap: 0.85rem 1.25rem;
  }
  .footer-legal a + a::before {
    display: none;
  }
}
</style>
