'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  MapPin, 
  BarChart3, 
  Bell, 
  Search, 
  ChevronRight, 
  Activity, 
  Zap, 
  Box, 
  Scan as ScanIcon, 
  CheckCircle2,
  Clock,
  Layers,
  Settings,
  MoreVertical,
  Wifi,
  Signal,
  LayoutGrid
} from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const screens = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: 'scan',
    title: 'Live Scan',
    icon: <Camera className="w-5 h-5" />,
  },
  {
    id: 'map',
    title: 'Map',
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: 'notifications',
    title: 'Inbox',
    icon: <Bell className="w-5 h-5" />,
  }
];

export default function MobileDemo() {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [isScanning, setIsScanning] = useState(false);
  const container = useRef(null);
  const screenRef = useRef(null);

  useGSAP(() => {
    // Initial entrance animation
    gsap.from(".phone-frame", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from(".screen-content", {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)"
    });
  }, { scope: container });

  const switchScreen = (id: string) => {
    if (id === currentScreen) return;
    
    gsap.to(".screen-content", {
      opacity: 0,
      x: id === 'dashboard' ? 20 : -20,
      duration: 0.3,
      onComplete: () => {
        setCurrentScreen(id);
        gsap.fromTo(".screen-content", 
          { opacity: 0, x: id === 'dashboard' ? -20 : 20 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
        );
      }
    });
  };

  return (
    <div ref={container} className="relative w-full flex justify-center items-center py-10">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      {/* Phone Frame */}
      <div className="phone-frame relative w-[320px] h-[650px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-50"></div>
        
        {/* Side Buttons */}
        <div className="absolute right-[-10px] top-24 w-1 h-12 bg-gray-800 rounded-l-md"></div>
        <div className="absolute left-[-10px] top-24 w-1 h-20 bg-gray-800 rounded-r-md"></div>

        {/* Screen Content Wrapper */}
        <div className="relative h-full w-full bg-white flex flex-col pt-8 overflow-hidden">
          
          {/* Status Bar */}
          <div className="px-6 py-2 flex justify-between items-center z-40 bg-white">
            <span className="text-[12px] font-bold text-gray-900">9:41</span>
            <div className="flex gap-1.5 items-center">
              <Signal className="w-3 h-3 text-gray-900" />
              <Wifi className="w-3 h-3 text-gray-900" />
              <div className="w-5 h-2.5 bg-gray-900 rounded-sm relative">
                <div className="absolute top-0.5 left-0.5 right-1 bottom-0.5 bg-white rounded-[1px]"></div>
              </div>
            </div>
          </div>

          <div className="screen-content flex-1 overflow-y-auto px-5 pb-20 custom-scrollbar">
            {currentScreen === 'dashboard' && (
              <div className="space-y-6 pt-2">
                {/* Header Card */}
                <div className="bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 rounded-3xl p-6 text-white shadow-xl shadow-emerald-200/50">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      LIVE INFRASTRUCTURE HEALTH
                    </div>
                    <div className="bg-emerald-600/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border border-white/20 flex items-center gap-1">
                      <Wifi className="w-3 h-3" /> ONLINE
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-emerald-50 text-sm mb-1">Welcome Back,</p>
                    <h2 className="text-2xl font-bold">Aditya Sawant</h2>
                  </div>

                  <div className="grid grid-cols-4 gap-2 border-t border-white/20 pt-4">
                    <div>
                      <p className="text-[18px] font-bold">36</p>
                      <p className="text-[8px] text-emerald-100 uppercase font-medium">Detections</p>
                    </div>
                    <div>
                      <p className="text-[18px] font-bold">48</p>
                      <p className="text-[8px] text-emerald-100 uppercase font-medium">Projects</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        <p className="text-[18px] font-bold tracking-tighter">Active</p>
                      </div>
                      <p className="text-[8px] text-emerald-100 uppercase font-medium">Sync State</p>
                    </div>
                    <div>
                      <p className="text-[18px] font-bold">v26.0</p>
                      <p className="text-[8px] text-emerald-100 uppercase font-medium">Build</p>
                    </div>
                  </div>
                </div>

                {/* Specialized Analysis Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-[10px] font-bold text-orange-500 tracking-wider">SPECIALIZED ANALYSIS</p>
                      <h3 className="text-lg font-bold text-gray-900">Detection Modules</h3>
                    </div>
                    <button className="p-2 bg-gray-100 rounded-full"><LayoutGrid className="w-4 h-4 text-gray-600" /></button>
                  </div>

                  {/* Pothole Card */}
                  <div 
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer active:scale-95 transition-transform"
                    onClick={() => switchScreen('scan')}
                  >
                    <div className="relative h-44 bg-gray-100">
                      <Image 
                        src="/pothole-demo.png" 
                        alt="Pothole Detection" 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg border border-red-400">
                        Pothole: High (94%)
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-gray-900">Pothole Detection</h4>
                        <div className="flex gap-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-500 leading-relaxed mb-3">
                        Computer vision mapping for urban road maintenance and rapid response.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-[10px] text-gray-400">Live for 21 days</span>
                        </div>
                        <div className="px-2 py-1 rounded-md bg-orange-50 text-orange-600 text-[10px] font-bold">
                          URGENT
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Another Card (Placeholder) */}
                  <div className="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-900">Structural Cracks</h4>
                      <p className="text-[10px] text-gray-500">Bridge & Tunnel Analysis</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            )}

            {currentScreen === 'scan' && (
              <div className="h-full flex flex-col -mx-5 -mt-2 bg-black text-white relative">
                <Image 
                  src="/scan-view.png" 
                  alt="Live Scan View" 
                  fill 
                  className="object-cover opacity-80"
                />
                
                {/* AI Overlay Layer */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                      <p className="text-[10px] font-mono opacity-70">GPS: 19.0760 N, 72.8777 E</p>
                      <p className="text-[10px] font-mono opacity-70">ALT: 14.5m  SPD: 24km/h</p>
                    </div>
                    <button 
                      onClick={() => switchScreen('dashboard')}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Detection Pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 border-2 border-dashed border-white/30 rounded-3xl animate-pulse flex items-center justify-center">
                    <div className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Align Infrastructure</div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-black/60 backdrop-blur-xl p-4 rounded-3xl border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        <p className="text-xs font-bold text-red-500">DETECTING AUTOMATICALLY</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                          <p className="text-[10px] opacity-60">Session Cracks</p>
                          <p className="text-lg font-bold">12</p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-2 border border-white/5">
                          <p className="text-[10px] opacity-60">Processing FPS</p>
                          <p className="text-lg font-bold text-emerald-400">45.2</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex-1 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2">
                        <ScanIcon className="w-5 h-5" /> LOG DATA
                      </button>
                      <button className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Box className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentScreen === 'map' && (
              <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-lg">Map View</h3>
                <p className="text-sm text-gray-500">Geospatial insights powered by Google Maps API. Markers indicate detected infrastructure issues.</p>
                <div className="w-full h-48 bg-gray-100 rounded-2xl border-2 border-dashed border-gray-200"></div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around px-2 pb-5 z-40">
            {screens.map((screen) => (
              <button
                key={screen.id}
                onClick={() => switchScreen(screen.id)}
                className={`relative group flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all ${
                  currentScreen === screen.id 
                    ? 'text-emerald-500 bg-emerald-50 shadow-inner' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {screen.icon}
                {currentScreen === screen.id && (
                   <span className="absolute -top-1 right-3 w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-200 rounded-full z-50"></div>
        </div>
      </div>

      {/* Floating Zap Tag (matches image) */}
      <div className="absolute right-[calc(50%-180px)] top-[28%] bg-white w-12 h-12 rounded-2xl shadow-2xl border border-gray-100 flex items-center justify-center animate-bounce duration-[2000ms]">
        <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
      </div>
    </div>
  );
}
