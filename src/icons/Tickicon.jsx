import React from "react";

function Tickicon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="14" fill="url(#paint0_linear_0_1424)" />
      <path
        d="M20.6667 9L11.5 18.1667L7.33334 14"
        stroke="#FFFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_1424"
          x1="0"
          y1="14"
          x2="28"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#031C46" />
          <stop offset="1" stopColor="#06409E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Tickicon;
