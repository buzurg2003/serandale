const reviews = [
  {
    name: "Алексей Иванов",
    role: "Crypto Trader",
    text: "Лучший интерфейс, который я видел в Web3 проектах.",
    rating: 5,
  }
];

export default function Reviews() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Serendale AI Platform",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
      "reviewBody": r.text
    }))
  };

  return (
    <section className="py-20 bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Community Feedback</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="max-w-sm p-6 bg-slate-900 rounded-xl border border-slate-800">
              <p className="italic text-slate-300 mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center font-bold">
                  {r.name[0]}
                </div>
                <div>
                  <h4 className="font-medium">{r.name}</h4>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}