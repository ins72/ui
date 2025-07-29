import React from "react";
import Spinner from "@/style-reference/components/Spinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-b-surface p-4">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="p-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Loading Spinner */}
              <Spinner />
              
              {/* Loading Text */}
              <div className="text-center">
                <h2 className="text-lg font-semibold text-t-primary">
                  Loading Core 2.0
                </h2>
                <p className="text-sm text-t-secondary mt-1">
                  Please wait while we prepare your dashboard...
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-b-surface2 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
              
              {/* Loading Steps */}
              <div className="space-y-2 text-sm text-t-tertiary">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Initializing application...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>Loading components...</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-s-stroke2 rounded-full"></div>
                  <span>Connecting to services...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 