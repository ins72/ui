"use client";

import { useState } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Badge from "@/style-reference/components/Badge";
import Icon from "@/style-reference/components/Icon";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "business", name: "Business" },
    { id: "marketing", name: "Marketing" },
    { id: "creative", name: "Creative" },
    { id: "tech", name: "Technology" }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Creator Business Masterclass",
      description: "Learn to build, grow, and monetize your creator business from zero to six figures",
      category: "business",
      level: "Beginner",
      duration: "8 hours",
      students: 1250,
      rating: 4.9,
      price: 197,
      image: "/course1.jpg",
      instructor: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Social Media Marketing Mastery",
      description: "Advanced strategies for growing your audience and engagement across all platforms",
      category: "marketing", 
      level: "Intermediate",
      duration: "12 hours",
      students: 890,
      rating: 4.8,
      price: 297,
      image: "/course2.jpg",
      instructor: "Mike Chen"
    },
    {
      id: 3,
      title: "Content Creation & Video Production",
      description: "Professional video creation, editing, and optimization for maximum impact",
      category: "creative",
      level: "Beginner",
      duration: "10 hours", 
      students: 654,
      rating: 4.7,
      price: 247,
      image: "/course3.jpg",
      instructor: "Emma Davis"
    }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <Layout title="Courses">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-t-primary mb-4">
            Master Your Creator Journey
          </h1>
          <p className="text-lg text-t-secondary max-w-2xl mx-auto">
            Learn from successful creators and industry experts with our comprehensive course library
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id 
                ? "bg-primary-01 text-white" 
                : "border border-s-stroke2 bg-b-surface2 text-t-primary"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Course */}
        <Card title="Featured Course" className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-video bg-gradient-to-br from-primary-01 to-primary-02 rounded-lg flex items-center justify-center">
              <Icon name="play-circle" className="w-16 h-16 text-white" />
            </div>
            <div>
              <Badge variant="green" className="mb-3">Best Seller</Badge>
              <h3 className="text-2xl font-bold text-t-primary mb-3">
                Complete Creator Business Masterclass
              </h3>
              <p className="text-t-secondary mb-4">
                The most comprehensive course for building a successful creator business. 
                Learn everything from content creation to monetization strategies.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Icon name="star" className="w-4 h-4 text-yellow-500" />
                  <span className="text-t-primary font-medium">4.9</span>
                  <span className="text-t-secondary">(1,250 students)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="clock" className="w-4 h-4 text-t-secondary" />
                  <span className="text-t-secondary">8 hours</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-t-primary">$197</span>
                  <span className="text-t-secondary ml-2 line-through">$397</span>
                </div>
                <Button className="bg-primary-01 text-white">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} title={course.title}>
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center">
                <Icon name="play-circle" className="w-12 h-12 text-slate-400" />
              </div>
              
              <div className="mb-3">
                <Badge variant="gray">{course.level}</Badge>
              </div>

              <p className="text-t-secondary text-sm mb-4 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1">
                  <Icon name="star" className="w-4 h-4 text-yellow-500" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="users" className="w-4 h-4 text-t-secondary" />
                  <span>{course.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="clock" className="w-4 h-4 text-t-secondary" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-t-primary">
                  ${course.price}
                </span>
                <Button className="bg-primary-01 text-white">
                  Enroll
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card title="Ready to Start Learning?" className="mt-12 text-center">
          <p className="text-t-secondary mb-6 max-w-2xl mx-auto">
            Join thousands of successful creators who have transformed their businesses with our courses. 
            Get lifetime access and start building your empire today.
          </p>
          <Button className="bg-primary-01 text-white">
            Browse All Courses
          </Button>
        </Card>
      </div>
    </Layout>
  );
} 