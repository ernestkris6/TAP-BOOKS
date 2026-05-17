import { useEffect, useRef, useState } from "react";

export default function Counter({
  end,
  label,
  duration = 800,
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const ref = useRef(null);

  // 👀 Detect when counter enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ✅ Trigger only once
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          // ✅ Stop observing after first trigger
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // 🔢 Counter animation
  useEffect(() => {
    if (!hasStarted) return;

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
  }, [hasStarted, end, duration]);

  return (
    <div
      ref={ref}
      className="flex-1 text-center"
    >
      <p className="text-5xl font-serif font-semibold text-stone-700 leading-tight scale-y-125">
        {String(count).padStart(2, "0")}
      </p>

      <p className="text-gray-600 mt-1">
        {label}
      </p>
    </div>
  );
}