import React from "react";
import styles from "../../styles/newsishan.module.css";
import Image from "next/image";
import moscow from "../../assets/img/moscow.png";
import talas from "../../assets/img/talas.png";
import ui from "../../assets/img/ui.png";
import Link from "next/link";

export default function Newsishan() {
  return (
    <div>
      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НОВОСТИ</h1>
          <hr className={styles.calc_title_line} />
        </div>
      </div>

      <div className={styles.news_main}>
        <Link href="/newsdetailmoscow">
          <div className={styles.news}>
            <div>
              <Image className={styles.img_m} src={moscow} />
            </div>
            <div className={styles.titleP_main}>
              <h4 className={styles.title_name}>
                Мы открылись <br /> в городе Москва
              </h4>
              <span className={styles.mini_desc}>
                Теперь вы можете прийти к нам в офис <br /> и получить от наших
                менеджеров <br /> достоверную информацию и задать <br />{" "}
                интересующие вопросы
              </span>
            </div>
          </div>
        </Link>

        <Link href="/newsdetailtalas">
          <div className={styles.news}>
            <div>
              <Image className={styles.img_m} src={talas} />
            </div>
            <div className={styles.titleP_main}>
              <h4 className={styles.title_name}>
                Мы открылись <br /> в городе Таласе
              </h4>
              <span className={styles.mini_desc}>
                Теперь вы можете прийти к нам в офис <br /> и получить от наших
                менеджеров <br /> достоверную информацию и задать <br />{" "}
                интересующие вопросы
              </span>
            </div>
          </div>
        </Link>

        <div className={styles.news}>
          <div>
            <Image className={styles.img_m} src={ui} />
          </div>
          <div className={styles.titleP_main}>
            <h4 className={styles.title_name}>“Ихсан Уй-було”</h4>
            <span>
              Сиздерди 9-АПРЕЛЬ күнү Бишкек <br /> шаарында, Кожомкул атындагы
              <br /> Спорт br ордосунда өтүүчү...
            </span>
          </div>
        </div>
      </div>

      <div className={styles.news_main}>
        <div className={styles.news}>
          <div>
            <Image className={styles.img_m} src={moscow} />
          </div>
          <div className={styles.titleP_main}>
            <h4 className={styles.title_name}>
              Мы открылись <br /> в городе Москва
            </h4>
            <span className={styles.mini_desc}>
              Теперь вы можете прийти к нам в офис <br /> и получить от наших
              менеджеров <br /> достоверную информацию и задать <br />{" "}
              интересующие вопросы
            </span>
          </div>
        </div>

        <div className={styles.news}>
          <div>
            <Image className={styles.img_m} src={talas} />
          </div>
          <div className={styles.titleP_main}>
            <h4 className={styles.title_name}>
              Мы открылись <br /> в городе Таласе
            </h4>
            <span className={styles.mini_desc}>
              Теперь вы можете прийти к нам в офис <br /> и получить от наших
              менеджеров <br /> достоверную информацию и задать <br />{" "}
              интересующие вопросы
            </span>
          </div>
        </div>

        <div className={styles.news}>
          <div>
            <Image className={styles.img_m} src={ui} />
          </div>
          <div className={styles.titleP_main}>
            <h4 className={styles.title_name}>“Ихсан Уй-було”</h4>
            <span>
              Сиздерди 9-АПРЕЛЬ күнү Бишкек <br /> шаарында, Кожомкул атындагы
              <br /> Спорт br ордосунда өтүүчү...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
