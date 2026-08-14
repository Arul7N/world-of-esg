<template>
  <section id="about-us" class="relative py-28 md:py-40 overflow-hidden bg-sand">
    <div class="blob" style="width: 520px; height: 520px; background: radial-gradient(circle, #ddf5e5, transparent 70%); top: 10%; right: 5%;"></div>
    
    <div class="max-w-[1380px] mx-auto px-6 md:px-10 relative z-10">
      <div class="max-w-[900px]">
        <span class="eyebrow mb-8" data-reveal>About Us</span>
        <h2 class="font-display font-bold text-charcoal text-[clamp(2rem,4.8vw,3.6rem)] leading-[1.03] mb-12" data-reveal>
          Our Integrated Approach to ESG Transformation
        </h2>

        <div class="prose prose-lg max-w-none space-y-6" data-reveal>
          <p class="font-serif-q text-charcoal text-[clamp(1.1rem,1.8vw,1.3rem)] leading-[1.6]">
            At World of ESG, we believe that meaningful transformation doesn't happen through isolated services—it happens through connected capabilities working as one. Our approach brings together strategy, technology, talent, execution, research, and legal expertise into a single, continuously evolving ecosystem that helps organizations move from insight to measurable impact.
          </p>

          <p class="text-graphite text-lg leading-relaxed">
            While most firms specialize in one discipline, we deliberately integrated all six.
          </p>

          <p class="text-graphite text-lg leading-relaxed">
            Our strategic advisory defines the roadmap. Our technology platform transforms data into intelligence. Our training and capability-building empower people to sustain change. Our implementation teams convert plans into measurable outcomes. Our research keeps solutions aligned with emerging global standards and industry best practices. Our legal and regulatory expertise ensures every initiative is compliant, resilient, and future-ready. Each discipline strengthens the next.
          </p>

          <p class="text-graphite text-lg leading-relaxed">
            We don't deliver disconnected consulting assignments or standalone software. We build integrated sustainability ecosystems that enable organizations to embed ESG, decarbonization, compliance, and digital transformation into the way they operate.
          </p>

          <p class="text-graphite text-lg leading-relaxed font-medium">
            It's a continuous loop of learning, improving, and creating measurable impact.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.eyebrow {
  font-family: 'Inter Tight', sans-serif;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--forest);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.eyebrow::before {
  content: '';
  width: 28px;
  height: 1.5px;
  background: var(--forest);
  display: inline-block;
}

.prose p {
  color: var(--charcoal);
  margin: 0;
}

.blob {
  position: absolute;
  border-radius: 100%;
  filter: blur(40px);
  opacity: 0.6;
}
</style>
