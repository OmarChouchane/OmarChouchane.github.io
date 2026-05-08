
import React, { useState } from 'react';
import FadeInSection from '../FadeInSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import PolaroidPhoto from '../PolaroidPhoto';

// Sample gallery items - replace with your own photos
const galleryItems = [
  {
    id: 1,
    image: "/marche.jpeg",
    caption: "Marche fel Menzah",
    rotation: -3,
  },
  {
    id: 2,
    image: "/sidibou.jpeg",
    caption: "Sidi Bou Said",
    rotation: 2,
  },
  {
    id: 3,
    image: "/bardo.jpeg",
    caption: "Bardo Museum",
    rotation: -1,
  },
  {
    id: 4,
    image: "/padel.jpeg",
    caption: "Padel",
    rotation: 3,
  },
  {
    id: 5,
    image: "/batta.jpeg",
    caption: "Batta",
    rotation: -2,
  },

  {
    id: 6,
    image: "/balcon.jpeg",
    caption: "Rkchetna fel balcon",
    rotation: 1,
  },
  {
    id: 7,
    image: "/beach.jpeg",
    caption: "Beach Date",
    rotation: 1,
  },
  {
    id: 8,
    image: "/darjeld.jpeg",
    caption: "Dar El Jeld",
    rotation: -3,
  },
  {
    id: 9,
    image: "/marsa.jpeg",
    caption: "El Marsa",
    rotation: 2,
  },
];

const Chapter7Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <div className="chapter-section bg-gradient-to-b from-[#1a181d] to-love-dark">
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-playfair mb-16 text-center glow-effect">
          Us Through Time
        </h2>
      </FadeInSection>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <FadeInSection key={item.id} delay={index * 150} className="flex justify-center">
              <PolaroidPhoto
                imageSrc={item.image}
                caption={item.caption}
                rotation={item.rotation}
                onClick={() => setSelectedPhoto(item)}
                className=""
              />
            </FadeInSection>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="bg-black/90 border-white/20 max-w-3xl">
          {selectedPhoto && (
            <div className="p-4">
              <img 
                src={selectedPhoto.image} 
                alt={selectedPhoto.caption}
                className="w-full max-h-[90vh] object-contain"
              />
              <p className="text-center mt-4 text-xl font-playfair text-love-soft">
                {selectedPhoto.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chapter7Gallery;
