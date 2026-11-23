"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HomeHero() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <div ref={boxRef} className="box">
      I'm animated!
    </div>
  );
}
