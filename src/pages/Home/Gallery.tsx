import { ChevronLeft, ChevronRight, LucideFastForward, X } from "lucide-react";
import { useState } from "react";

const ImageGallery = () => {
    const [zoomedImageIndex, setZoomedImageIndex] = useState(null);


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
    <>
      <div className="container mx-auto pb-5 pt-14 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Customer Showcase
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 md:px-10 pb-16">
        <div className="grid gap-4">
          {images.slice(0, 3).map((src, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={src}
                alt={`Gallery image ${index}`}
                onClick={() => handleZoomIn(index)}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {images.slice(3, 6).map((src, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={src}
                alt={`Gallery image ${index + 3}`}
                onClick={() => handleZoomIn(index)}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {images.slice(6, 9).map((src, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={src}
                alt={`Gallery image ${index + 6}`}
                onClick={() => handleZoomIn(index)}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {images.slice(9, 12).map((src, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={src}
                alt={`Gallery image ${index + 9}`}
                onClick={() => handleZoomIn(index)}
              />
            </div>
          ))}
        </div>

        {/* Modal for zoomed image */}
      {zoomedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-auto w-full relative">
            <button
              className="absolute top-4 right-16 text-red-500 text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={handleCloseZoom}
            >
              <X/>
            </button>
            <button
              className="absolute top-4 left-20 text-white text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={handlePrevImage}
              disabled={zoomedImageIndex === 0}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronLeft/>
            </button>
            <button
              className="absolute top-4 right-16 text-white text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={handleNextImage}
              disabled={zoomedImageIndex === images.length - 1}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <ChevronRight/>
            </button>
            <img src={images[zoomedImageIndex]} alt={`Zoomed Image ${zoomedImageIndex + 1}`} className="mx-auto max-h-screen max-w-full" />
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default ImageGallery;

const images = [
  "https://i.ibb.co/J2NnHdx/1-12.jpg",
  "https://i.ibb.co/mRwNJhB/1-2.jpg",
  "https://i.ibb.co/fDQ4B31/1-6.jpg",

  "https://i.ibb.co/vkg2Ck1/1-4.jpg",
  "https://i.ibb.co/ZM3pz8C/1-3.jpg",
  "https://i.ibb.co/Vg4fKvV/1-5.jpg",

  "https://i.ibb.co/5sQMmRJ/1-10.jpg",
  "https://i.ibb.co/5KYJXzC/1-8.jpg",
  "https://i.ibb.co/Qr3QT3z/1-11.jpg",

  "https://i.ibb.co/jfdhmSW/1.jpg",
  "https://i.ibb.co/wd9RXPk/charlotte-karlsen-T-h-BGkb3-x-Q-unsplash.jpg",
  "https://i.ibb.co/Qr3QT3z/1-11.jpg",
];
