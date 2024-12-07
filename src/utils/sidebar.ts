import { ReactNode } from "react";
import GenericElement from "@/view";

export interface SidebarItemType {
  id: number;
  name: string;
  title: string;
  element: ReactNode;
}

const sidebar_items: SidebarItemType[] = [
  { id: 1, title: "Dashboard", name: "/dashboard", element: GenericElement },
  { id: 2, title: "Profile", name: "/profile", element: GenericElement },
  { id: 3, title: "Settings", name: "/settings", element: GenericElement },
  {
    id: 4,
    title: "Notifications",
    name: "/notifications",
    element: GenericElement,
  },
  { id: 5, title: "Messages", name: "/messages", element: GenericElement },
  { id: 6, title: "Analytics", name: "/analytics", element: GenericElement },
  { id: 7, title: "Users", name: "/users", element: GenericElement },
  { id: 8, title: "Roles", name: "/roles", element: GenericElement },
  { id: 9, title: "Reports", name: "/reports", element: GenericElement },
  // { id: 10, title: "Tasks", name: "/tasks", element: GenericElement },
  // { id: 11, title: "Calendar", name: "/calendar", element: GenericElement },
  // { id: 12, title: "Projects", name: "/projects", element: GenericElement },
  // { id: 13, title: "Support", name: "/support", element: GenericElement },
  // { id: 14, title: "Feedback", name: "/feedback", element: GenericElement },
  // {
  //   id: 15,
  //   title: "Integrations",
  //   name: "/integrations",
  //   element: GenericElement,
  // },
  // { id: 16, title: "Themes", name: "/themes", element: GenericElement },
  // { id: 17, title: "Activity", name: "/activity", element: GenericElement },
  // { id: 18, title: "Media", name: "/media", element: GenericElement },
  // {
  //   id: 19,
  //   title: "Help Center",
  //   name: "/help-center",
  //   element: GenericElement,
  // },
  // { id: 20, title: "Billing", name: "/billing", element: GenericElement },
  // {
  //   id: 21,
  //   title: "Subscription",
  //   name: "/subscription",
  //   element: GenericElement,
  // },
  // { id: 22, title: "FAQs", name: "/faqs", element: GenericElement },
  // { id: 23, title: "Security", name: "/security", element: GenericElement },
  // { id: 24, title: "Legal", name: "/legal", element: GenericElement },
  // { id: 25, title: "Logout", name: "/logout", element: GenericElement },
];

export default sidebar_items;
