// import { useEffect, useRef } from "react";

// export const ScreenFitText = () => {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     resizeText();

//     window.addEventListener("resize", resizeText);

//     return () => {
//       window.removeEventListener("resize", resizeText);
//     };
//   }, []);

//   const resizeText = () => {
//     const container = containerRef.current;
//     const text = textRef.current;

//     if (!container || !text) {
//       return;
//     }

//     const containerWidth = container.offsetWidth;
//     let min = 1;
//     let max = 2500;

//     while (min <= max) {
//       const mid = Math.floor((min + max) / 2);
//       text.style.fontSize = mid + "px";

//       if (text.offsetWidth <= containerWidth) {
//         min = mid + 1;
//       } else {
//         max = mid - 1;
//       }
//     }

//     text.style.fontSize = max + "px";
//   };

//   return (
//     <div
//       className="flex w-full items-center overflow-hidden bg-slate-950"
//       ref={containerRef}>
//       <span
//         className="absolute top-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
//         ref={textRef}>
//         The face of the gods
//       </span>
//     </div>
//   );
// };

import { useEffect, useRef } from "react";

import styles from "./hover.module.css";

export const ScreenFitText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="leading__text flex absolute top-[4.5%] left-0 h-[200px] w-full items-center overflow-hidden z-10 "
      ref={containerRef}>
      <span
        className="absolute  top-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-[#2a2a2a1a]"
        ref={textRef}>
        {"The face of the gods".split("").map((child, idx) => (
          <span className={styles.hoverText} key={idx}>
            {child}
          </span>
        ))}
      </span>
    </div>
  );
};
