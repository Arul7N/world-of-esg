<template>
  <div class="legal-page">
    <!-- Header -->
    <section class="relative pt-28 pb-16 bg-gradient-to-b from-sand to-mist">
      <div class="max-w-[1000px] mx-auto px-6 md:px-10">
        <h1 class="font-display font-bold text-charcoal text-4xl md:text-5xl mb-4">
          Privacy Policy
        </h1>
        <p class="text-graphite text-lg">Last updated: {{ lastUpdated }}</p>
      </div>
    </section>

    <!-- Content -->
    <section class="relative py-16 md:py-24">
      <div class="max-w-[900px] mx-auto px-6 md:px-10">
        <div class="prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            World of ESG ("Company," "we," "us," or "our") operates the website and provides ESG
            consulting services. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways:</p>

          <h3>2.1 Information You Provide Directly</h3>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name, email address, phone number, company, and
              other contact details when you fill out forms or contact us
            </li>
            <li>
              <strong>Booking Information:</strong> Details provided when scheduling consultations
            </li>
            <li>
              <strong>Career Information:</strong> Resume, cover letter, and employment history when
              applying for positions
            </li>
            <li>
              <strong>Payment Information:</strong> Billing details and transaction history
              (processed securely through third-party providers)
            </li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent, clickstream data, and browsing
              patterns
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type, operating system, and
              device identifiers
            </li>
            <li>
              <strong>Cookies:</strong> Information stored through cookies and similar tracking
              technologies
            </li>
            <li>
              <strong>Location Data:</strong> Approximate location based on IP address (with user
              permission)
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul>
            <li>Providing and improving our services</li>
            <li>Processing bookings and delivering consulting services</li>
            <li>Sending marketing communications (with consent)</li>
            <li>Responding to inquiries and customer support</li>
            <li>Analyzing website usage and performance</li>
            <li>Complying with legal obligations</li>
            <li>Preventing fraud and ensuring security</li>
          </ul>

          <h2>4. Sharing Your Information</h2>
          <p>We do not sell your personal information. We may share information:</p>
          <ul>
            <li>With service providers who assist in our operations</li>
            <li>For legal compliance or law enforcement requests</li>
            <li>In connection with business transfers or acquisitions</li>
            <li>With your consent for specific purposes</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for processing</li>
            <li>Data portability</li>
            <li>Lodge complaints with regulatory authorities</li>
          </ul>

          <h2>7. Retention of Information</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services and
            comply with legal obligations. You may request deletion at any time.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of external sites.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly
            collect personal information from children.
          </p>

          <h2>10. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be effective when posted to
            the website.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
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
