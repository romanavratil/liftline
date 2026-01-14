import { useMemo, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import TripDetails from './components/TripDetails'
import RatesCosts from './components/RatesCosts'
import PriceSummary from './components/PriceSummary'

function App() {
  const [distanceKm, setDistanceKm] = useState(18)
  const [avgSpeed, setAvgSpeed] = useState(45)
  const [hourlyRate, setHourlyRate] = useState(60)
  const [fuelPricePerLiter, setFuelPricePerLiter] = useState(1.6)
  const [consumptionPer100Km, setConsumptionPer100Km] = useState(9.5)
  const [packingSelected, setPackingSelected] = useState(true)
  const [packingFee, setPackingFee] = useState(45)

  const { hoursFloat, timeLabel } = useMemo(() => {
    const safeSpeed = avgSpeed > 0 ? avgSpeed : 0
    const safeDistance = distanceKm > 0 ? distanceKm : 0
    const hours = safeSpeed === 0 ? 0 : safeDistance / safeSpeed
    const totalMinutes = Math.round(hours * 60)
    const labelHours = Math.floor(totalMinutes / 60)
    const labelMinutes = totalMinutes % 60
    const time = `${labelHours}h ${labelMinutes}m`
    return { hoursFloat: hours, timeLabel: time }
  }, [avgSpeed, distanceKm])

  const currency = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    })
  }, [])

  const laborCost = hoursFloat * (hourlyRate > 0 ? hourlyRate : 0)
  const safeDistance = distanceKm > 0 ? distanceKm : 0
  const safeFuelPrice = fuelPricePerLiter > 0 ? fuelPricePerLiter : 0
  const safeConsumption = consumptionPer100Km > 0 ? consumptionPer100Km : 0
  const fuelCost = safeDistance * (safeConsumption / 100) * safeFuelPrice
  const packingCost = packingSelected ? (packingFee > 0 ? packingFee : 0) : 0
  const total = laborCost + fuelCost + packingCost

  return (
    <div className="page">
      <Hero />
      <main className="content">
        <TripDetails
          distanceKm={distanceKm}
          avgSpeed={avgSpeed}
          timeLabel={timeLabel}
          onDistanceChange={setDistanceKm}
          onSpeedChange={setAvgSpeed}
        />
        <RatesCosts
          hourlyRate={hourlyRate}
          fuelPricePerLiter={fuelPricePerLiter}
          consumptionPer100Km={consumptionPer100Km}
          packingFee={packingFee}
          onHourlyRateChange={setHourlyRate}
          onFuelPricePerLiterChange={setFuelPricePerLiter}
          onConsumptionPer100KmChange={setConsumptionPer100Km}
          onPackingFeeChange={setPackingFee}
          packingSelected={packingSelected}
        />
        <PriceSummary
          currency={currency}
          hoursFloat={hoursFloat}
          hourlyRate={hourlyRate}
          distanceKm={distanceKm}
          fuelPricePerLiter={fuelPricePerLiter}
          consumptionPer100Km={consumptionPer100Km}
          laborCost={laborCost}
          fuelCost={fuelCost}
          packingCost={packingCost}
          packingSelected={packingSelected}
          onPackingSelectedChange={setPackingSelected}
          total={total}
        />
      </main>
    </div>
  )
}

export default App
