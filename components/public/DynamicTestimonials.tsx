"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { apiClient } from "@/infrastructure/api/apiClient";

interface Testimonial {
    _id: string;
    content: string;
    rating: number;
    customerId: {
        name: string;
        company: string;
        role: string;
        location?: string;
    };
    helpful: {
        count: number;
    };
    timeAgo: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
            "{testimonial.content}"
        </p>
        <div>
            <div className="font-semibold text-gray-900 dark:text-white">
                {testimonial.customerId.name}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
                {testimonial.customerId.role} at {testimonial.customerId.company}
            </div>
            {testimonial.customerId.location && (
                <div className="text-sm text-gray-400">
                    {testimonial.customerId.location}
                </div>
            )}
            <div className="text-xs text-gray-400 mt-2">
                {testimonial.timeAgo} • {testimonial.helpful.count} found helpful
            </div>
        </div>
    </div>
);

const TestimonialsSkeleton: React.FC = () => (
    <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg animate-pulse">
                <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                        <div key={j} className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded mr-1"></div>
                    ))}
                </div>
                <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
            </div>
        ))}
    </div>
);

const TestimonialsEmpty: React.FC = () => (
    <div className="text-center py-12">
        <div className="text-gray-500 dark:text-gray-400 mb-4">
            <Star className="h-12 w-12 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium mb-2">No testimonials yet</h3>
            <p>Be the first to share your experience with our platform.</p>
        </div>
    </div>
);

const DynamicTestimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await apiClient.getPublicTestimonials({ limit: 6 });
                setTestimonials(data);
            } catch (error: any) {
                console.error('Error fetching testimonials:', error);
                setError(error.message || 'Failed to load testimonials');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (error) {
        return (
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Trusted by Business Leaders Worldwide
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            See what our customers have to say about their success with Mewayz.
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            Unable to load testimonials. Please try again later.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Trusted by Business Leaders Worldwide
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        See what our customers have to say about their success with Mewayz.
                    </p>
                </div>
                
                {loading ? (
                    <TestimonialsSkeleton />
                ) : testimonials.length === 0 ? (
                    <TestimonialsEmpty />
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DynamicTestimonials; 