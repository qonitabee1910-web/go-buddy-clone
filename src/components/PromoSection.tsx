const promos = [
  { id: 1, title: "GoFood Deals", desc: "Diskon 50% makanan favorit!", tag: "MAKANAN", color: "border-l-destructive" },
  { id: 2, title: "GoRide Hemat", desc: "Potongan Rp10.000 perjalanan", tag: "TRANSPORT", color: "border-l-primary" },
  { id: 3, title: "GoPay Cashback", desc: "Cashback 20% di merchant pilihan", tag: "PEMBAYARAN", color: "border-l-gopay" },
  { id: 4, title: "GoMart Gratis Ongkir", desc: "Belanja kebutuhan tanpa ongkir", tag: "BELANJA", color: "border-l-accent" },
];

const PromoSection = () => {
  return (
    <div className="mt-6 pb-24">
      <div className="px-4 flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-foreground">Promo untukmu</h2>
        <button className="text-xs font-semibold text-primary">Lihat semua</button>
      </div>
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className={`min-w-[240px] rounded-xl bg-card p-4 shadow-sm border-l-4 ${promo.color} flex-shrink-0`}
          >
            <span className="text-[10px] font-bold text-muted-foreground tracking-wider">{promo.tag}</span>
            <h3 className="text-sm font-bold text-card-foreground mt-1">{promo.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{promo.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
