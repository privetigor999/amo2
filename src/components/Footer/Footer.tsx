import React from "react";

import style from "./footer.module.scss";
import { ReactComponent as TelegramSvg } from "./../../assets/icons/telegram.svg";
import { ReactComponent as ViberSvg } from "./../../assets/icons/viber.svg";
import { ReactComponent as WhatsappSvg } from "./../../assets/icons/whatsapp.svg";

export const Footer: React.FC = () => {
  const abouts = [
    {
      title: "Партнёрская программа",
    },
    {
      title: "Вакансии",
    },
  ];

  const menu = [
    {
      title: "Расчёт стоимости",
    },
    {
      title: "Услуги",
    },
    {
      title: "Виджеты",
    },
    {
      title: "Интеграции",
    },
    {
      title: "Наши клиенты",
    },
  ];
  return (
    <footer className={style.footer}>
      <div>
        <h4>О компании</h4>
        <ul>
          {abouts.map((about, i) => (
            <li key={i}>
              <a href="#">{about.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Меню</h4>
        <div className={style.menu}>
          <ul>
            {menu.map((item, i) => (
              <li key={i}>
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
          <ul className={style.flex}>
            <li>
              <a href="#">Кейсы</a>
            </li>
            <li className={style.desktop}>
              <a href="#">Благодарственные письма</a>
            </li>
            <li className={`${style.mobile} ${style.order1}`}>
              <a href="#">Благодарность клиентов</a>
            </li>
            <li>
              <a href="#">Сертификаты</a>
            </li>
            <li>
              <a href="#">Блог на Youtube</a>
            </li>
            <li>
              <a href="#">Вопрос / Ответ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.contacts}>
        <h4>Контакты</h4>
        <ul>
          <li>
            <a href="tel:+75555555555">+7&nbsp;555&nbsp;555-55-55</a>
          </li>
          <li>
            <a href="#" className={style.logo}>
              <TelegramSvg />
            </a>
            <a href="#" className={style.logo}>
              <ViberSvg />
            </a>
            <a href="#" className={style.logo}>
              <WhatsappSvg />
            </a>
          </li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
        <div className={style.copyright}>
          ©WELBEX 2022. Все права защищены.
          <div className={style.privacy}>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
