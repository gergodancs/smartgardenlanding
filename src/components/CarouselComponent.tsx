'use client';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselComponent() {
  const images = [
    '/images/balcony.jpg',
    '/images/garden.jpg',
    '/images/community.jpg',
    '/images/garten4.jpg',
    '/images/farm.jpg',
    '/images/VEGETABLES2.jpg',
  ];

  return (
    <section className="carousel-section">
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={700}
      >
        {images.map((src, idx) => (
          <div key={idx} style={{ position: 'relative', width: '100%', height: '400px' }}>
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              layout="fill"
              objectFit="cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
