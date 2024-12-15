import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";



document.addEventListener("DOMContentLoaded", () => {
    animate(".title", { opacity: 1, rotate: 360 }, { duration: 1 });
});