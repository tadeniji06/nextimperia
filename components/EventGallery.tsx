"use client"

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import { o1p, o21, o23, o11 } from "@/assets";

const EventsGallery = () => {
  const galleryImages: StaticImageData[] = [o1p, o21, o23, o11];
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

  return (
    <section className="py-10 px-4 md:px-20">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Events Gallery</h2>
        <p className="text-gray-600">Check out highlights from our events.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-40 md:h-56 cursor-pointer rounded-lg overflow-hidden"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg hover:scale-105 transition-transform"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90vw] max-w-4xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Selected"
              layout="fill"
              objectFit="contain"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsGallery;
