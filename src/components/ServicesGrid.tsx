import { Car, Bike, UtensilsCrossed, Send, ShoppingCart, ShoppingBag, Play, Pill, Star, Truck } from "lucide-react";

const services = [
  { icon: Bike, label: "GoRide", color: "bg-primary" },
  { icon: Car, label: "GoCar", color: "bg-primary" },
  { icon: UtensilsCrossed, label: "GoFood", color: "bg-destructive" },
  { icon: Send, label: "GoSend", color: "bg-primary" },
  { icon: ShoppingCart, label: "GoMart", color: "bg-destructive" },
  { icon: ShoppingBag, label: "GoShop", color: "bg-accent" },
  { icon: Play, label: "GoPlay", color: "bg-accent" },
  { icon: Pill, label: "GoMed", color: "bg-primary" },
  { icon: Star, label: "GoClub", color: "bg-accent" },
  { icon: Truck, label: "GoBox", color: "bg-primary" },
];

const ServicesGrid = () => {
  return (
    <section className="mx-4 mt-6" aria-label="Layanan Gojek">
      <div className="grid grid-cols-4 gap-y-5 gap-x-2 sm:grid-cols-5">
        {services.map((service) => (
          <button
            key={service.label}
            className="flex flex-col items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-1 transition-all active:scale-90"
            aria-label={service.label}
          >
            <div className={`h-12 w-12 rounded-2xl ${service.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300`}>
              <service.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-[11px] font-bold text-foreground tracking-tight">{service.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
