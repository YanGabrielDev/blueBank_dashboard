import { create } from 'zustand';

// Define a interface para o estado do store
interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (isDark: boolean) => void;
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false, 

  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  setDarkMode: (isDark) => set({ isDarkMode: isDark }),
}));

export default useDarkModeStore;