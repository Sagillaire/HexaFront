import { ReactNode } from "react";
import { Navbar } from "../organisms/Navbar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
