
// "use client";
// import { useEffect } from "react";

// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5,
// }: {
//   words: string;
//   className?: string;
//   filter?: boolean;
//   duration?: number;
// }) => {
//   const [scope, animate] = useAnimate();
//   let wordsArray = words.split(" ");

//   useEffect(() => {
//     animate(
//       "span",
//       {
//         opacity: 1,
//         filter: filter ? "blur(0px)" : "none",
//       },
//       {
//         duration: duration ? duration : 1,
//         delay: stagger(0.2),
//       }
//     );
//   }, [scope.current, duration, filter, animate]); // Cleaned up dependency array

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope}>
//         {wordsArray.map((word, idx) => {
//           return (
//             <motion.span
//               key={word + idx}
//               // FIX: This span inherits the text color from the parent div (which uses the external className) 
//               // and only controls opacity/blur/transition.
//               className="opacity-0"
//               style={{
//                 filter: filter ? "blur(10px)" : "none",
//               }}
//             >
//               {word}{" "}
//             </motion.span>
//           );
//         })}
//       </motion.div>
//     );
//   };

//   return (
//     // FIX: Pass the external className to the final container div
//     <div className={cn("font-normal", className)}>
//       <div className="mt-4">
//         {/* The hardcoded styles are removed here. cn(className) handles styling. */}
//         <div className={cn(className, "leading-snug tracking-wide")}>
//           {renderWords()}
//         </div>
//       </div>
//     </div>
//   );
// };


"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.2),
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration, filter, animate]); // Removed scope.current

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-normal", className)}>
      <div className="mt-4">
        <div className={cn(className, "leading-snug tracking-wide")}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
