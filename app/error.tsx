"use client";

import { useEffect } from "react";
import Button from "@/style-reference/components/Button";
import Card from "@/style-reference/components/Card";
import Icon from "@/style-reference/components/Icon";
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
    
    // You can also send to your error reporting service here
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-b-surface p-4">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="text-center p-6">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-03">
              <Icon name="warning" className="h-6 w-6 text-t-light" />
            </div>
            <h2 className="text-xl font-semibold text-t-primary mb-2">
              Something went wrong!
            </h2>
            <p className="text-t-secondary mb-6">
              An unexpected error occurred. Please try again or contact support if the problem persists.
            </p>
            
            {process.env.NODE_ENV === 'development' && (
              <div className="p-4 bg-b-surface2 rounded-lg mb-6">
                <p className="text-sm font-mono text-t-secondary">
                  Error: {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-t-tertiary mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}
            
            <div className="flex flex-col space-y-3">
              <Button
                onClick={reset}
                className="w-full"
              >
                <Icon name="refresh" className="mr-2 h-4 w-4" />
                Try again
              </Button>
              
              <Link href="/">
                <Button
                  className="w-full"
                  isStroke
                >
                  <Icon name="home" className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-xs text-t-tertiary">
                If this problem persists, please contact support with error ID: {error.digest || 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 