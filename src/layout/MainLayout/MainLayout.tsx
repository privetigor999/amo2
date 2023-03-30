import React from "react";
import { BgLayout } from "../BgLayout/BgLayout";

import style from "./layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className={style.mainLayout}>
      <BgLayout>{children}</BgLayout>
    </div>
  );
};
