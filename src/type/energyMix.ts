export interface EnergyMix {
  today: DailySummary;
  tomorrow: DailySummary;
  day_after_tomorrow: DailySummary;
}
export interface DailySummary {
  clean_energy_percentage: number;
  avgEnergyMix: { [key: string]: number}
}