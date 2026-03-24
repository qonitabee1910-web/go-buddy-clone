import { useState, useEffect } from "react";

const banners = [
  { id: 1, title: "GoFood Festival", subtitle: "Diskon hingga 60%! 🍔", gradient: "from-primary to-primary/70" },
  { id: 2, title: "GoCar Hemat", subtitle: "Cashback 30% dengan GoPay 🚗", gradient: "from-gopay to-gopay/70" },
  { id: 3, title: "GoMart Belanja", subtitle: "Gratis ongkir minimal 50rb 🛒", gradient: "from-destructive to-destructive/70" },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-4 mt-5">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`min-w-full bg-gradient-to-r ${banner.gradient} p-6 flex flex-col justify-center min-h-[120px]`}
            >
              <h3 className="text-lg font-bold text-primary-foreground">{banner.title}</h3>
              <p className="text-sm text-primary-foreground/80 mt-1">{banner.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1.5 mt-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
