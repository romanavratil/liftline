type RatesCostsProps = {
  hourlyRate: number
  fuelPricePerLiter: number
  consumptionPer100Km: number
  packingFee: number
  onHourlyRateChange: (value: number) => void
  onFuelPricePerLiterChange: (value: number) => void
  onConsumptionPer100KmChange: (value: number) => void
  onPackingFeeChange: (value: number) => void
  packingSelected: boolean
}

function RatesCosts({
  hourlyRate,
  fuelPricePerLiter,
  consumptionPer100Km,
  packingFee,
  onHourlyRateChange,
  onFuelPricePerLiterChange,
  onConsumptionPer100KmChange,
  onPackingFeeChange,
  packingSelected,
}: RatesCostsProps) {
  return (
    <section className="card panel">
      <h2>Rates and costs</h2>
      <div className="grid two">
        <label className="field">
          <span>Hourly rate</span>
          <input
            type="number"
            min="0"
            step="1"
            value={hourlyRate}
            onChange={(event) => onHourlyRateChange(Number(event.target.value))}
          />
        </label>
        <label className="field">
          <span>Fuel price per liter</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={fuelPricePerLiter}
            onChange={(event) =>
              onFuelPricePerLiterChange(Number(event.target.value))
            }
          />
        </label>
      </div>
      <div className="grid two toggle">
        <label className="field">
          <span>Consumption (L / 100 km)</span>
          <input
            type="number"
            min="0"
            step="0.1"
            value={consumptionPer100Km}
            onChange={(event) =>
              onConsumptionPer100KmChange(Number(event.target.value))
            }
          />
        </label>
        <label className="field">
          <span>Packing support fee</span>
          <input
            type="number"
            min="0"
            step="1"
            value={packingFee}
            onChange={(event) => onPackingFeeChange(Number(event.target.value))}
            disabled={!packingSelected}
          />
        </label>
      </div>
    </section>
  )
}

export default RatesCosts
