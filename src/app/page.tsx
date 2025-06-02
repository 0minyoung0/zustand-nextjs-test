"use client";

import { useEffect, useRef } from "react";
import { useStore } from "@/stores/Store";

export default function Home() {
  const ref = useRef<HTMLIFrameElement>(null);
  const setIframeRef = useStore((state) => state.setIframeRef);

  useEffect(() => {
    if (ref.current) {
      setIframeRef(ref.current);
    }
  }, [ref, setIframeRef]);

  return (
    <div>
      <iframe
        ref={ref}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0gf1HZP0CSo?si=f-o-HQ1g6eY1Jm7G"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
