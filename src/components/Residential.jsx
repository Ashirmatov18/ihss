import React, { useEffect, useState } from "react";
import styles from "../styles/residential.module.css";
import Link from "next/link";
import { Arrow } from "../Opportunity/OpportunityIcons";
import axios from "axios";
import { API_URL } from "../services/const";
import { truncateString } from "../services/helpers";

const getContent = async () => {
  const { data } = await axios.get(`${API_URL}/content/`);
  return data;
};
export default function Residential() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    getContent().then(setContents);
  }, []);

  return (
    <div>
      <div className={styles.first_residen}>
        <div className={styles.take_res}>
          <h1
            style={{
              paddingLeft: "130px",
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Приобретение жилья <br /> в рассрочку с низкой <br /> процентной
            ставкой
          </h1>
          <div className={styles.button_style} style={{ paddingLeft: "130px" }}>
            <button className={styles.res_but}>Перейти</button>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>ЖИЛЫЕ КОМПЛЕКСЫ</h1>
          <hr className={styles.calc_title_line} />
        </div>

        <div className={styles.container}>
          {!!contents?.length &&
            contents.map(({ id, description, address, title, image }) => (
              <div className={styles.card} key={`jk-${id}`}>
                <figure className={styles.card__thumb}>
                  <div
                    className={styles.card__image}
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                  <figcaption className={styles.card__caption}>
                    <h1 className={styles.card__title}>
                      {(title && truncateString(title, 18)) || ""}
                    </h1>
                    <h4 className={styles.card__address}>{address || ""}</h4>
                    <p className={styles.card__snippet}>
                      {description && truncateString(description, 100)}
                    </p>
                    <Link href={`/content/${id}/`} passHref>
                      <a className={styles.card__button}>
                        Подробнее <Arrow />
                      </a>
                    </Link>
                  </figcaption>
                </figure>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
