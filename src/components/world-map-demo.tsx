"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";
import Image from "next/image";

export default function WorldMapDemo() {
  return (
    <div className="w-full bg-white dark:bg-black">
      {/* <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div> */}
      <WorldMap
        dots={[
          {
            start: {
              lat: 40.2008,
              lng: -100.4937,
            }, // Alaska (Fairbanks)
            end: { lat: -13.3424, lng: 15.3039 }, // Los Angeles
          },
          {
            start: { lat: -13.3424, lng: 15.3039 }, // Kinshasa  
            end: { lat: -44.7566, lng: 23.1814 }, // Pretoria
          },
          {
            start: { lat: -23.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: -13.3424, lng: 15.3039 }, // Lisbon
          },
          {
            start: { lat: 38.8566, lng: 2.3522 }, // Paris
            end: { lat: -13.3424, lng: 15.3039 }, // Pretoria
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end:  { lat: -13.3424, lng: 15.3039 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
