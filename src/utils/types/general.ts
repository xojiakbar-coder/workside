import { ReactNode } from "react";

type ChildrenType = ReactNode;

export interface HomeContentType {
  id: number;
  title: string;
  subtitle: string;
}

export interface SubscribeCardItemType {
  id: number;
  name: string;
  price: number;
}

export type OnlyChildren = {
  children: ReactNode;
};

export default ChildrenType;
