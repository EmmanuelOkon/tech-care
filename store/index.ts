import { Patient } from "@/interface";
import { create } from "zustand";

interface IsClicked {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

interface appStore {
  activeMenu: boolean;
  isClicked: IsClicked;
  setActiveMenu: (active: boolean) => void;
  isLoading: boolean;
  screenSize: number | undefined;
  setIsClicked: (clicked: Partial<IsClicked>) => void;
  setScreenSize: (size: number) => void;
  setIsLoading: () => void;
  patients: Patient[] | null;
  fetchPatients: () => void;
}

const useAppState = create<appStore>((set) => ({
  activeMenu: true,
  isClicked: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
  isLoading: true,
  screenSize: undefined,
  patients: null,
  setActiveMenu: (active) => set({ activeMenu: active }),
  setIsClicked: (clicked: Partial<IsClicked>) =>
    set(() => ({
      isClicked: {
        chat: false,
        cart: false,
        userProfile: false,
        notification: false,
        ...clicked,
      },
    })),
  setScreenSize: (size) => set({ screenSize: size }),
  setIsLoading: () => {
    set({ isLoading: true });
    setTimeout(() => {
      set({ isLoading: false });
    }, 3000);
  },
  fetchPatients: () => {
    set({ isLoading: true });
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/patients`, {
      headers: {
        Authorization: `Basic ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        set({ patients: data, isLoading: false });
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
        set({ isLoading: false });
      });
  },
}));

export default useAppState;
