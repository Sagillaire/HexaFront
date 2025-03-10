import { create } from "zustand";

interface StoreState<T> {
  data: T | null;
  setData: (data: T) => void;
  reset: () => void;
}

export const useGenericStore = <T>() =>
  create<StoreState<T>>((set) => ({
    data: null,
    setData: (data) => set({ data }),
    reset: () => set({ data: null }),
  }));
