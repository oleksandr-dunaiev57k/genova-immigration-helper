"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { type CityCode, cities } from "@/lib/cities";

interface CityContextValue {
  city: CityCode;
  setCity: (c: CityCode) => void;
}

const CityContext = createContext<CityContextValue>({
  city: "genova",
  setCity: () => {},
});

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [city, setCityState] = useState<CityCode>("genova");

  useEffect(() => {
    const saved = localStorage.getItem("city") as CityCode | null;
    if (saved && saved in cities) setCityState(saved);
  }, []);

  function setCity(c: CityCode) {
    setCityState(c);
    localStorage.setItem("city", c);
  }

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}
