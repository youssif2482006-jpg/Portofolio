type ApertureProps = {
  size?: number;
  className?: string;
  spin?: boolean;
};

const TICKS = Array.from({ length: 8 }, (_, i) => i * 45);

export function Aperture({ size = 28, className = "", spin = false }: ApertureProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${spin ? "animate-aperture-spin" : ""} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aperture-gradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="var(--color-accent)" />
          <stop offset="100%" stopColor="var(--color-accent-deep)" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="36"
        stroke="url(#aperture-gradient)"
        strokeWidth="2.5"
        opacity="0.9"
      />
      <circle
        cx="50"
        cy="50"
        r="8"
        fill="url(#aperture-gradient)"
      />
      {TICKS.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="8"
          x2="50"
          y2="18"
          stroke="url(#aperture-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
}
