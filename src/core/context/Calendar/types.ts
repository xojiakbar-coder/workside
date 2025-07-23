export type IProps = {
  year: number;
  month: number;
  view: 'month' | 'year' | 'days';
  setYear: (newYear: number) => void;
  setMonth: (newMonth: number) => void;
  setView: (newView: 'month' | 'year' | 'days') => void;
};
