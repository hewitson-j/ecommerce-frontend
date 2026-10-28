import type { ThemeType } from "../Types/GlobalTypes";

export interface GlobalContextInterface {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
