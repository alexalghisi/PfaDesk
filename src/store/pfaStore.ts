import { create } from "zustand";

interface PfaState {
  netLei: number;
  employeeHealth: boolean;
  setNetLei: (netLei: number) => void;
  setEmployeeHealth: (employeeHealth: boolean) => void;
}

export const usePfaStore = create<PfaState>((set) => ({
  netLei: 80_000,
  employeeHealth: false,
  setNetLei: (netLei) => set({ netLei }),
  setEmployeeHealth: (employeeHealth) => set({ employeeHealth }),
}));
