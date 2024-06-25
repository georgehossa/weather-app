export type CurrentDayForecast = {
  time: string;
  time_epoch: number;
  temp_c: number;
  is_day: number;
  condition: { icon: string; text: string; code: number };
};
