import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import { LocateFixed } from 'lucide-react';

// Fix for default marker icon in Leaflet + React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const DEFAULT_CENTER: [number, number] = [-6.200000, 106.816666];

interface MapComponentProps {
  height?: string;
  center?: [number, number];
  markers?: Array<{ lat: number; lng: number }>;
  onLocationSelect?: (lat: number, lng: number) => void;
}

// Component to handle map resizing and updating center
function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [center, zoom, map]);
  return null;
}

const MapComponent = ({ height = "300px", markers = [], center = DEFAULT_CENTER }: MapComponentProps) => {
  const [currentCenter, setCurrentCenter] = useState<[number, number]>(center);

  useEffect(() => {
    setCurrentCenter(center);
  }, [center]);

  const handleLocateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentCenter([position.coords.latitude, position.coords.longitude]);
      });
    }
  };

  return (
    <div 
      style={{ height }} 
      className="w-full rounded-2xl overflow-hidden shadow-sm border border-border/50 z-0 relative"
    >
      <MapContainer 
        center={currentCenter} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <ChangeView center={currentCenter} zoom={15} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]} />
        ))}
      </MapContainer>

      <button 
        onClick={handleLocateMe}
        className="absolute bottom-4 right-4 z-[1000] p-3 rounded-full bg-white shadow-lg text-primary hover:bg-muted active:scale-90 transition-all border border-border/50"
        aria-label="Lokasi Saya"
      >
        <LocateFixed className="h-5 w-5" />
      </button>
    </div>
  );
};

export default MapComponent;
