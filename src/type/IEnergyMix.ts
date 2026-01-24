export interface IEnergyMix {
  today: IDailySummary;
  tomorrow: IDailySummary;
  day_after_tomorrow: IDailySummary;
}
export interface IDailySummary {
  clean_energy_percentage: number;
  avgEnergyMix: { [key: string]: number}
}