
"use client";

import React from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

export default function HomePage() {
  return (
    <Layout hideSidebar={true}>
      <div className="min-h-screen bg-b-surface1">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-12 bg-gradient-to-br from-primary-01 via-primary-02 to-secondary-04">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-h1 lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <strong>Professional Business Platform</strong> for 
                  <span className="text-secondary-02"> Modern Enterprises</span>
                </h1>
                <p className="text-h6 text-white/90 mb-8 max-w-2xl">
                  Transform your business operations with MEWAYZ's comprehensive <strong>e-commerce solutions</strong>, 
                  advanced <strong>CRM software</strong>, and integrated <strong>course creation platform</strong>. 
                  Our professional business tools streamline operations, boost revenue, and accelerate growth 
                  for enterprises worldwide.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    as="link"
                    href="/auth/register"
                    className="bg-white text-primary-01 hover:bg-white/90 px-8 py-4 text-button font-semibold"
                    aria-label="Action button">
                    Start Free Trial
                  </Button>
                  <Button
                    as="link"
                    href="/features"
                    isStroke={true}
                    className="border-white text-white hover:bg-white hover:text-primary-01 px-8 py-4 text-button font-semibold"
                    aria-label="Action button">
                    Explore Features
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-white/80">
                  <div className="flex items-center gap-2">
                    <Icon name="star" className="w-5 h-5 fill-secondary-02" />
                    <span className="text-body-2">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="users" className="w-5 h-5 fill-secondary-02" />
                    <span className="text-body-2">10,000+ Businesses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="shield" className="w-5 h-5 fill-secondary-02" />
                    <span className="text-body-2">Enterprise Security</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 max-w-lg">
                <div className="relative">
                  <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="bg-white/20 rounded-2xl p-4 flex flex-col justify-center items-center">
                        <Icon name="trending-up" className="w-8 h-8 fill-white mb-2" />
                        <span className="text-white font-medium">E-commerce</span>
                      </div>
                      <div className="bg-white/20 rounded-2xl p-4 flex flex-col justify-center items-center">
                        <Icon name="users" className="w-8 h-8 fill-white mb-2" />
                        <span className="text-white font-medium">CRM System</span>
                      </div>
                      <div className="bg-white/20 rounded-2xl p-4 flex flex-col justify-center items-center">
                        <Icon name="book" className="w-8 h-8 fill-white mb-2" />
                        <span className="text-white font-medium">Courses</span>
                      </div>
                      <div className="bg-white/20 rounded-2xl p-4 flex flex-col justify-center items-center">
                        <Icon name="share" className="w-8 h-8 fill-white mb-2" />
                        <span className="text-white font-medium">Social Media</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-h2 text-t-primary font-bold mb-6">
                Comprehensive Business Management Solutions
              </h2>
              <p className="text-h6 text-t-secondary max-w-3xl mx-auto">
                Our integrated platform combines powerful e-commerce, CRM, and course creation tools 
                to accelerate your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "shopping-cart",
                  title: "E-commerce Excellence",
                  description: "Complete digital commerce platform with inventory management and analytics."
                },
                {
                  icon: "users",
                  title: "Advanced CRM",
                  description: "Customer relationship management with lead tracking and automation."
                },
                {
                  icon: "graduation-cap",
                  title: "Course Creation",
                  description: "Professional online learning platform with video hosting and assessments."
                },
                {
                  icon: "share-2",
                  title: "Social Media",
                  description: "Integrated social media tools for content scheduling and engagement."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-b-surface2 rounded-3xl p-8 hover:bg-b-surface1 transition-all group">
                  <div className="w-16 h-16 bg-primary-02 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-01 transition-colors">
                    <Icon name={feature.icon} className="w-8 h-8 fill-white" />
                  </div>
                  <h3 className="text-h5 text-t-primary font-bold mb-4">{feature.title}</h3>
                  <p className="text-body-2 text-t-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-primary-01 to-primary-02">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-h6 text-white/90 mb-8">
              Join over 10,000 businesses using MEWAYZ's professional platform. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                as="link"
                href="/auth/register"
                className="bg-white text-primary-01 hover:bg-white/90 px-8 py-4 text-button font-semibold"
               aria-label="Action button">
                Start Free Trial
              </Button>
              <button
                as="link"
                href="/demo"
                isStroke={true}
                className="border-white text-white hover:bg-white hover:text-primary-01 px-8 py-4 text-button font-semibold"
               aria-label="Action button">
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
