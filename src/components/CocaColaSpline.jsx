import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function CocaColaSpline() {
  const [error, setError] = useState(null);

  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
  };

  const handleError = (err) => {
    console.error('Spline loading error:', err);
    setError(err);
  };

  if (error) {
    return (
      <div className="text-red-500">
        Error loading 3D model: {error.message}
      </div>
    );
  }

  return (
    <Spline 
      scene="https://prod.spline.design/lMx7-ji0AQprSrtx/scene.splinecode" 
      onLoad={handleLoad}
      onError={handleError}
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'absolute', 
        top: 0, 
        left: 0 
      }}
    />
  );
}