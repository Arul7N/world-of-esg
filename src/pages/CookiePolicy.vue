<template>
  <div class="legal-page">
    <!-- Header -->
    <section class="relative pt-28 pb-16 bg-gradient-to-b from-sand to-mist">
      <div class="max-w-[1000px] mx-auto px-6 md:px-10">
        <h1 class="font-display font-bold text-charcoal text-4xl md:text-5xl mb-4">
          Cookie Policy
        </h1>
        <p class="text-graphite text-lg">Last updated: {{ lastUpdated }}</p>
      </div>
    </section>

    <!-- Content -->
    <section class="relative py-16 md:py-24">
      <div class="max-w-[900px] mx-auto px-6 md:px-10">
        <div class="prose prose-lg max-w-none">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit websites. They help
            websites remember your preferences and improve your browsing experience.
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>2.1 Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic
            functions like page navigation and secure area access.
          </p>

          <h3>2.2 Performance Cookies</h3>
          <p>
            These cookies collect information about how visitors use our website, helping us improve
            performance and user experience.
          </p>

          <h3>2.3 Functionality Cookies</h3>
          <p>
            These cookies remember your preferences, such as language selection and login
            information, to enhance your experience.
          </p>

          <h3>2.4 Targeting/Marketing Cookies</h3>
          <p>
            These cookies track your browsing behavior to show relevant advertisements and content.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            We may use third-party services (like Google Analytics) that set their own cookies.
            These services are bound by their privacy policies.
          </p>

          <h2>4. Managing Your Cookie Preferences</h2>
          <p>
            You can control cookie settings through your browser preferences. Most browsers allow
            you to:
          </p>
          <ul>
            <li>View stored cookies</li>
            <li>Delete specific or all cookies</li>
            <li>Block cookies from particular sites</li>
            <li>Enable private browsing mode</li>
          </ul>

          <h2>5. Cookie Settings</h2>
          <p>
            On your first visit, you can choose your cookie preferences. You can update these
            settings at any time through your browser or by contacting us.
          </p>

          <h2>6. Impact of Disabling Cookies</h2>
          <p>
            If you disable essential cookies, some website features may not function properly.
            Non-essential cookies can be disabled without affecting basic functionality.
          </p>

          <h2>7. Cookie Duration</h2>
          <ul>
            <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
            <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
          </ul>

          <h2>8. Policy Updates</h2>
          <p>
            We may update this Cookie Policy periodically. Continued use of our website indicates
            your acceptance of any changes.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For questions about our cookie practices, contact us at:<br />
            Email: <a href="mailto:hello@worldofesg.in">hello@worldofesg.in</a><br />
            Phone: <a href="tel:+918660510402">+91 86605 10402</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const lastUpdated = '2026-08-14'
</script>

<style scoped>
.legal-page {
  background: var(--sand);
}

.prose {
  color: var(--charcoal);
}

.prose h2 {
  font-family: 'Inter Tight', sans-serif;
  font-weight: 700;
  color: var(--charcoal);
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.prose h3 {
  font-family: 'Inter Tight', sans-serif;
  font-weight: 600;
  color: var(--charcoal);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
}

.prose p {
  color: var(--graphite);
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.prose ul {
  color: var(--graphite);
  line-height: 1.8;
  margin-bottom: 1.25rem;
  padding-left: 2rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose a {
  color: var(--forest);
  text-decoration: none;
}

.prose a:hover {
  text-decoration: underline;
}
</style>
