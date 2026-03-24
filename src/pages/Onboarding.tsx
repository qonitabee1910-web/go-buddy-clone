import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Bike, Car, ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form State
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState<"user" | "driver">("user");
  const [vehicleType, setVehicleType] = useState<"bike" | "car">("bike");
  const [vehiclePlate, setVehiclePlate] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleCompleteOnboarding = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // 1. Update Profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          role: role,
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // 2. If Driver, create driver record
      if (role === 'driver') {
        const { error: driverError } = await supabase
          .from('drivers')
          .insert([
            {
              id: user.id,
              vehicle_type: vehicleType,
              vehicle_plate: vehiclePlate,
            }
          ]);
        
        if (driverError) throw driverError;
      }

      toast({
        title: "Pendaftaran Berhasil!",
        description: `Selamat datang di Klumpang GO, ${fullName}!`,
      });

      // Redirect based on role
      navigate(role === 'driver' ? "/driver" : "/");
    } catch (error: any) {
      console.error("Onboarding error:", error);
      toast({
        variant: "destructive",
        title: "Gagal Mendaftar",
        description: error.message || "Terjadi kesalahan saat menyimpan data.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-background flex flex-col p-8 max-w-lg mx-auto w-full">
      <header className="mb-12">
        <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg">
          <span className="text-white font-black text-xl italic">K</span>
        </div>
        <div className="flex gap-1 mb-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s} 
              className={`h-1.5 flex-1 rounded-full transition-all ${s <= step ? "bg-primary" : "bg-muted"}`} 
            />
          ))}
        </div>
        <h1 className="text-2xl font-black tracking-tight">
          {step === 1 && "Siapa namamu?"}
          {step === 2 && "Ingin jadi apa?"}
          {step === 3 && role === "user" && "Selesai!"}
          {step === 3 && role === "driver" && "Detail Kendaraan"}
        </h1>
      </header>

      <main className="flex-1">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-muted-foreground">Nama Lengkap</Label>
              <Input 
                id="name"
                placeholder="Contoh: Budi Santoso"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="py-7 rounded-2xl bg-muted border-none text-lg font-bold focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Gunakan nama asli agar memudahkan driver atau pelanggan mengenalimu.
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <RadioGroup 
              value={role} 
              onValueChange={(v: "user" | "driver") => setRole(v)}
              className="grid grid-cols-1 gap-4"
            >
              <Label
                htmlFor="role-user"
                className={`flex items-center gap-4 p-6 rounded-3xl border-2 transition-all cursor-pointer ${role === 'user' ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
              >
                <div className={`p-3 rounded-2xl ${role === 'user' ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                  <User className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-lg">Pelanggan</p>
                  <p className="text-xs font-medium text-muted-foreground">Saya ingin memesan layanan</p>
                </div>
                <RadioGroupItem value="user" id="role-user" className="sr-only" />
              </Label>

              <Label
                htmlFor="role-driver"
                className={`flex items-center gap-4 p-6 rounded-3xl border-2 transition-all cursor-pointer ${role === 'driver' ? "border-orange-500 bg-orange-50/50" : "border-border hover:border-orange-500/50"}`}
              >
                <div className={`p-3 rounded-2xl ${role === 'driver' ? "bg-orange-500 text-white" : "bg-muted text-muted-foreground"}`}>
                  <Bike className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-lg">Driver</p>
                  <p className="text-xs font-medium text-muted-foreground">Saya ingin mencari pendapatan</p>
                </div>
                <RadioGroupItem value="driver" id="role-driver" className="sr-only" />
              </Label>
            </RadioGroup>
          </div>
        )}

        {step === 3 && role === "user" && (
          <div className="flex flex-col items-center justify-center text-center py-8 animate-in fade-in zoom-in-95">
            <div className="h-24 w-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6">
              <ArrowRight className="h-12 w-12" />
            </div>
            <h2 className="text-xl font-black mb-2">Semua Sudah Siap!</h2>
            <p className="text-sm text-muted-foreground font-medium">
              Klik tombol di bawah untuk mulai menggunakan Klumpang GO.
            </p>
          </div>
        )}

        {step === 3 && role === "driver" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <div className="space-y-4">
              <Label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Jenis Kendaraan</Label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setVehicleType("bike")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${vehicleType === 'bike' ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <Bike className="h-8 w-8" />
                  <span className="font-bold text-sm">Motor</span>
                </button>
                <button 
                  onClick={() => setVehicleType("car")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${vehicleType === 'car' ? "border-primary bg-primary/5" : "border-border"}`}
                >
                  <Car className="h-8 w-8" />
                  <span className="font-bold text-sm">Mobil</span>
                </button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="plate" className="text-xs font-black uppercase tracking-widest text-muted-foreground">Nomor Polisi</Label>
              <Input 
                id="plate"
                placeholder="Contoh: AB 1234 CD"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="py-7 rounded-2xl bg-muted border-none text-lg font-bold focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>
        )}
      </main>

      <footer className="mt-8 space-y-4">
        {step < 3 ? (
          <Button 
            onClick={nextStep}
            disabled={step === 1 && !fullName}
            className="w-full py-7 rounded-2xl bg-primary text-white font-black text-base uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
          >
            Lanjut
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : (
          <Button 
            onClick={handleCompleteOnboarding}
            disabled={isLoading || (role === 'driver' && !vehiclePlate)}
            className="w-full py-7 rounded-2xl bg-primary text-white font-black text-base uppercase tracking-widest shadow-xl shadow-primary/20 active:scale-[0.98] transition-all"
          >
            {isLoading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Selesaikan Pendaftaran"}
          </Button>
        )}
        
        {step > 1 && (
          <button 
            onClick={prevStep}
            className="w-full py-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
          >
            Kembali
          </button>
        )}
      </footer>
    </div>
  );
};

export default Onboarding;
