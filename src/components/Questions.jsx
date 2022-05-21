import React from "react";
import styles from "../styles/questions.module.css";
import { useState } from "react";
import { Next } from "../Questions/QuestionsIcons";
import { useClickOutside } from "../hooks/useClickOutside";

const qItems = [
  {
    title: `Какая гарантия что вы не закроетесь?`,
    description: `Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
  {
    title: `Кому оформляется недвижимость?`,
    description: ` Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
  {
    title: `В случае отказа приобретения жилья, могу ли я <br /> вернуть свои
            деньги назад?`,
    description: `Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
  {
    title: `Можно ли все процессы оформления производить <br /> дистанционно,
            если мы находимся в другой <br /> стране?`,
    description: `Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
  {
    title: `Что будет, если у меня нет денег для <br /> первоначального взноса?`,
    description: `Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
  {
    title: `Можно ли досрочно закрыть долг за выкупаемую <br /> в рассрочку
            имущество?`,
    description: `Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
  {
    title: `Помимо первоначального взноса, какие взносы необходимо вносить,
            чтобы получить недвижимость или авто?`,
    description: `Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
  {
    title: `Могу ли я приобрести недвижимость в любом <br /> регионе страны?`,
    description: `Имущество оформляется на имя пайщика, <br /> при этом накладывается
            ограничение <br /> (ограничение / обременение) до полного <br />
            погашения заемных средств.`,
  },
];

const First = ({ title, description }) => {
  const [isHovering, setIsHovered] = useState(false);

  let domnode = useClickOutside(() => {
    setIsHovered(false);
  });

  return (
    <div
      className={styles.main_modal}
      onClick={() => setIsHovered(!isHovering)}
      ref={domnode}
    >
      <div className={styles.first_modal}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <span
            style={{ marginLeft: "15px" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div style={{ marginRight: "15px" }}>
            <Next />
          </div>
        </div>
      </div>
      {isHovering ? (
        <div className={styles.info_modal}>
          <h2
            style={{ color: "#00512E" }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <span
            style={{ margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
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
        {qItems.map(({ title, description }, i) => (
          <First key={`q-items-${i}`} description={description} title={title} />
        ))}
      </div>
    </div>
  );
}
