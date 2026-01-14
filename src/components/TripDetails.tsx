type TripDetailsProps = {
  distanceKm: number
  avgSpeed: number
  timeLabel: string
  onDistanceChange: (value: number) => void
  onSpeedChange: (value: number) => void
}

function TripDetails({
  distanceKm,
  avgSpeed,
  timeLabel,
  onDistanceChange,
  onSpeedChange,
}: TripDetailsProps) {
  return (
    <section className="card panel">
      <h2>Trip details</h2>
      <div className="grid two">
        <label className="field">
          <span>Distance in km</span>
          <input
            type="number"
            min="0"
            step="1"
            value={distanceKm}
            onChange={(event) => onDistanceChange(Number(event.target.value))}
          />
        </label>
        <label className="field">
          <span>Average speed (km/h)</span>
          <input
            type="number"
            min="10"
            step="1"
            value={avgSpeed}
            onChange={(event) => onSpeedChange(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="metric">
        <div>
          <p className="metric-label">Estimated drive time</p>
          <p className="metric-value">{timeLabel}</p>
        </div>
        <p className="metric-note">Based on your average speed and distance.</p>
      </div>
    </section>
  )
}

export default TripDetails
