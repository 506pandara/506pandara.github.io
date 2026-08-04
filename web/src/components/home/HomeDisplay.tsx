export default function HomeDisplay() {
  return (
    <>
      <svg className="fx" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="rip1" x="-6%" y="0%" width="112%" height="88%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.055" numOctaves={2} seed={4} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={6.5} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="rip2" x="-6%" y="0%" width="112%" height="88%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0084 0.062" numOctaves={2} seed={17} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={7.5} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="rip3" x="-6%" y="0%" width="112%" height="88%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.0098 0.049" numOctaves={2} seed={33} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale={5.5} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="disp">
        <div className="wordwrap">
          <h1>PANDARA</h1>
          <div className="reflect" aria-hidden="true">
            <span className="r1">PANDARA</span>
            <span className="r2">PANDARA</span>
            <span className="r3">PANDARA</span>
          </div>
        </div>
        <div className="scr">506</div>
        <div className="kanji">
          五〇六
          <small>506</small>
        </div>
      </div>
    </>
  );
}
