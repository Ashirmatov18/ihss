import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/team.module.css";
import Image from "next/image";
import er from "../../assets/img/er.png";
import ak from "../../assets/img/ak.png";
import os from "../../assets/img/os.png";
import aki from "../../assets/img/akin.png";
import erk from "../../assets/img/erk.png";

export default function Team() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get("http://64.227.168.246/api/v1/abouts/about")
      .then(({ data }) => {
        console.log(data);
        setAbout(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.main_team}>
      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НАША КОМАНДА</h1>
          <hr className={styles.calc_title_line} />
        </div>

        <div className={styles.teammates}>
          {about.map((a) => (
            <div className={styles.news} key={a.id}>
              <div>
                <Image
                  className={styles.img_m}
                  src={a.image}
                  layout="fill"
                  // objectFit="contain"
                  // width={40}
                  // height={40}
                />
              </div>
              <div className={styles.titleP_main}>
                <h4 className={styles.title_name}>{a.title}т</h4>
                <span className={styles.mini_desc}>{a.content}</span>
              </div>
            </div>
          ))}

          <div className={styles.news}>
            <div>
              <Image className={styles.img_m} src={ak} />
            </div>
            <div className={styles.titleP_main}>
              <h4 className={styles.title_name}>Бекмурзаева Акинай</h4>
              <span className={styles.mini_desc}>
                Основатель холдинга "Ихсан"
              </span>
            </div>
          </div>
          <div className={styles.news}>
            <div>
              <Image className={styles.img_m} src={os} />
            </div>
            <div className={styles.titleP_main}>
              <h4 className={styles.title_name}>Осоров Улан</h4>
              <span className={styles.mini_desc}>
                Первый Заместитель <br /> Председателя правления НЖК <br />{" "}
                "Ихсан Групп ЛТД"
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_team}>
        <div className={styles.first_team}>
          <div>
            <Image src={aki} />
          </div>
          <div>
            <h1 className={styles.ihs_first}>Ихсан - чистые намерения</h1>
            <span>
              Я, Бекмурзаева Акинай, являюсь основательницей <br /> НЖК «Ихсан
              Групп ЛТД». Считаю что будущее <br /> начинается сегодня. Если мы
              хотим, чтобы оно <br /> было счастливым, то уже сейчас нужно
              делать <br /> что-то для этого. Мы готовы сделать вклад в <br />{" "}
              светлое будущее для наших кыргызстанцев.
            </span>
            <p className={styles.pclass}>Бекмурзаева Акинай</p>
          </div>
        </div>

        <div className={styles.second_team}>
          <div>
            <h1 className={styles.ihs_first}>
              НЖК "Ихсан Групп ЛТД"— <br /> доступное жилье для <br /> каждого
            </h1>
            <span>
              Я, Абылкасымов Эрмат Камчыбекович, являюсь <br /> руководителем
              НЖК «Ихсан Групп ЛТД». Считаю, <br /> что жизнь каждого человека
              зависит от страны, в <br /> которой он живет. Поэтому, каждый
              человек <br /> должен стараться сделать что-то полезное для <br />{" "}
              своей страны. И тогда страна будет процветать! <br />
              Меня беспокоят люди, которые не могут позволить <br /> себе
              недвижимость в родной стране. Сколько бы <br /> они не работали,
              их мечты о жилье могут не <br /> сбыться. Поэтому, кооператив
              Ихсан помогает <br /> приобрести жилье во благо народа. Моя цель
              служить <br /> своей стране и для наших кыргызстанцев.
            </span>
            <p className={styles.pclass}>Абылкасымов Эрмат</p>
          </div>
          <div className={styles.ermat}>
            <Image src={erk} />
          </div>
        </div>
      </div>
    </div>
  );
}
