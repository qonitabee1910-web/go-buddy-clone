import { useState, useEffect, useRef } from "react";
import { Search, MapPin, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface NominatimResult {
  lat: string;
  lon: string;
  display_name: string;
}

interface LocationSearchProps {
  onSelect: (lat: number, lng: number, address: string) => void;
  placeholder?: string;
  className?: string;
}

const LocationSearch = ({ onSelect, placeholder = "Cari lokasi...", className }: LocationSearchProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<NominatimResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.length > 2) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=id&limit=5`
          );
          const data = await response.json();
          setResults(data);
          setIsOpen(true);
        } catch (error) {
          console.error("Search error:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative w-full", className)} ref={dropdownRef}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 2 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full rounded-2xl bg-muted pl-12 pr-12 py-4 text-sm font-bold placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
        />
        {query && (
          <button 
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted-foreground/10"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border/50 rounded-2xl shadow-xl z-[2000] overflow-hidden animate-in fade-in slide-in-from-top-2">
          <div className="max-h-[300px] overflow-y-auto">
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => {
                  onSelect(parseFloat(result.lat), parseFloat(result.lon), result.display_name);
                  setQuery(result.display_name);
                  setIsOpen(false);
                }}
                className="w-full flex items-start gap-4 p-4 hover:bg-muted transition-colors text-left border-b border-border/50 last:border-0"
              >
                <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm truncate leading-tight">
                    {result.display_name.split(",")[0]}
                  </p>
                  <p className="text-[10px] text-muted-foreground line-clamp-2 mt-1">
                    {result.display_name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
