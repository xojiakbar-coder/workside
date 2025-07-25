export declare namespace IEntity {
  export interface DaysHookProps {
    month: number;
    year: number;
  }

  export interface CheckMonthHookProps {
    month: number;
    year: number;
  }

  export type CheckMonthReturnType = 'past' | 'current' | 'future';

  export type ThisMonthProps = {
    days: {
      day: number;
      today: boolean;
      future: boolean;
    }[];
    checkMonth: CheckMonthReturnType;
  };
}
