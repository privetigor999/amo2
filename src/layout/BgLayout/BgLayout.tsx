import React from "react";

import styles from "./bgLayout.module.scss";

interface BackgroundProps {
  children: React.ReactNode;
}
export const BgLayout: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      {children}
      <div className={styles.purpleBall}></div>
      <div className={styles.redBall}></div>
      <div className={styles.smallRedBall}></div>
      <div className={styles.redLight}></div>
      <div className={styles.purpleLight}></div>
    </div>
  );
};
