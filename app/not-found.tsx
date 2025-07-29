import React from "react";
import Link from 'next/link';
import Button from "@/style-reference/components/Button";
import Icon from "@/style-reference/components/Icon";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-b-surface p-4">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="text-center p-6">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-b-surface2">
              <Icon name="search" className="h-8 w-8 text-t-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-t-primary mb-2">
              404 - Page Not Found
            </h2>
            <p className="text-t-secondary mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="text-center mb-6">
              <p className="text-sm text-t-tertiary">
                You can try searching for what you need, or navigate back to the dashboard.
              </p>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Link href="/">
                <Button className="w-full">
                  <Icon name="home" className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Button>
              </Link>
              
              <Button
                onClick={() => window.history.back()}
                className="w-full"
                isStroke
              >
                <Icon name="arrow-left" className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-xs text-t-tertiary">
                If you believe this is an error, please contact support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 