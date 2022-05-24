import React, { useState } from "react";
import styles from "../styles/opportunity.module.css";
import Link from "next/link";

export default function Opportunity() {
  const [modal] = useState(false);

  return (
    <div className={styles.main_info}>
      <div className={styles.info_stats}>
        <span className={styles.stat}>
          <strong className={styles.strong_name}>709</strong> <br /> <br />
          Авто
          <div className={styles.circle} />
        </span>
        <span className={styles.stat}>
          <strong className={styles.strong_name}>2783</strong> <br /> <br />
          Недвижимость
          <div className={styles.circle} />
        </span>
      </div>
      <div className={styles.bottom_info}>
        <h1 className={styles.main_char}>
          Жилищный кооператив «Ихсан» предлагает выгодные и простые условия для
          приобретения недвижимости в рассрочку <br/>0% до 10 лет!
        </h1>
        <div className={styles.button_follow}>
          <Link href={"/programs"} passHref>
            <a>
              <button className={styles.butt}>Программы</button>
            </a>
          </Link>
        </div>
      </div>

      {modal && (
        <div className={styles.modal_winow}>
          <div className={styles.open_line}>
            <span>Открытая линия IHSAN</span>
          </div>
          <div className={styles.helpers}>
            <div className={styles.online}>
              <span>
                <strong> Мы онлайн </strong>
                <br /> И готовы вам помочь
              </span>
            </div>
            <div className={styles.team}>
              <div className={styles.team_helpers}>
                <img src="/img/sofy.png" alt="" />
                <p>Мария</p>
              </div>
              <div className={styles.team_helpers}>
                <img src="/img/sofy.png" alt="" />
                <p>Мария</p>
              </div>
              <div className={styles.team_helpers}>
                <img src="/img/sofy.png" alt="" />
                <p>Мария</p>
              </div>
            </div>
          </div>
          <input
            className={styles.feedback}
            type="text"
            name=""
            id=""
            placeholder="Напишите сообщение"
          />
        </div>
      )}
    </div>
  );
}
