
import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe'; // Fixed import statement to use default import
import { HistoricalEvent } from '@/lib/types';
import EventPin from './EventPin';

interface GlobeProps {
  events: HistoricalEvent[];
  onSelectEvent: (event: HistoricalEvent) => void;
  selectedEvent?: HistoricalEvent | null;
}

const Globe: React.FC<GlobeProps> = ({ events, onSelectEvent, selectedEvent }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Create the globe visualization
  useEffect(() => {
    if (!canvasRef.current) return;

    const phi = 0;
    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    
    window.addEventListener('resize', onResize);
    onResize();
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.15, 0.25],
      markerColor: [0.9, 0.7, 0.3],
      glowColor: [0.8, 0.8, 0.8],
      markers: [],
      opacity: 0.8,
      scale: 1,
      onRender: (state) => {
        state.phi = phi + ((pointerInteractionMovement.current * 0.005) % (Math.PI * 2));
        state.width = width * 2;
        state.height = width * 2;
        
        // Auto-rotate when not interacting
        if (!pointerInteracting.current) {
          state.phi += 0.001;
        }
      },
    });
    
    globeRef.current = globe;
    setIsLoaded(true);
    
    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Handle pointer/touch interactions
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    canvasRef.current?.style.setProperty('cursor', 'grabbing');
  };
  
  const handlePointerUp = () => {
    pointerInteracting.current = null;
    canvasRef.current?.style.setProperty('cursor', 'grab');
  };
  
  const handlePointerOut = () => {
    pointerInteracting.current = null;
    canvasRef.current?.style.setProperty('cursor', 'grab');
  };
  
  const handleMouseMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Globe Canvas */}
      <div 
        className="absolute inset-0 z-10 touch-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ cursor: 'grab' }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            contain: 'layout paint size',
          }}
        />
      </div>
      
      {/* Event Pins */}
      {isLoaded && events.map(event => (
        <EventPin
          key={event.id}
          event={event}
          onClick={() => onSelectEvent(event)}
          isSelected={selectedEvent?.id === event.id}
        />
      ))}
    </div>
  );
};

export default Globe;
