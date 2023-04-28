import React from "react";
import { ReactComponent as HeaderLogo1Svg } from "./../../assets/icons/header_logo_1.svg";
import { ReactComponent as HeaderLogo2Svg } from "./../../assets/icons/header_logo_2.svg";
import { ReactComponent as TelegramSvg } from "./../../assets/icons/telegram.svg";
import { ReactComponent as ViberSvg } from "./../../assets/icons/viber.svg";
import { ReactComponent as WhatsappSvg } from "./../../assets/icons/whatsapp.svg";

import style from "./header.module.scss";

export const Header: React.FC = () => {
  const links = [
    {
      title: "Услуги",
      link: "#",
    },
    {
      title: "Виджеты",
      link: "#",
    },
    {
      title: "Интеграции",
      link: "#",
    },
    {
      title: "Кейсы",
      link: "#",
    },
  ];
  return (
    <header className={style.header}>
      <div className={style.left}>
        <div className={style.logo}>
          <a href="/" className={style.logoImg}>
            <HeaderLogo1Svg />
            <span className={style.rightLogo}>
              <HeaderLogo2Svg />
            </span>
          </a>
          <div className={style.logoText}>
            крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё&nbsp;8&nbsp;странах
          </div>
        </div>
        <menu>
          <ul className={style.menu}>
            {links.map((link, i) => (
              <li key={i} className={style.item}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
            <li className={`${style.item} ${style.desktop}`}>
              <a href="#">Сертификаты</a>
            </li>
          </ul>
        </menu>
      </div>
      <div className={style.contacts}>
        <a href="tel:+75555555555">+7&nbsp;555&nbsp;555-55-55</a>
        <a href="#" className={style.item}>
          <TelegramSvg />
        </a>
        <a href="#" className={style.item}>
          <ViberSvg />
        </a>
        <a href="#" className={style.item}>
          <WhatsappSvg />
        </a>
      </div>
    </header>
  );
};
