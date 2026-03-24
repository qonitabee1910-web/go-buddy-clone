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
    <div className="mx-4 mt-5">
      <div className="grid grid-cols-4 gap-y-4 gap-x-2 sm:grid-cols-5">
        {services.map((service) => (
          <button
            key={service.label}
            className="flex flex-col items-center gap-1.5 group"
          >
            <div className={`h-12 w-12 rounded-2xl ${service.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
              <service.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-[11px] font-semibold text-foreground">{service.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
