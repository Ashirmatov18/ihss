import RadioSVGMap from "./RadioSvg";
import KgMap from "./map";
import styles from "../../styles/maps.module.css";
import Image from "next/image";
import kg from "../../../public/img/kg.png";
import rus from "../../../public/img/ru.png";
import ru from "../../assets/img/russian.png";
import React, { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

const options = [
  {
    id: "issyk",
    data: [
      {
        street:
          "Г. Каракол, ул. Жамансариева 188/3, пер. Алдашева (ор-р «Актилек+») ",
        phone: "+996501805151 ",
        title: "Иссык-Куль",
      },
      {
        street: "test issyk street",
        phone: "test issyk phone",
        title: "Иссык-Куль",
      },
      {
        street: "test issyk street",
        phone: "test issyk phone",
        title: "Иссык-Куль",
      },
      {
        street: "test issyk street",
        phone: "test issyk phone",
        title: "Иссык-Куль",
      },
    ],
  },
  {
    id: "osh",
    data: [
      {
        street:
          "г. Ош, ул. А. Шакиров, 275/364. ( ор-р. 'Нурзаман', ТЦ 'Глобус') ",
        phone: "+996(700) 00 51 50 ",
        title: "Ош",
      },
      {
        street: "Г. Ноокат, ул. Каленина (ор-р Налоговая) ",
        phone: "+996700135150  +996550135150 ",
      },
      {
        street: "Г. Кара-Суу, ул. Бакиева (ор-р Комплекс «Турак-Жай») ",
        phone: "+996227015150  +996557015150 ",
      },
      {
        street:
          "р-н Кара-Кулжа, ул. Калматаева 72 (магазин «Токтосун-Ата» 2-этаж) ",
        phone: "+996773144437   +996551730471 ",
      },
      {
        street: "с. Гулчо (Алай), ул. Нарматова 138 ",
        phone: "+996990040088    +996220040088 +996700040088  ",
      },
      {
        street: "г. Узген, ул. Манас-Ата, БЦ «Озгон ордо» 1-этаж) ",
        phone: "+996708875050 +996220040088 +996700040088  ",
      },
    ],
  },
  {
    id: "chui",
    data: [
      {
        street: "г. Бишкек, Чуй/ Кулиева 20, БЦ “Жан-Сали”, 5-этаж. ",
        phone: " +996(700) 00 51 51",
        title: "Чуй",
      },
      {
        street: "г. Бишкек, Чуй/ Кулиева 20, БЦ “Жан-Сали”, 5-этаж.   ",
        phone: " 0700-005-151",
      },
      {
        street:
          "г. Бишкек, рынок Дордой, Мурас спорт, 14-проход(ЛЭП), контейнер 25 ",
        phone: "+996(509)525200 ",
      },
      {
        street: "г.Токмок ул Советская 106 А ",
        phone: "0707 330-968 ",
      },
    ],
  },
  {
    id: "talas",
    data: [
      {
        street: "г. Талас, ул. Сарыгулова 59А ",
        phone: "+996704445151 ",
        title: "Талас",
      },
    ],
  },
  {
    id: "jalal-abad",
    data: [
      {
        street: " г. Жалал-Абад, ул. Токтогул, 34, БЦ 'Plaza'",
        phone: "+996700700857",
        title: "Жалал-Абад",
      },
      {
        street: "г.Таш-Комур, ул. Токтогула 2,  ",
        phone: "+996774360005  +996704360005 ",
      },
    ],
  },
  {
    id: "batken",
    data: [
      {
        street:
          "Баткенская обл .,г. Кызыл -Кыя ул.Асаналиева ориентир “Банк Азия” -2 этаж ",
        phone: "+996222445151 ",
        title: "Баткен",
      },
    ],
  },
  {
    id: "naryn",
    data: [
      {
        street: "г. Нарын, ул. Ленина 41К, ТЦ 'Нарын Сити', 2-этаж ",
        phone: " +996(702) 28 51 51 ",
        title: "Нарын",
      },
      {
        street: "г. Кочкор-Ата, ул. Ленина 42/3 (ор-р ОАО Кыргызнефтгаз) ",
        phone: "+996708661153",
      },
    ],
  },
];

const rusData = [
  {
    id: "russian",
    street:
      "Г. Москва метро Новые Черёмушки; улица Профсоюзная, 56. Бизнес Центр «Cherry Tower»,",
    phone: "+74951362208  +79685547788  ",
    title: "Россия",
  },
];

function MainMap() {
  const [, setFocusedLocation] = useState(null);

  const [selectRegion, setSelectedRegion] = useState(options[0]);

  const [modal, setModal] = useState(false);
  const [rusModal, setRusModal] = useState(false);

  let domNode = useClickOutside(() => {
    setModal(false);
    setRusModal(false);
  });

  const getLocationName = (event) => {
    return event.target.attributes.name.value;
  };

  const handleFocus = (event) => {
    const focusedLocation = getLocationName(event);
    setSelectedRegion(options.find((item) => focusedLocation === item.id));
    setModal(true);
    setFocusedLocation(focusedLocation);
  };

  const getLocationclassName = (location, index) => {
    return `svg-map__location svg-map__location--heat${index % 15}`;
  };

  return (
    <>
      <div className={styles.main_calc}>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НАШИ ФИЛИАЛЫ</h1>
          <hr className={styles.calc_title_line} />
        </div>
      </div>

      <div ref={domNode} className={styles.kg_map_info}>
        <Image src={kg} />
        <div className={styles.country}>
          <span>Кыргызстан </span>
        </div>
      </div>
      <div className="map_style">
        <div className="kg-map">
          <RadioSVGMap
            className={styles.main_map}
            map={KgMap}
            locationclassName={getLocationclassName}
            onLocationFocus={handleFocus}
          />
        </div>

        {modal && (
          <div className={styles.info_contacts}>
            <h1 style={{ textAlign: "center" }}>
              {selectRegion.data[0].title}
            </h1>
            <div>
              {selectRegion.data.map((item) => (
                <div className={styles.info_kg}>
                  <div className={styles.street_info}>{item.street}</div>
                  <div className={styles.phone_info}>{item.phone}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={styles.russian_map}>
          <div>
            <div ref={domNode} className={styles.rus_map_info}>
              <Image src={rus} />
              <div className={styles.country}>
                <span>Россия</span>
              </div>
            </div>
            <div
              onClick={() => {
                setRusModal(true);
              }}
            >
              <Image src={ru} />
            </div>
          </div>
        </div>
      </div>

      {rusModal && (
        <div className={styles.info_contacts}>
          <h1 style={{ textAlign: "center" }}>{rusData[0].title}</h1>
          <div>
            {rusData.map((item) => (
              <div className={styles.info_kg}>
                <div className={styles.street_info}>{item.street}</div>
                <div className={styles.phone_info}>{item.phone}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default MainMap;
