"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Context = {
  cat: string;
  setCat: Dispatch<SetStateAction<string>>;
};

const ShopContext = createContext<Context>({} as Context);

export const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const [cat, setCat] = useState("General");

  return (
    <ShopContext.Provider value={{ cat, setCat }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
