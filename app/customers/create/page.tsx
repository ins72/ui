"use client";

import { useState } from "react";
import Layout from "@/style-reference/components/Layout";
import Card from "@/style-reference/components/Card";
import Button from "@/style-reference/components/Button";
import Field from "@/style-reference/components/Field";

export default function CreateCustomerPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    website: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // API call to create customer
      console.log("Creating customer:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        position: "",
        website: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        notes: ""
      });
      
      alert("Customer created successfully!");
    } catch (err) {
      setError("Failed to create customer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout title="Create Customer">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-t-primary mb-2">
            Add New Customer
          </h1>
          <p className="text-t-secondary">
            Create a new customer profile and add them to your CRM
          </p>
        </div>

        <Card title="Customer Information">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                required
              />

              <Field
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                required
              />

              <Field
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Enter company name"
              />

              <Field
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Enter job title"
              />
            </div>

            <Field
              label="Website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://example.com"
            />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-t-primary">Address Information</h3>
              
              <Field
                label="Street Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter street address"
              />

              <div className="grid md:grid-cols-3 gap-4">
                <Field
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter city"
                />

                <Field
                  label="State/Province"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Enter state"
                />

                <Field
                  label="ZIP/Postal Code"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="Enter ZIP code"
                />
              </div>

              <Field
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Enter country"
              />
            </div>

            <Field
              label="Notes"
              name="notes"
              textarea
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Add any additional notes about this customer"
              rows={4}
            />

            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-01 text-white"
              >
                {isSubmitting ? "Creating..." : "Create Customer"}
              </Button>

              <Button
                type="button"
                className="border border-s-stroke2 bg-b-surface2 text-t-primary"
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
} 