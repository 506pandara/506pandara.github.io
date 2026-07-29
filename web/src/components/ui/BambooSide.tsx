import Image from "next/image";

export default function BambooSide() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 z-0 hidden w-full justify-between opacity-90 2xl:flex"
    >
      <div className="bamboo-pattern relative h-full w-36">
        <div className="absolute left-3 top-[18%] h-20 w-20 -rotate-6">
          <Image src="/images/pandara-logo.webp" alt="" fill sizes="80px" className="object-contain" />
        </div>
        <div className="absolute left-2 top-[64%] h-16 w-16 rotate-3">
          <Image src="/images/pandara-logo.webp" alt="" fill sizes="64px" className="object-contain" />
        </div>
      </div>
      <div className="bamboo-pattern relative h-full w-36 scale-x-[-1]">
        <div className="absolute right-3 top-[34%] h-20 w-20 rotate-6 scale-x-[-1]">
          <Image src="/images/pandara-logo.webp" alt="" fill sizes="80px" className="object-contain" />
        </div>
        <div className="absolute right-2 top-[80%] h-16 w-16 -rotate-3 scale-x-[-1]">
          <Image src="/images/pandara-logo.webp" alt="" fill sizes="64px" className="object-contain" />
        </div>
      </div>
    </div>
  );
}
