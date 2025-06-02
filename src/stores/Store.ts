import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  iframeRef: HTMLIFrameElement | null;
  setIframeRef: (ref: HTMLIFrameElement) => void;
}

export const useStore = create<State>()(
  devtools(
    (set) => ({
      iframeRef: null,
      setIframeRef: (ref: HTMLIFrameElement) =>
        set({ iframeRef: ref }, false, "setIframeRef"),
    }),
    { name: "Store", serialize: true }
  )
);
