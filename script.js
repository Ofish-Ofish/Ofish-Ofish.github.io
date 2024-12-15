import { animate, scroll, inView, } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";




document.querySelectorAll(".fade-animation").forEach((item) => {
    scroll(animate(item, { opacity: [0, 1, 1, 0] }, { ease: "linear" }), {
      target: item,
      offset: ["start end", "end end", "start start", "end start"],
    });
  });
