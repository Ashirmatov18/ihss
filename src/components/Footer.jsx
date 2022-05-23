import React from "react";
import styles from "../styles/footer.module.css";
import Link from "next/link";
import {
  Inst,
  Whats,
  You,
  Message,
  Phone,
  Location,
} from "./Footer/FooterIcons";
import MainLayout from "./ui/MainLayout";

export default function Footer() {
  return (
    <MainLayout>
      <div className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <div className={styles.first_column}>
              <div className={styles.column}>
                <div className={styles.title}>
                  <div className={styles.f_logo} />
                </div>
                <div className={styles.link}>
                  Жилищный Кооператив <br /> Ихсан - это добровольное <br />{" "}
                  объединение людей, <br />
                  с целью совместного <br /> удовлетворения в <br /> недвижимом
                  имуществе.
                </div>
                <div className={styles.icons_link}>
                  <a
                    href="https://www.instagram.com/ihsangroup.kg/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <Inst />
                  </a>
                  <a
                    href="https://wa.me/+996700005151"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <Whats />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCnfdcLSlbHlORf6fEx6RBAA"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <You />
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.column}>
              <div className={styles.title}>О Кооперативе</div>
              <Link href={"/team"} passHref>
                <a>
                  <div className={styles.link}>О нас</div>
                </a>
              </Link>
              <Link href={"/review"} passHref>
                <a>
                  <div className={styles.link}>Отзывы</div>
                </a>
              </Link>
              <Link href={"/news"} passHref>
                <a>
                  <div className={styles.link}>Новости</div>
                </a>
              </Link>
              <Link href="/privacy-policy" passHref>
                <a className={styles.link}>Политика конфиденциальности</a>
              </Link>

              <Link href={"/programs"} passHref>
                <a>
                  <div className={styles.link}>Программы</div>
                </a>
              </Link>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>Контакты</div>
              <div className={styles.link}>
                <div>
                  <Message />
                </div>
                <div>
                  <span style={{ marginLeft: "10px" }}>
                    ihsangroup@gmail.io
                  </span>
                </div>
              </div>
              <div className={styles.link}>
                <Phone />
                <a href="tel:+996700005151">
                  <span style={{ marginLeft: "10px" }}>+996 700 00 51 51</span>
                </a>
              </div>
              <div className={styles.link}>
                <Phone />
                <a href="tel:+996700005151">
                  <span style={{ marginLeft: "10px" }}>+996 700 00 51 51</span>
                </a>
              </div>
              <div className={styles.link}>
                <Phone />
                <a href="tel:+996700005151">
                  <span style={{ marginLeft: "10px" }}>+996 700 00 51 51</span>
                </a>
              </div>
              <div className={styles.link}>
                <Location />
                <span style={{ marginLeft: "10px" }}>
                  г. Бишкек, Раззакова / Боконбаева 113, <br /> БЦ “Альтаир”,
                  3-этаж.
                </span>
              </div>
              <div className={styles.link}>
                <Location />
                <span style={{ marginLeft: "10px" }}>
                  г. Бишкек, рынок «Орто-Сай», Суеркулова 5/1
                </span>
              </div>
              <div className={styles.link}>
                <Location />
                <span style={{ marginLeft: "10px" }}>
                  г. Бишкек, Чуй/ Кулиева 20, ТЦ “Жан-Сали”, 5 этаж
                </span>
              </div>
            </div>
          </div>
        </div>
        <div />
        <div className={styles.ihsangroup}>
          <span>Ihsangroup © 2022 все права защищены</span>
        </div>
      </div>
    </MainLayout>
  );
}
