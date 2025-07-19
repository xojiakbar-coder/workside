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
}
