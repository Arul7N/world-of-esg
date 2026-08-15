<template>
  <div class="legal-page">
    <!-- Header -->
    <section class="relative pt-28 pb-16 bg-gradient-to-b from-sand to-mist">
      <div class="max-w-[1000px] mx-auto px-6 md:px-10">
        <h1 class="font-display font-bold text-charcoal text-4xl md:text-5xl mb-4">
          Terms & Conditions
        </h1>
        <p class="text-graphite text-lg">Last updated: {{ lastUpdated }}</p>
      </div>
    </section>

    <!-- Content -->
    <section class="relative py-16 md:py-24">
      <div class="max-w-[900px] mx-auto px-6 md:px-10">
        <div class="prose prose-lg max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using the World of ESG website and services, you accept and agree to be
            bound by and comply with these Terms & Conditions. If you do not agree to abide by these
            terms, please do not use this service.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or
            software) on the World of ESG website for personal, non-commercial transitory viewing
            only. This is the grant of a license, not a transfer of title, and under this license
            you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>
              Transfer the materials to another person or "mirror" the materials on any other server
            </li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on World of ESG's website are provided on an 'as is' basis. World of ESG
            makes no warranties, expressed or implied, and hereby disclaims and negates all other
            warranties including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights.
          </p>

          <h2>4. Limitations</h2>
          <p>
            In no event shall World of ESG or its suppliers be liable for any damages (including,
            without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on World of ESG's website.
          </p>

          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on World of ESG's website could include technical,
            typographical, or photographic errors. World of ESG does not warrant that any of the
            materials on its website are accurate, complete, or current. World of ESG may make
            changes to the materials contained on its website at any time without notice.
          </p>

          <h2>6. Materials and Content</h2>
          <p>
            World of ESG has not reviewed all of the sites linked to its website and is not
            responsible for the contents of any such linked site. The inclusion of any link does not
            imply endorsement by World of ESG of the site. Use of any such linked website is at the
            user's own risk.
          </p>

          <h2>7. Modifications to Terms</h2>
          <p>
            World of ESG may revise these Terms & Conditions for its website at any time without
            notice. By using this website, you are agreeing to be bound by the then current version
            of these Terms & Conditions.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms & Conditions and any separate agreements we provide to use our services are
            governed by and construed in accordance with the laws of India, without regard to its
            conflict of law provisions.
          </p>

          <h2>9. User Responsibilities</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way that does not
            infringe upon the rights of others or restrict their use and enjoyment of the website.
            Prohibited behavior includes:
          </p>
          <ul>
            <li>Harassing or causing distress or inconvenience to any person</li>
            <li>Transmitting obscene or offensive content</li>
            <li>Disrupting the normal flow of dialogue within our website</li>
            <li>Attempting to gain unauthorized access to systems</li>
            <li>Engaging in any form of spamming or phishing</li>
          </ul>

          <h2>10. Booking and Consultations</h2>
          <p>When you book a consultation with World of ESG:</p>
          <ul>
            <li>All information provided must be accurate and complete</li>
            <li>You are responsible for maintaining confidentiality of any credentials</li>
            <li>Cancellations should be made at least 24 hours in advance</li>
            <li>Services are subject to availability and may be rescheduled at our discretion</li>
          </ul>

          <h2>11. Intellectual Property Rights</h2>
          <p>
            All content on the World of ESG website, including text, graphics, logos, images, and
            software, is the property of World of ESG or its content suppliers and protected by
            international copyright laws.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, in no event shall World of ESG be
            liable for any indirect, incidental, special, consequential, or punitive damages,
            regardless of the cause or theory of liability.
          </p>

          <h2>13. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:<br />
            Email: <a href="mailto:hello@worldofesg.in">hello@worldofesg.in</a><br />
            Phone: <a href="tel:+918660510402">+91 86605 10402</a><br />
            Address: #235, 13th Cross, Indiranagar, Bangalore - 560038, Karnataka
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
