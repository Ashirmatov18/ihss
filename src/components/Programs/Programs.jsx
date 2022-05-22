import React from "react";
import styles from "../../styles/programs.module.css";
import Image from "next/image";
import sec from "../../assets/img/sec.png";
import fir from "../../assets/img/fir.png";
import thi from "../../assets/img/thi.png";
import fo from "../../assets/img/fo.png";
import fif from "../../assets/img/fif.png";
import si from "../../assets/img/si.png";

export default function Programs() {
  return (
    <div className={styles.main_program}>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>ПРОГРАММЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>

      <div className={styles.programs_info}>
        <div className={styles.program_percentage}>
          <div className={styles.program_traffic}>
            <h2>Популярный</h2>
            <div className={styles.tarif}>
              <h3>25+7%</h3>
            </div>
          </div>
          <div className={styles.efficiency}>
            <div>
              <span>Единонаразовая комиссия</span>
              <h4>7%</h4>
            </div>
            <div>
              <span>Первоначальный взнос</span>
              <h4>25%</h4>
            </div>
            <div>
              <span>Сумма финансирования</span>
              <h4>850000 сом - 2500000 сом</h4>
            </div>
            <div>
              <span>Срок наступления очереди</span>
              <h4>По очерёдности</h4>
            </div>
            <div>
              <span>Срок рассрочки</span>
              <h4>10 лет</h4>
            </div>
          </div>
        </div>

        <div className={styles.program_percentage}>
          <div className={styles.program_traffic}>
            <h2>Удобный</h2>
            <div className={styles.tarif}>
              <h3>35+7%</h3>
            </div>
          </div>
          <div className={styles.efficiency}>
            <div>
              <span>Единонаразовая комиссия</span>
              <h4>7%</h4>
            </div>
            <div>
              <span>Первоначальный взнос</span>
              <h4>35%</h4>
            </div>
            <div>
              <span>Сумма финансирования</span>
              <h4>850000 сом - 4000000 сом</h4>
            </div>
            <div>
              <span>Срок наступления очереди</span>
              <h4>По очерёдности</h4>
            </div>
            <div>
              <span>Срок рассрочки</span>
              <h4>10 лет</h4>
            </div>
          </div>
        </div>

        <div className={styles.program_percentage}>
          <div className={styles.program_traffic}>
            <h2>Выгодный</h2>
            <div className={styles.tarif}>
              <h3>50+7%</h3>
            </div>
          </div>
          <div className={styles.efficiency}>
            <div>
              <span>Единонаразовая комиссия</span>
              <h4>7%</h4>
            </div>
            <div>
              <span>Первоначальный взнос</span>
              <h4>50%</h4>
            </div>
            <div>
              <span>Сумма финансирования</span>
              <h4>850000 сом - 5500000 сом</h4>
            </div>
            <div>
              <span>Срок наступления очереди</span>
              <h4>По очерёдности</h4>
            </div>
            <div>
              <span>Срок рассрочки</span>
              <h4>10 лет</h4>
            </div>
          </div>
        </div>

        <div className={styles.program_percentage}>
          <div className={styles.program_traffic}>
            <h2>Авто</h2>
            <div className={styles.tarif}>
              <h3>50+7%</h3>
            </div>
          </div>
          <div className={styles.efficiency}>
            <div>
              <span>Единонаразовая комиссия</span>
              <h4>7%</h4>
            </div>
            <div>
              <span>Первоначальный взнос</span>
              <h4>50%</h4>
            </div>
            <div>
              <span>Сумма финансирования</span>
              <h4>400000 сом - 1700000 сом</h4>
            </div>
            <div>
              <span>Срок наступления очереди</span>
              <h4>По очерёдности</h4>
            </div>
            <div>
              <span>Срок рассрочки</span>
              <h4>10 лет</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>
            ЭТАПЫ ПРИОБРЕТЕНИЯ ИМУЩЕСТВА
          </h1>
          <hr className={styles.calc_title_line_two} />
        </div>
        <h1 className={styles.tittle_first}>Ваши шаги к мечте!</h1>
        <div className={styles.image_bot}>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={fir} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={sec} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={thi} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={fo} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={fif} />
          </div>
          <div className={styles.img_char}>
            <Image className={styles.img_num} src={si} />
          </div>
        </div>
      </div>
    </div>
  );
}
