export default function PhotoPair() {
  return (
    <div className="two">
      <div className="card ph photo">
        <span className="no">03</span>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
        <img src="/images/team-picture.webp" alt="The 506 Pandara team celebrating at a competition" />
      </div>
      <div className="card ph">
        <span className="no">04</span>Outreach photo
      </div>
    </div>
  );
}
