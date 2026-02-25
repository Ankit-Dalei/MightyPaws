import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import galleryData from "../data/galleryData.json";
import "./Gallery.css";

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 30,
        scale: 0.98,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out"
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery-page" ref={galleryRef}>
      <header className="gallery-hero">
        <div className="container">
          <h1>
            Visual <span>History</span>
          </h1>
          <p>Our journey captured in moments of culinary art.</p>
        </div>
      </header>

      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryData.images.map((img) => (
            <div key={img.id} className="gallery-item">
              <div className="gallery-inner">
                <img src={img.url} alt={img.title} />
                <div className="gallery-overlay">
                  <h3>{img.title}</h3>
                  <span>{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;