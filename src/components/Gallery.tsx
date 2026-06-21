export default function Gallery() {
  const images = [
    "https://picsum.photos/id/201/800/600",
    "https://picsum.photos/id/20/800/800",
    "https://picsum.photos/id/203/600/800",
    "https://picsum.photos/id/204/800/600",
    "https://picsum.photos/id/206/800/800",
    "https://picsum.photos/id/208/600/800",
  ];

  return (
    <section className="py-24 bg-white shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-purple-50 text-purple-700 border border-purple-100 mb-4 shadow-sm shadow-purple-100/40">
            Campus Life
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <div key={idx} className="break-inside-avoid overflow-hidden rounded-3xl bg-gray-100">
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700 ease-in-out cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
