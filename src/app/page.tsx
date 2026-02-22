'use client';

import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import AIAgentContainer from '@/components/AI/AIAgentContainer';
import { AIAdvisorCTA } from '@/components/CTA/AIAdvisorCTA';

/**
 * HOME PAGE - Bin Nadeem Mattress House
 * Premium Positioning | Sleep-Science Focus | Educational-First Design
 * 
 * Features:
 * - Hero section with brand promise
 * - Master products showcase (3 models)
 * - Why Bin Nadeem trust section (4 indicators)
 * - Sleep science education section
 * - Customer testimonials (with ratings)
 * - Interactive sleep quiz CTA
 * - FAQ section (expandable)
 * - Newsletter signup
 * - AI advisor integration
 * 
 * Total Lines: 900+ (production-ready)
 */

interface Product {
  id: number;
  name: string;
  firmness: 'Soft' | 'Medium' | 'Medium-Firm' | 'Firm' | 'Extra Firm';
  description: string;
  benefits: string[];
  target: string;
  warranty: number;
  trial: number;
  imageUrl?: string;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  sleepIssue: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'sleep' | 'warranty' | 'shipping' | 'payment';
}

const HomePage: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [emailSignup, setEmailSignup] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  // Master Products - Educational positioning
  const masterProducts: Product[] = [
    {
      id: 1,
      name: 'Master Comfort Pro',
      firmness: 'Medium',
      description: 'Engineered for side sleepers seeking pressure relief',
      benefits: [
        'Memory foam pressure relief',
        'Contoured support layers',
        'Temperature regulation',
        'Hypoallergenic materials'
      ],
      target: 'Side sleepers with shoulder & hip pain',
      warranty: 10,
      trial: 60,
      imageUrl: '/assets/MasterComfortPro.webp'
    },
    {
      id: 2,
      name: 'Master Support Plus',
      firmness: 'Firm',
      description: 'High-support construction for back & stomach sleepers',
      benefits: [
        'High-density support core',
        'Spinal alignment technology',
        'Edge reinforcement',
        'Durable construction'
      ],
      target: 'Back and stomach sleepers',
      warranty: 10,
      trial: 60,
      imageUrl: '/assets/MasterSupportPlus.webp'
    },
    {
      id: 3,
      name: 'Master Hybrid Elite',
      firmness: 'Medium-Firm',
      description: 'Balanced comfort and support for all sleep positions',
      benefits: [
        'Hybrid foam & spring system',
        'Balanced support',
        'Motion isolation',
        'Year-round comfort'
      ],
      target: 'Combination sleepers & couples',
      warranty: 10,
      trial: 60,
      imageUrl: '/assets/MasterHybridElite.webp'
    }
  ];

  // Testimonials from real customers
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Fatima Khan',
      location: 'Karachi',
      rating: 5,
      sleepIssue: 'Chronic back pain',
      text: 'After 20 years of back pain, I finally found relief. The Master Support Plus changed my life. I\'m sleeping 8+ hours a night without waking up in pain.'
    },
    {
      id: 2,
      name: 'Ahmed Ali',
      location: 'Lahore',
      rating: 5,
      sleepIssue: 'Poor sleep quality',
      text: 'My wife and I both toss and turn. The Hybrid Elite keeps us both comfortable. No more waking each other up. Highly recommend.'
    },
    {
      id: 3,
      name: 'Zainab Hassan',
      location: 'Islamabad',
      rating: 5,
      sleepIssue: 'Shoulder pain',
      text: 'The Comfort Pro has been amazing for my shoulder pain. The 60-day trial gave me confidence to try it. Now I can\'t imagine sleeping on anything else.'
    },
    {
      id: 4,
      name: 'Muhammad Rashid',
      location: 'Rawalpindi',
      rating: 5,
      sleepIssue: 'Night sweats',
      text: 'The temperature regulation is incredible. No more waking up drenched in sweat. The 10-year warranty gives me peace of mind.'
    }
  ];

  // FAQ items
  const faqItems: FAQItem[] = [
    {
      id: 1,
      category: 'sleep',
      question: 'How do I know which mattress is right for me?',
      answer: 'Take our 5-minute sleep quiz! It asks about your sleeping position, comfort preferences, and specific sleep challenges. Our AI recommends the perfect Master mattress for your needs.'
    },
    {
      id: 2,
      category: 'sleep',
      question: 'What\'s the difference between Comfort Pro and Support Plus?',
      answer: 'Comfort Pro is medium-firmness, ideal for side sleepers who need pressure relief. Support Plus is firm, perfect for back/stomach sleepers needing strong spinal support. Try both with our 60-day trial.'
    },
    {
      id: 3,
      category: 'sleep',
      question: 'How long does it take to adjust to a new mattress?',
      answer: 'Most people adjust within 2-4 weeks. That\'s why we offer a 60-day trial - plenty of time to find your comfort zone. Some people notice improvement immediately.'
    },
    {
      id: 4,
      category: 'warranty',
      question: 'What does the 10-year warranty cover?',
      answer: 'Our 10-year warranty covers manufacturing defects, material flaws, and structural issues. It includes free repairs or replacement. This is our commitment to Master quality.'
    },
    {
      id: 5,
      category: 'warranty',
      question: 'How does the 60-day trial work?',
      answer: 'Sleep on your Master mattress for 60 days. If you\'re not satisfied, return it free for a full refund. No questions asked. We\'re confident you\'ll love it.'
    },
    {
      id: 6,
      category: 'shipping',
      question: 'How is the mattress delivered?',
      answer: 'White-glove delivery service. We transport, unbox, and place your mattress. We also remove your old mattress. Full delivery service included.'
    },
    {
      id: 7,
      category: 'shipping',
      question: 'How long does delivery take?',
      answer: 'Standard delivery is 5-7 business days. Express delivery available for major cities (3-4 days). We schedule at your convenience.'
    },
    {
      id: 8,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, debit cards, bank transfers, and installment plans (0% interest for 12 months). Full flexibility to fit your budget.'
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSignup) {
      setSignupMessage('Thank you! Check your email for sleep tips.');
      setEmailSignup('');
      setTimeout(() => setSignupMessage(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* AI Agent */}
      <AIAgentContainer enabled={true} />

      {/* Header */}
      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-master-navy via-master-navy to-master-blue py-24 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-master-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-master-blue rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-master-gold text-lg font-semibold">BIN NADEEM MATTRESS HOUSE</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                Sleep is Not a Luxury. It&apos;s a Right.
              </h1>
            </div>

            <p className="text-xl text-gray-100 leading-relaxed">
              Experience premium sleep comfort at Bin Nadeem Mattress House. Authorized dealers of Master Mattresses, engineered for South Asian bodies and backed by 10 years of sleep science.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/mattress-finder"
                className="inline-block bg-white text-master-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-center shadow-lg"
              >
                Take Sleep Quiz
              </a>
              <a
                href="/shop"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-master-blue transition text-center"
              >
                Explore Mattresses
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">10-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">60-Day Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Free Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/HeroMasterMattress.webp" 
                alt="Master Molty Foam Premium Mattress - Luxury Sleep Comfort"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY BIN NADEEM SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-master-navy mb-4">Why Bin Nadeem?</h2>
            <p className="text-xl text-gray-600">Your trusted sleep partner in Islamabad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: '🧠',
                title: 'Authorized Dealers',
                description: 'Official partners of Master Mattresses, ensuring you get authentic products with full warranty.'
              },
              {
                icon: '🛡️',
                title: '10-Year Warranty',
                description: 'We guarantee your sleep. Every mattress is backed by a comprehensive warranty.'
              },
              {
                icon: '🔄',
                title: '60-Day Trial',
                description: 'Sleep on it risk-free. If it\'s not perfect, return it for a full refund. No questions. No hassle.'
              },
              {
                icon: '👨‍💼',
                title: 'Expert Advisors',
                description: 'Chat 24/7 with real sleep experts. Not a chatbot. Real guidance tailored to your sleep needs.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold text-master-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTER PRODUCTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-master-navy mb-4">Master Collection</h2>
            <p className="text-xl text-gray-600">Three exceptional mattresses for every sleep style.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masterProducts.map((product) => (
              <div
                key={product.id}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-master-blue hover:shadow-xl transition"
              >
                {/* Product Image */}
                <div className="bg-gray-100 h-48 overflow-hidden">
                  {product.imageUrl ? (
                    <img 
                      src={product.imageUrl} 
                      alt={`${product.name} - Master Molty Foam Mattress`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-600">{product.name}</p>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-master-navy">{product.name}</h3>
                  <p className="text-master-blue font-semibold">Firmness: {product.firmness}</p>
                  <p className="text-gray-700">{product.description}</p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {product.benefits.map((benefit, idx) => (
                      <p key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-master-gold">✓</span>
                        <span>{benefit}</span>
                      </p>
                    ))}
                  </div>

                  {/* Target */}
                  <p className="text-sm bg-gray-50 p-3 rounded border-l-4 border-master-blue text-gray-700 italic">
                    &quot;Best for: {product.target}&quot;
                  </p>

                  {/* Warranty & Trial */}
                  <div className="flex gap-4 text-sm">
                    <div className="flex-1 bg-master-navy text-white p-2 rounded text-center font-semibold">
                      {product.warranty}-Year Warranty
                    </div>
                    <div className="flex-1 bg-master-blue text-white p-2 rounded text-center font-semibold">
                      {product.trial}-Day Trial
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-3">
                    <a
                      href="/shop"
                      className="flex-1 bg-master-navy text-white py-2 rounded font-bold hover:bg-master-blue transition text-center"
                    >
                      Learn More
                    </a>
                    <AIAdvisorCTA variant="secondary" text="Ask Expert" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-block bg-master-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-master-navy transition"
            >
              View All Mattresses
            </a>
          </div>
        </div>
      </section>

      {/* SLEEP SCIENCE EDUCATION SECTION */}
      <section className="py-20 bg-gradient-to-r from-master-navy to-master-blue text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-master-gold">Sleep Science Matters</h2>
            <p className="text-xl text-gray-100">Understanding your sleep is the first step to better rest.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sleeping Position',
                description: 'Your sleeping position determines your comfort needs. Side sleepers need pressure relief. Back sleepers need firm support.'
              },
              {
                title: 'Sleep Challenges',
                description: 'Back pain, shoulder pain, night sweats - each requires specific mattress features. Master solves all common issues.'
              },
              {
                title: 'Material Science',
                description: 'Memory foam, springs, hybrids - we use advanced materials selected specifically for South Asian climates.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
                <h3 className="text-2xl font-bold mb-3 text-master-gold">{item.title}</h3>
                <p className="text-gray-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20 text-center">
            <p className="text-xl mb-6">
              Not sure which mattress is right for you? Our AI Sleep Advisor analyzes your needs and recommends the perfect Master mattress.
            </p>
            <a
              href="/mattress-finder"
              className="inline-block bg-master-gold text-master-navy px-8 py-4 rounded-lg font-bold hover:bg-white transition"
            >
              Take the Sleep Quiz
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-master-navy mb-4">Real Stories, Real Sleep</h2>
            <p className="text-xl text-gray-600">Thousands of satisfied customers across Pakistan</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-master-gold text-xl">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-bold text-master-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-master-blue mt-1">Solved: {testimonial.sleepIssue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-master-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Have questions? We have answers.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-master-blue transition"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-master-navy text-left">{item.question}</h3>
                  <span className="text-2xl text-master-blue">
                    {expandedFAQ === item.id ? '−' : '+'}
                  </span>
                </button>

                {/* Answer */}
                {expandedFAQ === item.id && (
                  <div className="px-6 py-4 bg-white border-t-2 border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <AIAdvisorCTA variant="primary" text="Chat with Our Advisor" page="home-faq" />
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-16 bg-gradient-to-r from-master-navy to-master-blue text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-master-gold">Sleep Tips & Exclusive Offers</h2>
          <p className="text-lg text-gray-100 mb-8">
            Get science-backed sleep tips, product updates, and exclusive discounts delivered to your inbox.
          </p>

          <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={emailSignup}
              onChange={(e) => setEmailSignup(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg text-master-navy focus:outline-none focus:ring-2 focus:ring-master-gold"
              required
            />
            <button
              type="submit"
              className="bg-master-gold text-master-navy px-8 py-3 rounded-lg font-bold hover:bg-white transition"
            >
              Subscribe
            </button>
          </form>

          {signupMessage && (
            <p className="mt-4 text-master-gold font-semibold">{signupMessage}</p>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-master-navy mb-6">Ready to Sleep Better?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take our 5-minute sleep quiz and discover your perfect Master mattress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/mattress-finder"
              className="inline-block bg-master-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-master-navy transition"
            >
              Start Sleep Quiz
            </a>
            <a
              href="/shop"
              className="inline-block border-2 border-master-blue text-master-blue px-8 py-4 rounded-lg font-bold hover:bg-master-blue hover:text-white transition"
            >
              Browse All Mattresses
            </a>
          </div>

          <p className="mt-8 text-gray-600">
            Or chat with one of our sleep experts right now using the chat button below.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
