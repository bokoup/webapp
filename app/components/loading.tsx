import { useTransition } from "@remix-run/react";

export default function Loading() {
  const transition = useTransition();
  const active = transition.state === "submitting";

  return (
    <div
      role="progressbar"
      aria-valuetext={active ? "Loading" : undefined}
      aria-hidden={!active}
      className={`fixed z-50 flex h-full w-full items-center justify-center bg-slate-300/25 p-4 transition-all duration-500 ease-out cursor-wait${
        active ? "" : " hidden"
      }`}
    >
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#26e9c8" />
            <stop offset="100%" stopColor="#2ea8fe" />
          </linearGradient>
        </defs>
        <circle
          cx="25"
          cy="25"
          r="22"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
}
