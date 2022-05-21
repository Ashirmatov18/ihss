import React, { useEffect, useState } from "react";
import styles from "../../styles/newsishan.module.css";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "../../services/const";
import { truncateString } from "../../services/helpers";

const getNews = async () => {
  const { data } = await axios.get(`${API_URL}/news/`);
  return data;
};

export default function Newsishan() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(setNews);
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1 className={styles.calc_title_name}>НОВОСТИ</h1>
          <hr className={styles.calc_title_line} />
          <NewsList news={news}/>
        </div>
      </div>
    </div>
  );
}

export const NewsList = ({ news }) => (
  <div className={styles.news_main}>
    {!!news?.length &&
      news.map(({ id, description, title, image }) => (
        <Link href={`/news/${id}`} key={`news-${id}`} passHref>
          <a>
            <div className={styles.news}>
              <div
                className={styles.newsImage}
                style={{ backgroundImage: `url("${image}")` }}
              />
              <div className={styles.titleP_main}>
                <h4 className={styles.title_name}>
                  {title ? truncateString(title, 150) : ""}
                </h4>
                <p className={styles.mini_desc}>
                  {description ? truncateString(description, 200) : ""}
                </p>
              </div>
            </div>
          </a>
        </Link>
      ))}
  </div>
);
