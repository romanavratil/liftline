type PriceSummaryProps = {
  currency: Intl.NumberFormat
  hoursFloat: number
  hourlyRate: number
  distanceKm: number
  fuelPricePerLiter: number
  consumptionPer100Km: number
  laborCost: number
  fuelCost: number
  packingCost: number
  packingSelected: boolean
  onPackingSelectedChange: (value: boolean) => void
  total: number
}

function PriceSummary({
  currency,
  hoursFloat,
  hourlyRate,
  distanceKm,
  fuelPricePerLiter,
  consumptionPer100Km,
  laborCost,
  fuelCost,
  packingCost,
  packingSelected,
  onPackingSelectedChange,
  total,
}: PriceSummaryProps) {
  return (
    <aside className="card summary">
      <h2>Price breakdown</h2>
      <div className="summary-grid">
        <div>
          <p className="summary-label">Labor</p>
          <p className="summary-value">{currency.format(laborCost)}</p>
          <p className="summary-sub">
            {hoursFloat.toFixed(2)} hours at {currency.format(hourlyRate)}
          </p>
        </div>
        <div>
          <p className="summary-label">Fuel</p>
          <p className="summary-value">{currency.format(fuelCost)}</p>
          <p className="summary-sub">
            {distanceKm} km at {consumptionPer100Km} L / 100 km and{' '}
            {currency.format(fuelPricePerLiter)} per L
          </p>
        </div>
        <div>
          <p className="summary-label">Packing support</p>
          <p className="summary-value">{currency.format(packingCost)}</p>
          <label className="summary-toggle">
            <input
              type="checkbox"
              checked={packingSelected}
              onChange={(event) => onPackingSelectedChange(event.target.checked)}
            />
            <span>{packingSelected ? 'Included' : 'Not selected'}</span>
          </label>
        </div>
      </div>
      <div className="total">
        <p>Total estimate</p>
        <h3>{currency.format(total)}</h3>
      </div>
      <button className="primary">Share quote</button>
    </aside>
  )
}

export default PriceSummary
