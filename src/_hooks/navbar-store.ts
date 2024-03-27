import { create } from 'zustand';

type NavbarStore = {
  isMenuOpen: boolean;
  isExploreOpen: boolean;
  isExploreHover: boolean;
  handleMenuClick: () => void;
  handleExploreClick: () => void;
  handleExploreHover: () => void;
  handleExploreLeave: () => void;
};

export const useNavbarStore = create<NavbarStore>((set) => ({
  isMenuOpen: false,
  isExploreOpen: false,
  isExploreHover: false,
  handleMenuClick: () =>
    set((state) => ({
      isMenuOpen: !state.isMenuOpen,
    })),

  handleExploreClick: () =>
    set((state) => ({
      isExploreOpen: !state.isExploreOpen,
    })),

  handleExploreHover: () =>
    set((state) => ({
      isExploreHover: !state.isExploreHover,
    })),

  handleExploreLeave: () =>
    set((state) => ({
      isExploreHover: !state.isExploreHover,
    })),
}));
