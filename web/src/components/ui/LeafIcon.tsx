import type { SVGProps } from "react";

export default function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 20c8-1 14-7 15-16-8 1-14 7-15 16z"
        fill="currentColor"
      />
    </svg>
  );
}
