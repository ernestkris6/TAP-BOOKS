import { useEffect, useRef, useState } from "react";

export default function Counter({ end, label, duration = 800 }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  // 👀 Detect when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 } // starts when 40% visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // 🔢 Start counting only when visible
  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, 10);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <div ref={ref} className="flex-1 text-center">
      <p className="text-4xl font-serif font-bold text-stone-700">
        {String(count).padStart(2, "0")}
      </p>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}





// import { useEffect, useState } from "react";

// export default function Counter({ end, label, duration = 800 }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;

//     const increment = end / (duration / 10); // speed control

//     const timer = setInterval(() => {
//       start += increment;

//       if (start >= end) {
//         start = end;
//         clearInterval(timer);
//       }

//       setCount(Math.floor(start));
//     }, 10);

//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return (
//     <div className="flex-1 text-center">
//       <p className="text-4xl font-serif font-bold text-amber-700">
//         {String(count).padStart(2, "0")}
//       </p>
//       <p className="text-gray-600 mt-1">{label}</p>
//     </div>
//   );
// }