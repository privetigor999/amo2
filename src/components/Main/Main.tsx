import React from "react";
import { Button } from "../../ui/Button/Button";

import style from "./main.module.scss";

export const Main: React.FC = () => {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1>
          Зарабатывайте
          <br />
          больше
          <strong>с&nbsp;WELBEX</strong>
        </h1>
        <h2>
          Развиваем и&nbsp;контролируем
          <br />
          продажи за&nbsp;вас
        </h2>
      </header>
      <div className={style.bullets}>
        <h3>
          <span className={style.normal}>Вместе с</span>&nbsp;бесплатной
          <br />
          консультацией <span className={style.normal}>мы&nbsp;дарим:</span>
        </h3>
        <ul className={style.bulletsItems}>
          <li>
            <h4 className={style.desktop}>Виджеты</h4>
            <h4 className={style.mobile}>30 Виджетов</h4>
            <div className={style.content}>
              30&nbsp;готовых
              <br />
              решений
            </div>
          </li>
          <li>
            <h4 className={style.desktop}>Dashboard</h4>
            <h4 className={style.mobile}>Dashboard</h4>
            <div className={style.content}>
              с&nbsp;показателями
              <br />
              вашего бизнеса
            </div>
          </li>
          <li className={style.order1}>
            <h4 className={style.desktop}>Skype Аудит</h4>
            <h4 className={style.mobile}>Skype Аудит</h4>
            <div className={style.content}>
              отдела продаж
              <br />
              и&nbsp;CRM системы
            </div>
          </li>
          <li>
            <h4 className={style.desktop}>35&nbsp;дней</h4>
            <h4 className={style.mobile}>Месяц аmoCRM</h4>
            <div className={style.content}>
              использования
              <br />
              CRM
            </div>
          </li>
        </ul>
        <Button onClick={() => {}}>Получить консультацию</Button>
      </div>
    </main>
  );
};
