import React from "react";
import styles from "../../styles/newsdetail.module.css";
import Image from "next/image";
import msc from "../../assets/img/msc.png";
import moscow from "../../assets/img/moscow.png";
import talas from "../../assets/img/talas.png";
import ui from "../../assets/img/ui.png";

export default function NewsDetail() {
  return (
    <div>
      <div className={styles.news_detail}>
        <div className={styles.info_text}>
          <h6>09:15 07.04.2022</h6>
          <h1>Мы открылись в городе Москва!</h1>
          <span>
            Теперь вы можете прийти к нам в офис и получить от наших менеджеров{" "}
            <br />
            достоверную информацию и задать интересующие вопросы
          </span>
        </div>

        <div className={styles.main_ifo}>
          <Image src={msc} />
          <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              mauris bibendum lorem elit. Lorem massa in dictumst fermentum
              justo, lacus amet massa. Eu nunc sit consequat purus, nam. Pretium
              arcu, molestie euismod sed venenatis, aliquam odio. In platea diam
              cursus arcu sit eget. Mollis maecenas sapien vitae sagittis, arcu
              felis cras neque faucibus. Maecenas nascetur pretium leo accumsan
              nibh. Cursus arcu fusce donec varius suspendisse id amet nisl.
              Aliquet scelerisque sit eget eu. Amet, justo, sit erat tempus quis
              eu. Potenti dignissim tellus et amet.
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>ДРУГИЕ НОВОСТИ</h1>
          <hr className={styles.calc_title_line} />
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
