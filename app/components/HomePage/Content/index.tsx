import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Posts } from "./Posts";
import { Projects } from "./Projects";

gsap.registerPlugin(ScrollTrigger);

export const Content = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState<number | false>(
    isBrowser && window.innerWidth
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 1024;

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.querySelector(".posts"), {
        scrollTrigger: {
          trigger: ref.current.querySelector(".posts"),
          endTrigger: ref.current.querySelector(".projects"),
          end: "bottom bottom",
          pin: isMobile ? false : true,
          pinSpacing: false,
        },
      });
    }
  }, []);

  return (
    <div className="relative w-screen min-h-screen">
      <div
        ref={ref}
        className="w-full h-full flex flex-col lg:flex-row px-4 2xl:px-40 py-40"
      >
        <Projects />
        <Posts />
      </div>
    </div>
  );
};
