import React, { useEffect, useMemo, useState } from "react";
import styles from "../../styles/newsdetail.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "../../services/const";
import { format } from "date-fns";
import { NewsList } from "./Newsishan";

const getNews = async () => {
  const { data } = await axios.get(`${API_URL}/news/`);
  return data;
};

export default function NewsDetail() {
  const {
    query: { id: newsId },
  } = useRouter();

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(setNews);
  }, []);

  const newsD = useMemo(
    () => news.find(({ id }) => +id === +newsId),
    [news, newsId]
  );

  return (
    <div>
      <div className={styles.news_detail}>
        <div className={styles.info_text}>
          <h6 style={{ color: "#989898" }}>
            {newsD?.create_at &&
              format(new Date(newsD.create_at), "HH:mm dd-MM-yyyy")}
          </h6>
          <h1 style={{ color: "#00512E" }}>{newsD?.title && newsD.title}</h1>
        </div>

        <div className={styles.main_ifo}>
          {newsD?.image && (
            <div
              className={styles.news_detail_image}
              style={{ backgroundImage: `url("${newsD?.image}")` }}
            />
          )}
          <div style={{ marginTop: "20px" }}>
            <span style={{ color: "#989898" }}>{newsD?.description}</span>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>ДРУГИЕ НОВОСТИ</h1>
          <hr className={styles.calc_title_line} />
        </div>
      </div>

      <NewsList news={news.filter(({ id }) => +id !== +newsId)} />
    </div>
  );
}
