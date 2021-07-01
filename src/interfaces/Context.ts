import {  ReactNode } from "react";

export interface HomeContextProviderProps {
  children: ReactNode;
}

export interface HomeContextData {
  getData:() => void;
}