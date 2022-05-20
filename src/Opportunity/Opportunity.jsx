import React, { useState } from "react";
import styles from "../styles/opportunity.module.css";
import { useClickOutside } from "../hooks/useClickOutside";
import { W, M } from "./OpportunityIcons";

export default function Opportunity() {
  const [modal, setModal] = useState(false);

  let domnode = useClickOutside(() => {
    setModal(false);
  });

  return (
    <div className={styles.main_info}>
      <div className={styles.info_content}>
        <div className={styles.info_stats}>
          <span className={styles.stat}>
            <strong className={styles.strong_name}>1300+</strong> <br /> <br />
            Планировок <br /> квартир
            <div className={styles.circle}></div>
          </span>
          <span className={styles.stat}>
            <strong className={styles.strong_name}>74+</strong> <br /> <br />
            Реализовано <br /> обьектов
            <div className={styles.circle}></div>
          </span>
          <span className={styles.stat}>
            <strong className={styles.strong_name}>380+</strong> <br /> <br />
            Счастливых <br /> клиентов
            <div className={styles.circle}></div>
          </span>
          <span className={styles.stat}>
            <strong className={styles.strong_name}>216+</strong> <br /> <br />
            Строительных <br /> бригад
            <div className={styles.circle}></div>
          </span>
        </div>
        <div className={styles.opportunity_text}>
          <div className={styles.halal}>
            <img src="/img/halal.png" alt="" />
          </div>
          <div className={styles.bottom_info}>
            <h1 className={styles.main_char}>
              Возможность купить жильё <br /> по самым выгодным ценам
            </h1>
            <div className={styles.button_follow}>
              <button className={styles.butt}>Перейти</button>
            </div>
          </div>
        </div>
        <div ref={domnode} className={styles.contact}>
          <div className={styles.contact_us}>
            <div>
              <W />
            </div>
            <div>
              <M />
            </div>
          </div>
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
