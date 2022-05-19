import React from "react";
import styles from "../styles/questions.module.css";
import { useState } from "react";
import Image from "next/image";
import { Next } from "../Questions/QuestionsIcons";

const First = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            Какая гарантия что вы не закроетесь?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Second = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            Кому оформляется недвижимость?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Third = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            В случае отказа приобретения жилья, могу ли я <br /> вернуть свои
            деньги назад?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Fourth = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            Можно ли все процессы оформления производить <br /> дистанционно,
            если мы находимся в другой <br /> стране?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Fifth = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            Что будет, если у меня нет денег для <br /> первоначального взноса?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Six = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            Можно ли досрочно закрыть долг за выкупаемую <br /> в рассрочку
            имущество?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Seventh = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            Помимо первоначального взноса, какие взносы необходимо вносить,
            чтобы получить недвижимость или авто?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Eight = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={styles.main_modal}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span style={{ marginLeft: "15px" }}>
            Могу ли я приобрести недвижимость в любом <br /> регионе страны?
          </span>
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
        <span></span>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2 style={{ color: "#00512E" }}>Кому оформляется недвижимость?</h2>
          <span style={{ margin: "0 auto" }}>
            Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />{" "}
            погашения заемных средств.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default function Questions() {
  return (
    <div>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>ВОПРОСЫ И ОТВЕТЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>
      <div className={styles.que}>
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Six />
        <Seventh />
        <Eight />
      </div>
    </div>
  );
}
