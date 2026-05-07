interface LoaderProps {
  progress: number;
}

export default function Loader({ progress }: LoaderProps) {
  return (
    <div id="loader">
      <div className="loader-count">{progress}</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" id="loader-bar" />
      </div>
      <div className="loader-text">Loading Portfolio</div>
    </div>
  );
}
