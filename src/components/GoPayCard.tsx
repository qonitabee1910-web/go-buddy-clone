import { QrCode, ArrowUpCircle, Compass, Plus } from "lucide-react";

const GoPayCard = () => {
  const actions = [
    { icon: QrCode, label: "Pay", color: "text-gopay-foreground" },
    { icon: ArrowUpCircle, label: "Top Up", color: "text-gopay-foreground" },
    { icon: Compass, label: "Explore", color: "text-gopay-foreground" },
    { icon: Plus, label: "More", color: "text-gopay-foreground" },
  ];

  return (
    <div className="mx-4 -mt-1 rounded-2xl bg-gopay p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs font-medium text-gopay-foreground/70">gopay</p>
          <p className="text-xl font-bold text-gopay-foreground">Rp 1.250.000</p>
        </div>
        <button className="rounded-full bg-gopay-foreground/20 px-3 py-1 text-xs font-semibold text-gopay-foreground">
          Top Up
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {actions.map((action) => (
          <button key={action.label} className="flex flex-col items-center gap-1 rounded-xl py-2 hover:bg-gopay-foreground/10 transition-colors">
            <div className="h-8 w-8 rounded-full bg-gopay-foreground/20 flex items-center justify-center">
              <action.icon className={`h-4 w-4 ${action.color}`} />
            </div>
            <span className="text-[10px] font-semibold text-gopay-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GoPayCard;
