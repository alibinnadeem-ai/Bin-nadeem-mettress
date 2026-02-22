'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { AIAdvisorCTA } from '@/components/CTA/AIAdvisorCTA';
import { useCart } from '@/context/CartContext';

/**
 * SHOP PAGE - Master Mattress Collection
 * Educational-First Design | Intelligent Filters | No Price Shouting
 * 
 * Features:
 * - Smart product filtering (sleeping position, firmness, features)
 * - Product grid with detailed info cards
 * - No price-based filters (educational positioning)
 * - AI advisor recommendations
 * - Mobile responsive
 * 
 * Total Lines: 400+ (production-ready)
 */

interface ShopProduct {
  id: number;
  name: string;
  description: string;
  firmness: 'Soft' | 'Medium' | 'Medium-Firm' | 'Firm' | 'Extra Firm';
  sleepPosition: string[];
  features: string[];
  benefits: string[];
  warranty: number;
  trial: number;
  bestseller: boolean;
  inStock: boolean;
  price: number;
  imageUrl?: string;
}

// Master Products Database
const allProducts: ShopProduct[] = [
  {
    id: 1,
    name: 'Master Comfort Pro',
    description: 'Premium memory foam engineered for side sleepers',
    price: 45000,
    firmness: 'Medium',
    sleepPosition: ['Side'],
    features: ['Memory Foam', 'Pressure Relief', 'Temperature Regulating'],
    benefits: [
      'Relieves shoulder and hip pressure',
      'Conforms to body shape',
      'Temperature regulation keeps you cool',
      'Hypoallergenic and dust mite resistant',
      'Silent, no partner disturbance'
    ],
    warranty: 10,
    trial: 60,
    bestseller: true,
    inStock: true,
    imageUrl: '/assets/MasterComfortPro.webp'
  },
  {
    id: 2,
    name: 'Master Support Plus',
    description: 'High-support construction for back and stomach sleepers',
    price: 52000,
    firmness: 'Firm',
    sleepPosition: ['Back', 'Stomach'],
    features: ['High Support', 'Spinal Alignment', 'Edge Reinforcement'],
    benefits: [
      'Maintains proper spinal alignment',
      'Strong support for heavier sleepers',
      'Prevents sagging over time',
      'Excellent edge support',
      'Great for hot sleepers'
    ],
    warranty: 10,
    trial: 60,
    bestseller: true,
    inStock: true,
    imageUrl: '/assets/MasterSupportPlus.webp'
  },
  {
    id: 3,
    name: 'Master Hybrid Elite',
    description: 'Balanced comfort and support for all sleep styles',
    price: 65000,
    firmness: 'Medium-Firm',
    sleepPosition: ['Side', 'Back', 'Stomach'],
    features: ['Hybrid Technology', 'Motion Isolation', 'All-Position Support'],
    benefits: [
      'Perfect for combination sleepers',
      'Minimal motion transfer between partners',
      'Breathable spring system',
      'Balanced softness and support',
      'Ideal for couples with different preferences'
    ],
    warranty: 10,
    trial: 60,
    bestseller: false,
    inStock: true,
    imageUrl: '/assets/MasterHybridElite.webp'
  },
  {
    id: 4,
    name: 'Master Cloud Soft',
    description: 'Ultra-soft memory foam for pressure-sensitive sleepers',
    price: 58000,
    firmness: 'Soft',
    sleepPosition: ['Side'],
    features: ['Ultra-Soft', 'Maximum Comfort', 'Cloud-Like Feel'],
    benefits: [
      'Extreme pressure relief',
      'Perfect for lightweight sleepers',
      'Sinks-in comfort feel',
      'Ideal for sensitive joints',
      'Premium comfort materials'
    ],
    warranty: 10,
    trial: 60,
    bestseller: false,
    inStock: true,
    imageUrl: '/assets/MasterCloudSoft.webp'
  },
  {
    id: 5,
    name: 'Master Steel Core',
    description: 'Extra-firm support for maximum spinal alignment',
    price: 42000,
    firmness: 'Extra Firm',
    sleepPosition: ['Back', 'Stomach'],
    features: ['High-Density Support', 'Professional Grade', 'Heavy Support'],
    benefits: [
      'Best for back pain relief',
      'Excellent for heavier individuals',
      'Ortho-approved design',
      'Maximum durability',
      'Superior longevity'
    ],
    warranty: 10,
    trial: 60,
    bestseller: false,
    inStock: true,
    imageUrl: '/assets/MasterSteelCore.webp'
  },
  {
    id: 6,
    name: 'Master Duo Adjustable',
    description: 'Adjustable firmness for couples with different preferences',
    price: 85000,
    firmness: 'Medium',
    sleepPosition: ['Side', 'Back'],
    features: ['Dual Firmness', 'Independent Customization', 'Split Design'],
    benefits: [
      'Each side has different firmness',
      'Perfect for couples',
      'Customize your comfort',
      'Stay in sync with partner',
      'Best seller for couples'
    ],
    warranty: 10,
    trial: 60,
    bestseller: true,
    inStock: true,
    imageUrl: '/assets/MasterDuoAdjustable.webp'
  }
];

const ShopPage: React.FC = () => {
  const { addToCart } = useCart();
  // Filter state
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedFirmness, setSelectedFirmness] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('featured');

  // Filter options
  const sleepPositions = ['Side', 'Back', 'Stomach'];
  const firmnesses = ['Soft', 'Medium', 'Medium-Firm', 'Firm', 'Extra Firm'];
  const allFeatures = [
    'Memory Foam',
    'High Support',
    'Temperature Regulating',
    'Motion Isolation',
    'Hypoallergenic',
    'Pressure Relief',
    'Spinal Alignment'
  ];

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (selectedPosition) {
      filtered = filtered.filter(p => p.sleepPosition.includes(selectedPosition));
    }

    if (selectedFirmness) {
      filtered = filtered.filter(p => p.firmness === selectedFirmness);
    }

    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(p =>
        selectedFeatures.every(feature => p.features.includes(feature))
      );
    }

    // Sort
    switch (sortBy) {
      case 'bestseller':
        filtered.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        break;
      case 'soft-to-firm':
        const firmOrder = ['Soft', 'Medium', 'Medium-Firm', 'Firm', 'Extra Firm'];
        filtered.sort((a, b) => firmOrder.indexOf(a.firmness) - firmOrder.indexOf(b.firmness));
        break;
      case 'firm-to-soft':
        const reverseFirmOrder = ['Extra Firm', 'Firm', 'Medium-Firm', 'Medium', 'Soft'];
        filtered.sort((a, b) => reverseFirmOrder.indexOf(a.firmness) - reverseFirmOrder.indexOf(b.firmness));
        break;
      default: // featured
        filtered.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return filtered;
  }, [selectedPosition, selectedFirmness, selectedFeatures, sortBy]);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
      );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-master-navy to-master-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-master-gold">Master Mattress Collection</h1>
          <p className="text-xl text-gray-100">
            Find your perfect mattress with our intelligent recommendation system.
          </p>
        </div>
      </section>

      {/* FILTERS & PRODUCTS */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* FILTERS SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* SLEEPING POSITION FILTER */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-master-navy mb-4">Sleeping Position</h3>
                <div className="space-y-2">
                  {sleepPositions.map(position => (
                    <label key={position} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="position"
                        value={position}
                        checked={selectedPosition === position}
                        onChange={(e) => setSelectedPosition(e.target.checked ? position : null)}
                        className="w-4 h-4 text-master-blue"
                      />
                      <span className="text-gray-700">{position} Sleeper</span>
                    </label>
                  ))}
                  {selectedPosition && (
                    <button
                      onClick={() => setSelectedPosition(null)}
                      className="mt-3 w-full text-master-blue font-semibold text-sm hover:underline"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>

              {/* FIRMNESS FILTER */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-master-navy mb-4">Firmness Level</h3>
                <div className="space-y-2">
                  {firmnesses.map(firmness => (
                    <label key={firmness} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="firmness"
                        value={firmness}
                        checked={selectedFirmness === firmness}
                        onChange={(e) => setSelectedFirmness(e.target.checked ? firmness : null)}
                        className="w-4 h-4 text-master-blue"
                      />
                      <span className="text-gray-700">{firmness}</span>
                    </label>
                  ))}
                  {selectedFirmness && (
                    <button
                      onClick={() => setSelectedFirmness(null)}
                      className="mt-3 w-full text-master-blue font-semibold text-sm hover:underline"
                    >
                      Clear Filter
                    </button>
                  )}
                </div>
              </div>

              {/* FEATURES FILTER */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-master-navy mb-4">Special Features</h3>
                <div className="space-y-2">
                  {allFeatures.map(feature => (
                    <label key={feature} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature)}
                        onChange={() => toggleFeature(feature)}
                        className="w-4 h-4 text-master-blue"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </label>
                  ))}
                  {selectedFeatures.length > 0 && (
                    <button
                      onClick={() => setSelectedFeatures([])}
                      className="mt-3 w-full text-master-blue font-semibold text-sm hover:underline"
                    >
                      Clear Features
                    </button>
                  )}
                </div>
              </div>

              {/* NEED HELP */}
              <div className="bg-master-blue text-white p-6 rounded-lg">
                <p className="font-semibold mb-3">Not sure which is right for you?</p>
                <p className="text-sm mb-4">Take our sleep quiz to get a personalized recommendation.</p>
                <a
                  href="/mattress-finder"
                  className="block bg-white text-master-blue text-center py-2 rounded font-bold hover:bg-gray-100 transition"
                >
                  Start Quiz
                </a>
              </div>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="lg:col-span-3">
            {/* CONTROLS */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <p className="text-gray-600">
                  Showing <span className="font-bold">{filteredProducts.length}</span> mattress{filteredProducts.length !== 1 ? 'es' : ''}
                </p>
              </div>

              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-2 border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-master-blue"
                >
                  <option value="featured">Featured</option>
                  <option value="bestseller">Bestsellers</option>
                  <option value="soft-to-firm">Soft to Firm</option>
                  <option value="firm-to-soft">Firm to Soft</option>
                </select>
              </div>
            </div>

            {/* PRODUCT GRID */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-master-blue hover:shadow-xl transition"
                  >
                    {/* Product Image */}
                    <div className="bg-gray-100 h-56 overflow-hidden relative">
                      {product.bestseller && (
                        <div className="absolute top-4 right-4 bg-master-gold text-master-navy px-3 py-1 rounded-full text-xs font-bold z-10">
                          BESTSELLER
                        </div>
                      )}
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
                      <p className="text-gray-700">{product.description}</p>

                      {/* Firmness & Position */}
                      <div className="flex gap-2 flex-wrap">
                        <span className="bg-master-blue text-white text-xs font-semibold px-3 py-1 rounded">
                          {product.firmness}
                        </span>
                        {product.sleepPosition.map(pos => (
                          <span key={pos} className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded">
                            {pos}
                          </span>
                        ))}
                      </div>

                      {/* Benefits */}
                      <div className="space-y-1">
                        {product.benefits.slice(0, 3).map((benefit, idx) => (
                          <p key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-master-gold">✓</span>
                            <span>{benefit}</span>
                          </p>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-xs text-gray-600 mb-2 font-semibold">Key Features:</p>
                        <div className="flex gap-1 flex-wrap">
                          {product.features.map(feature => (
                            <span key={feature} className="bg-white border border-gray-300 text-xs px-2 py-1 rounded">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Warranty & Trial */}
                      <div className="flex gap-3 text-sm">
                        <div className="flex-1 bg-master-navy text-white p-2 rounded text-center font-semibold">
                          {product.warranty}-Yr Warranty
                        </div>
                        <div className="flex-1 bg-master-blue text-white p-2 rounded text-center font-semibold">
                          {product.trial}-Day Trial
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex gap-3">
                        <button
                          onClick={() => addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            quantity: 1,
                            variant: product.firmness
                          })}
                          className="flex-1 bg-master-navy text-white py-2 rounded font-bold hover:bg-master-blue transition"
                        >
                          Add to Cart
                        </button>
                        <AIAdvisorCTA variant="secondary" text="Ask Expert" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No mattresses match your filters.</p>
                <button
                  onClick={() => {
                    setSelectedPosition(null);
                    setSelectedFirmness(null);
                    setSelectedFeatures([]);
                  }}
                  className="text-master-blue font-bold hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-master-navy mb-4">Still not sure?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our AI sleep advisor can analyze your needs and recommend the perfect mattress.
          </p>
          <a
            href="/mattress-finder"
            className="inline-block bg-master-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-master-navy transition"
          >
            Take Sleep Quiz
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;
