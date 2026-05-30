import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1.5rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-100% - var(--gap))); }
        }
        @keyframes marquee-vertical {
          0% { transform: translateY(0%); }
          100% { transform: translateY(calc(-100% - var(--gap))); }
        }
        .animate-marquee-custom {
          animation: marquee var(--duration) linear infinite;
        }
        .animate-marquee-vertical-custom {
          animation: marquee-vertical var(--duration) linear infinite;
        }
        .direction-reverse-custom {
          animation-direction: reverse;
        }
        .play-paused-custom:hover .animate-marquee-custom,
        .play-paused-custom:hover .animate-marquee-vertical-custom {
          animation-play-state: paused;
        }
      `}</style>

      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={`flex shrink-0 justify-around [gap:var(--gap)] ${
            vertical
              ? "flex-col animate-marquee-vertical-custom"
              : "flex-row animate-marquee-custom"
          } ${reverse ? "direction-reverse-custom" : ""} ${
            pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
          }`}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
