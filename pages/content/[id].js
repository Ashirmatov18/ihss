import React, { useEffect, useState } from "react";
import Head from "next/head";
import MainLayout from "../../src/components/ui/MainLayout";
import Navbar from "../../src/components/Navbar/Navbar";
import Footer from "../../src/components/Footer";
import axios from "axios";
import { API_URL } from "../../src/services/const";
import { useRouter } from "next/router";
import styles from "../../src/styles/buildDetail.module.scss";

const getNews = async (id) => {
  const { data } = await axios.get(`${API_URL}/content/${id}/`);
  return data;
};

function BuildD() {
  const {
    query: { id: contentID },
  } = useRouter();
  const [content, setContent] = useState(null);

  useEffect(() => {
    getNews(contentID).then(setContent);
  }, [contentID]);
  return (
    <>
      <Head>
        <title>Ihsan</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <MainLayout>
          <Navbar />
          <div className={styles.mainWrapper}>
            {content && (
              <div
                className={styles.bgWrapper}
                style={{ backgroundImage: `url("${content.image}")` }}
              >
                <div className={styles.content}>
                  <h1>{content.title}</h1>
                  <p>{content.description}</p>
                </div>
              </div>
            )}
          </div>
          <Footer />
        </MainLayout>
      </main>
    </>
  );
}

export default BuildD;
