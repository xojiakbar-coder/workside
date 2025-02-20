import { ReactNode } from "react";

type ChildrenType = ReactNode;

export interface HomeContentType {
  id: number;
  title: string;
  subtitle: string;
}

interface SubscribeCardContentItem {
  id: number;
  text: string;
}

export interface SubscribeCardItemType {
  id: number;
  name: string;
  price: number;
  features: SubscribeCardContentItem[];
}

export type OnlyChildren = {
  children: ReactNode;
};

export default ChildrenType;
