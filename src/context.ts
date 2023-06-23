import React from "react";
import { ScrollContextType } from "./type";

export const ScrollContext = React.createContext<ScrollContextType>({
  scrollPosition: 0,
});
