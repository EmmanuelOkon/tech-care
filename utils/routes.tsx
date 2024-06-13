import { Icons } from "@/components/icons";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";

import { URLS } from "./urls";

export interface Route {
  name: string;
  icon?: React.ReactNode;
  href: string;
}

export const routes: Route[] = [
  {
    name: "overview",
    icon: <Icons.Home />,
    href: URLS.OVERVIEW,
  },
  {
    name: "patients",
    icon: <Icons.People />,
    href: URLS.PATIENTS,
  },
  {
    name: "schedule",
    icon: <Icons.Calendar />,
    href: URLS.SCHEDULE,
  },
  {
    name: "message",
    icon: <Icons.Chat />,
    href: URLS.MESSAGE,
  },
  {
    name: "transactions",
    icon: <Icons.CreditCard />,
    href: URLS.TRANSACTION,
  },
];
