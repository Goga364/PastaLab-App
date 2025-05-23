import * as React from "react";
const GEOFlag = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    aria-hidden="true"
    className="iconify iconify--emojione"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="#f9f9f9"
      d="M38 2.6H26C14.3 5 5 14.2 2.6 26v12C5 49.8 14.3 59 26 61.4h12C49.8 59 59 49.7 61.4 38V26C59 14.2 49.7 5 38 2.6z"
    />
    <g fill="#ed4c5c">
      <path d="M38 26V2.6c-1.9-.4-3.9-.6-6-.6s-4.1.2-6 .6V26H2.6c-.4 1.9-.6 3.9-.6 6s.2 4.1.6 6H26v23.4c1.9.4 3.9.6 6 .6s4.1-.2 6-.6V38h23.4c.4-1.9.6-3.9.6-6s-.2-4.1-.6-6H38" />
      <path d="M18 20h-4l1-6-1-6h4l-1 6z" />
      <path d="M10 16v-4l6 1 6-1v4l-6-1zM50 20h-4l1-6-1-6h4l-1 6z" />
      <path d="M42 16v-4l6 1 6-1v4l-6-1zM18 56h-4s1-4.5 1-6-1-6-1-6h4s-1 4.5-1 6 1 6 1 6" />
      <path d="M10 52v-4l6 1 6-1v4l-6-1zM50 56h-4l1-6-1-6h4l-1 6z" />
      <path d="M42 52v-4l6 1 6-1v4l-6-1z" />
    </g>
  </svg>
);
export default GEOFlag;
