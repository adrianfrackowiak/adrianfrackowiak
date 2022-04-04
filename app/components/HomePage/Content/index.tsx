import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Posts } from "./Posts";
import { Projects } from "./Projects";

gsap.registerPlugin(ScrollTrigger);

export const Content = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.querySelector(".posts"), {
        scrollTrigger: {
          trigger: ref.current.querySelector(".posts"),
          endTrigger: ref.current.querySelector(".projects"),
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        },
      });
    }
  }, []);

  return (
    <div className="relative w-screen min-h-screen">
      <div ref={ref} className="w-full h-full flex px-40 py-40">
        <Projects />
        <Posts />
      </div>
    </div>
  );
};
