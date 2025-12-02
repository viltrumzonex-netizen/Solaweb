import './AuroraCSS.css';

export default function AuroraCSS({
  colorStops = ['#FF4000', '#FA0000', '#FF4000']
}) {
  return (
    <div className="aurora-css-container">
      <div className="aurora-css-wave aurora-css-wave-1"></div>
      <div className="aurora-css-wave aurora-css-wave-2"></div>
      <div className="aurora-css-wave aurora-css-wave-3"></div>
    </div>
  );
}
