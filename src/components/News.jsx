import React, { useEffect, useState } from "react";
import styles from "../styles/news.module.css";
import { NewsList } from "./News/Newsishan";
import axios from "axios";
import { API_URL } from "../services/const";
const getNews = async () => {
  const { data } = await axios.get(`${API_URL}/news/`);
  return data;
};
export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(setNews);
  }, []);
  return (
    <div>
      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НОВОСТИ</h1>
          <hr className={styles.calc_title_line} />
        </div>
      </div>

      <NewsList news={news.slice(0, 4)} />
    </div>
  );
}
