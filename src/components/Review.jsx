import React from "react";
import styles from "../styles/review.module.css";
import Image from "next/image";
import quotes from "../../public/img/quotes.png";
import acc from "../assets/img/Picture.png";

export default function Review() {
  return (
    <div>
      <div className={styles.back_img}>
        <div className={styles.happy_review}>
          <h1
            className={styles.happy_clients}
            style={{
              color: "#fff",
              fontSize: "48px",
              paddingTop: "220px",
            }}
          >
            Счастливые <br /> клиенты
          </h1>
          <div>
            <span style={{ color: "#fff", fontSize: "18px" }}>
              Отзывы этих счастливых клиентов помогают <br /> нам достигать
              высот.
            </span>
          </div>
          <button className={styles.but_review}>Больше отзывов</button>
        </div>

        <div className={styles.review_vid}>
          <div className={styles.account_info}>
            <div className={styles.account_picture}>
              <div
                style={{
                  marginLeft: "20px",
                  marginTop: "28px",
                  marginRight: "-20px",
                }}
              >
                <Image src={acc} />
              </div>
              <div
                style={{
                  marginBottom: "10px",
                  marginLeft: "40px",
                  marginTop: "10px",
                }}
              >
                <h3
                  style={{
                    marginBottom: "2px",
                  }}
                >
                  Айдана Кадырбаева
                </h3>
                <span>Клиент IHNASS</span>
              </div>
            </div>
            <div style={{ marginRight: "15px", marginTop: "15px" }}>
              <Image src={quotes} alt="quotes" />
            </div>
          </div>
          <div>
            {/* <ReactPlayer
              className={styles.player_review}
              url="//player.vimeo.com/video/407250987?title=0&portrait=0&byline=0&autoplay=1&muted=true"
              controls={true}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
