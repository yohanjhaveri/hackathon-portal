import { createContext, useContext, useEffect, useState } from "react";
import { filtersSchema } from "../utils/filtering";
import { loadFilters, saveFilters } from "../utils/cache";
import type { Location, Status, Timezone } from "../types";

export type Filters = {
  search: string;
  location: Location[];
  timezone: Timezone[];
  status: Status[];
};

export type FiltersContextValue = {
  applied: Filters;
  onUpdate: (name: string, value: any) => void;
  onReset: () => void;
};

export type FiltersProviderProps = {
  children: React.ReactNode;
};

export const defaultValue = {
  search: "",
  location: filtersSchema.location.options,
  timezone: filtersSchema.timezone.options,
  status: filtersSchema.status.options,
};

export const FiltersContext = createContext<FiltersContextValue | null>(null);

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [applied, setApplied] = useState<Filters>(defaultValue);

  const onUpdate = (name: string, value: any) => {
    setApplied((prev) => ({ ...prev, [name]: value }));
  };

  const onReset = () => {
    setApplied(defaultValue);
  };

  useEffect(() => {
    const f = loadFilters();

    if (f) {
      setApplied(f);
    }
  }, []);

  useEffect(() => {
    saveFilters(applied);
  }, [applied]);

  return (
    <FiltersContext.Provider
      value={{
        applied,
        onUpdate,
        onReset,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  return useContext(FiltersContext);
};
