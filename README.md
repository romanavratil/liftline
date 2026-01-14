# Moving Price Calculator

A clean, modern price calculator for moving services. Enter your distance, speed, and rates to get instant labor, fuel, and optional packing support estimates.

## Features

- Drive time estimate based on distance and average speed
- Labor cost from hourly rate and drive time
- Fuel cost from price per liter and car consumption
- Optional packing support fee toggle
- Responsive layout with a clear price breakdown

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Calculation logic

- Time (hours) = distanceKm / averageSpeedKmH
- Labor = time * hourlyRate
- Fuel = distanceKm * (consumptionPer100Km / 100) * fuelPricePerLiter
- Total = labor + fuel + optional packing fee

## Tech stack

- React + TypeScript
- Vite

## Project structure

- `src/App.tsx`: state and calculations
- `src/components/`: UI components
- `src/App.css`: component styling
- `src/index.css`: global styles and theme
