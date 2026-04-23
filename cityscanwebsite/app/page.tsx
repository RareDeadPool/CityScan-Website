'use client';

import { Download, AlertCircle, Zap, MapPin, FileText, BarChart3, Users, CheckCircle, Grid3x3, TrendingUp, Camera, Search, PenTool, Clipboard, Shield, Eye, Play } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileDemo from '@/components/MobileDemo';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="CityScan"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-bold text-gray-900">CityScan</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Features</a>
            <Link href="/demo" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Try Demo</Link>
            <a href="#process" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Process</a>
            <a href="#impact" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Impact</a>
            <a
              href="/CityScan.apk"
              download
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors inline-block"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50">
                <span className="text-xs font-bold text-orange-600 tracking-wider">AI-POWERED • OFFLINE • REAL-TIME</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Transforming<br />
                Infrastructure Inspection<br />
                from Reactive to<br />
                <span className="text-blue-600">Intelligent</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                AI-powered mobile system for real-time detection of cracks, potholes, corrosion, and leaks. Powered by YOLOv8 and offline-first technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/CityScan.apk"
                  download
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
                <Link
                  href="/demo"
                  className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-900 font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Try Demo
                </Link>
              </div>
            </div>

            <div className="animate-fadeInRight">
              <MobileDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Info Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animation">
              <div className="text-xs font-bold text-orange-600 tracking-wider mb-3">THE PROBLEM</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Infrastructure Gaps</h2>

              <div className="space-y-4">
                {[
                  { icon: <AlertCircle className="w-5 h-5" />, text: 'Inefficient inspections', desc: 'Manual processes take weeks, showing significant data gaps' },
                  { icon: <Zap className="w-5 h-5" />, text: 'Undetected damage', desc: 'Human error leads to missed potholes and cracks' },
                  { icon: <TrendingUp className="w-5 h-5" />, text: 'High repair costs', desc: 'Reactive maintenance is more expensive than prevention' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-orange-600 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.text}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-animation" style={{ animationDelay: '0.2s' }}>
              <div className="text-xs font-bold text-blue-600 tracking-wider mb-3">THE SOLUTION</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">CityScan Intelligence</h2>

              <div className="space-y-4">
                {[
                  { icon: <CheckCircle className="w-5 h-5" />, text: 'Real-time AI detection', desc: 'YOLOv8 powered classification and severity analysis' },
                  { icon: <MapPin className="w-5 h-5" />, text: 'Instant severity analysis', desc: 'ML processes every photo in real-time for accurate classification' },
                  { icon: <FileText className="w-5 h-5" />, text: 'Automated reports', desc: 'Automated PDF generation with GPS coordinates and recommendations' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-blue-600 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.text}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-gray-600">Built with precision for civil engineers and municipal workers in any development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time AI Detection',
                description: 'Instant damage identification with advanced YOLOv8 models for infrastructure assessment',
                icon: '🤖'
              },
              {
                title: 'Offline Capability',
                description: 'Complete functionality without internet, with automatic cloud sync when connected',
                icon: '📡'
              },
              {
                title: 'GPS Tagging',
                description: 'Automatic geolocation for every detection with precise mapping accuracy',
                icon: <MapPin className="w-6 h-6" />
              },
              {
                title: 'Automated Reports',
                description: 'Generate professional audit reports in seconds with comprehensive findings',
                icon: <FileText className="w-6 h-6" />
              },
              {
                title: 'Project Workflow',
                description: 'Organize inspections by project for collaborative team management',
                icon: <Users className="w-6 h-6" />
              },
              {
                title: 'Severity Classification',
                description: 'Automatic categorization of damage from critical to low severity',
                icon: <AlertCircle className="w-6 h-6" />
              }
            ].map((feature, i) => (
              <div key={i} className="scroll-animation p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-gray-700 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Workflow */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Inspection Workflow</h2>
            <p className="text-gray-400">Four simple steps to digitize your infrastructure audits</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Capture',
                description: 'Take photos of infrastructure or capture video',
                icon: <Camera className="w-6 h-6" />
              },
              {
                step: '2',
                title: 'Detect',
                description: 'AI instantly analyzes & identifies damage types',
                icon: <Search className="w-6 h-6" />
              },
              {
                step: '3',
                title: 'Annotate',
                description: 'Add GPS tags and severity classifications',
                icon: <PenTool className="w-6 h-6" />
              },
              {
                step: '4',
                title: 'Generate',
                description: 'Receive findings and create reports',
                icon: <Clipboard className="w-6 h-6" />
              }
            ].map((item, i) => (
              <div key={i} className="scroll-animation text-center" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white mx-auto mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screens Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Designed for Action</h2>
            <p className="text-gray-600">Intuitive interfaces built for fast inspections</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: 'Dashboard', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%201-ooKMwUSFS1tbfKv4FJRyNgwTdpBbvp.jpeg' },
              { title: 'Live Scan', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home5-JZNV2tK0lROiXrGq6U7NtkcvXG48UD.jpeg' },
              { title: 'Map View', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home4-kRCOpI6H6ClGI1baSbBuKTBUt4DaQt.jpeg' },
              { title: 'Reporting', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home2%20-K5HgHfftIkBIhQXjCIk6KFnbyzKW4r.jpeg' },
              { title: 'Configuration', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home%201-ooKMwUSFS1tbfKv4FJRyNgwTdpBbvp.jpeg' }
            ].map((screen, i) => (
              <div key={i} className="scroll-animation group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-48 rounded-2xl overflow-hidden bg-gray-200 hover:shadow-lg transition-all group-hover:scale-105">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-gray-900 mt-3">{screen.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue CTA Section */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From detection to decision-making — <span className="text-green-400">all in one system</span>.
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl">
            CityScan transforms infrastructure inspection with AI automation, real-time insights, and data-driven decision making.
          </p>

          <div className="space-y-4 mb-8">
            {[
              '70% Reduction in inspection time - Unlimited scope field data only matters if organized',
              'Focus on critical issues - Automatically prioritize damage based on severity',
              'Cost-Effective Maintenance - Proving asset life with early intervention and preventive scheduling'
            ].map((benefit, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="text-green-400 flex-shrink-0 w-5 h-5" />
                <p className="text-blue-100">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get CityScan</h2>
          <p className="text-gray-600 mb-8">
            Ready to revolutionize your city's infrastructure management? Download and start scanning today.
          </p>
          <a
            href="/CityScan.apk"
            download
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <Download className="w-4 h-4" />
            Download APK
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-12 mb-12 text-center">
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Team</h4>
              <ul className="space-y-2 text-sm">
                <li>Aditya Sawant</li>
                <li>Manas Tamboli</li>
                <li>Sakshi Bane</li>
                <li>Krish Naik</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="text-sm mb-2">Developed By <span className="font-semibold text-white">3_AM_CODERS</span></p>
              <p className="text-xs">&copy; 2024 CityScan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
