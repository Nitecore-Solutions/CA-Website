"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

type Dir = "left" | "right" | "up" | "down";
const dirMap: Record<Dir, string> = {
  left: "translateX(-80px)",
  right: "translateX(80px)",
  up: "translateY(60px)",
  down: "translateY(-60px)",
};

export function Animate({ children, direction = "up", delay = 0, className = "", threshold }: {
  children: ReactNode; direction?: Dir; delay?: number; className?: string; threshold?: number;
}) {
  const { ref, inView } = useInView(threshold);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translate(0)" : dirMap[direction],
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export function AnimateStagger({ children, className = "", stagger = 0.12, direction = "up" }: {
  children: ReactNode[]; className?: string; stagger?: number; direction?: Dir;
}) {
  const { ref, inView } = useInView();
  // Filter out any null/undefined children if they exist
  const validChildren = Array.isArray(children) ? children.filter(Boolean) : [children];
  
  return (
    <div ref={ref} className={className}>
      {validChildren.map((child, i) => (
        <div key={i} style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translate(0)" : dirMap[direction],
          transition: `opacity 0.6s ease ${i * stagger}s, transform 0.6s ease ${i * stagger}s`,
        }}>
          {child}
        </div>
      ))}
    </div>
  );
}

export function AnimateScale({ children, delay = 0, className = "" }: {
  children: ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "scale(1)" : "scale(0.8)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export function CountUp({ target, suffix = "", duration = 2000 }: {
  target: number; suffix?: string; duration?: number;
}) {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}
