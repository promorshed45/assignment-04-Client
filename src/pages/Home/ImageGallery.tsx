import React, { useState } from 'react';

const ImageGallery = () => {
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  // Dummy data of image URLs (replace with your actual image URLs)
  const images = [
    'https://i.ibb.co/mXwy2mK/1-12.jpg',
    'https://i.ibb.co/5js8yPF/1-11.jpg',
    'https://i.ibb.co/rf30m6N/1-10.jpg',
    'https://i.ibb.co/pfx3DBn/1-8.jpg',
    'https://i.ibb.co/9pkMmv7/1-2.jpg',
    'https://i.ibb.co/6Pf5VD4/1-5.jpg',
    'https://i.ibb.co/zxjfwH1/1-3.jpg',
    'https://i.ibb.co/yd8fQjV/1-4.jpg',
    'https://i.ibb.co/pb9gStn/1-6.jpg',
    'https://i.ibb.co/ggK0xQt/1-9.jpg',
    'https://i.ibb.co/4KYDT6r/1-1.jpg',
    'https://i.ibb.co/Wk1B3sz/1.jpg',
    'https://i.ibb.co/hXF6yKY/1-7.jpg',

  ];

  // Function to handle click on an image to zoom in
  const handleZoomIn = (index) => {
    setZoomedImageIndex(index);
  };

  // Function to handle click on close button to zoom out
  const handleCloseZoom = () => {
    setZoomedImageIndex(null);
  };

  // Function to handle previous image navigation
  const handlePrevImage = () => {
    if (zoomedImageIndex > 0) {
      setZoomedImageIndex(zoomedImageIndex - 1);
    }
  };

  // Function to handle next image navigation
  const handleNextImage = () => {
    if (zoomedImageIndex < images.length - 1) {
      setZoomedImageIndex(zoomedImageIndex + 1);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Customer Showcase</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images?.slice(0,8).map((imageUrl, index) => (
            <div key={index} className="relative w-full">
              <img
                src={imageUrl}
                alt={`Customer ${index + 1}`}
                className="rounded-lg w-full h-[350px] object-cover cursor-pointer"
                onClick={() => handleZoomIn(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for zoomed image */}
      {zoomedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-screen-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-white text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={handleCloseZoom}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <button
              className="absolute top-4 left-4 text-white text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={handlePrevImage}
              disabled={zoomedImageIndex === 0}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              className="absolute top-4 right-16 text-white text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={handleNextImage}
              disabled={zoomedImageIndex === images.length - 1}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <img src={images[zoomedImageIndex]} alt={`Zoomed Image ${zoomedImageIndex + 1}`} className="mx-auto max-h-screen max-w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
