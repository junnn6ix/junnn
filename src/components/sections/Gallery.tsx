import Image from 'next/image';
import { galleryImages } from '@/data/gallery';

export default function Gallery() {
  return (
    <section id="gallery">
      <h2 className="gallery-title-center">Moments</h2>

      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <div key={img.id} className="g-item">
            {/* Using <img> instead of next/image to avoid domain config overhead for demo URLs */}
            {/* Replace with <Image> once you configure next.config.ts remotePatterns */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
