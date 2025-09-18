"use client";

import { AuthPage } from "@/components/AuthPage";
import Link from "next/link";
import { useState } from "react";

import {
  PenTool,
  Users,
  Zap,
  Download,
  Share2,
  Layers,
  ArrowRight,
  Check,
  Play,
  Github,
  Twitter,
  Menu,
  X,
  MousePointer,
  Palette,
  Cloud,
  Star,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Excalidraw
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Pricing
              </a>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors">
                Try Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  How it Works
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </a>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors w-fit">
                  Try Free
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Virtual whiteboard for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 block">
                sketching hand-drawn
              </span>
              like diagrams
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Collaborative diagramming made simple. Create beautiful
              flowcharts, wireframes, and illustrations with our intuitive
              drawing tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* sign in  */}

              <Link href={"/signin"}>
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Play className="h-5 w-5" />
                {/* Start Drawing
                 */}
                Sign in
              </button>
              </Link>
             
             {/* sign- up */}

             <Link href={"/signup"}>
              <button  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Play className="h-5 w-5" />
                {/* Start Drawing
                 */}
                Sign up
              </button>
             </Link>
             
              {/* <button className="border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                {/* <Github className="h-5 w-5" /> */}
              {/* Open Source */}
              Sing up
              {/* </button> */} */
            </div>

            {/* Demo Canvas */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="aspect-video bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50"></div>
                  <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform">
                      <MousePointer className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform">
                      <Palette className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center transform rotate-1 hover:rotate-3 transition-transform">
                      <Layers className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center transform -rotate-1 hover:rotate-1 transition-transform">
                      <Share2 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose Excalidraw?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: PenTool,
                title: "Hand-drawn Style",
                description:
                  "Create diagrams with a natural, sketchy feel that makes complex ideas approachable",
              },
              {
                icon: Users,
                title: "Real-time Collaboration",
                description:
                  "Work together seamlessly with live cursors and instant synchronization",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized performance ensures smooth drawing even with complex diagrams",
              },
              {
                icon: Cloud,
                title: "No Installation",
                description:
                  "Works directly in your browser - no downloads or setup required",
              },
              {
                icon: Download,
                title: "Export Options",
                description:
                  "Save your work as PNG, SVG, or share with a simple link",
              },
              {
                icon: Layers,
                title: "Infinite Canvas",
                description:
                  "Unlimited space to explore and develop your ideas without constraints",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get started in 3 simple steps
            </h2>
            <p className="text-xl text-gray-600">
              No learning curve, just pure creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Open & Start",
                description:
                  "Launch Excalidraw in your browser and immediately start sketching your ideas.",
                icon: Play,
              },
              {
                step: "2",
                title: "Draw & Design",
                description:
                  "Use our intuitive tools to create flowcharts, wireframes, and diagrams.",
                icon: PenTool,
              },
              {
                step: "3",
                title: "Share & Collaborate",
                description:
                  "Invite others with a simple link or export your masterpiece.",
                icon: Share2,
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-10 w-10 text-indigo-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 -right-4 transform">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, fair pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                description: "Perfect for personal use",
                features: [
                  "Unlimited drawings",
                  "Real-time collaboration",
                  "Export to PNG/SVG",
                  "Community support",
                ],
                cta: "Start Free",
                popular: false,
              },
              {
                name: "Pro",
                price: "$8",
                period: "per month",
                description: "For professionals and teams",
                features: [
                  "Everything in Free",
                  "Private rooms",
                  "Version history",
                  "Priority support",
                  "Advanced templates",
                ],
                cta: "Go Pro",
                popular: true,
              },
              {
                name: "Team",
                price: "$20",
                period: "per month",
                description: "For organizations",
                features: [
                  "Everything in Pro",
                  "Team management",
                  "Advanced permissions",
                  "SSO integration",
                  "Dedicated support",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.popular ? "transform scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`bg-white p-8 rounded-xl border-2 ${plan.popular ? "border-indigo-200 shadow-lg" : "border-gray-200"} h-full flex flex-col`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of creators who use Excalidraw to visualize their
            thoughts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Start Drawing Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <PenTool className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Excalidraw
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The virtual whiteboard for sketching hand-drawn like diagrams.
                Collaborative, intuitive, and completely free to use.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                  <Github className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Excalidraw. Made with ❤️ for visual thinkers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
