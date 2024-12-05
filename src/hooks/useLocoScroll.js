// src/hooks/useLocoScroll.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocomotiveScroll } from "react-locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const useLocoScroll = (start) => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!scroll || !start) return;

    const scrollEl = scroll.el;

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    const lsUpdate = () => {
      if (scroll) {
        scroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
    };
  }, [scroll, start]);
};

export default useLocoScroll;
