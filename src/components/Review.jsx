import React from "react";
import styles from "../styles/review.module.css";
import Image from "next/image";
import quotes from "../../public/img/quotes.png";
import acc from "../assets/img/Picture.png";
import ReactPlayer from "react-player/lazy";
import Link from "next/link";

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
          <Link href="/review/" passHref>
            <a>
              <button className={styles.but_review}>Больше отзывов</button>
            </a>
          </Link>
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
                <span>Клиент IHSAN</span>
              </div>
            </div>
            <div style={{ marginRight: "15px", marginTop: "15px" }}>
              <Image src={quotes} alt="quotes" />
            </div>
          </div>
          <div>
            <div className={styles.video_player}>
              <ReactPlayer
                className
                style={{ backgroundColor: "white", borderRadius: "10px" }}
                width="80%"
                height="290px"
                playIcon={play}
                url="https://www.youtube.com/watch?v=fmopLsPB1PU"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const play = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 36C10.887 36 3 29.1129 3 20C3 10.8871 10.887 3 20 3C29.113 3 36 10.8871 36 20C36 29.1129 29.113 36 20 36ZM17 14C16.9007 13.9337 17.1192 13.0059 17 13C16.8808 12.9941 17.1053 13.9438 17 14C16.8947 14.0562 16.0615 13.8977 16 14C15.9385 14.1023 16.0002 13.8806 16 14V25C16.0002 25.1194 15.9385 24.8977 16 25C16.0615 25.1023 16.8947 24.9438 17 25C17.1053 25.0562 16.8808 26.0059 17 26C17.1192 25.9941 16.9007 25.0663 17 25L25 20C25.0905 19.9398 24.9486 20.0959 25 20C25.0514 19.9041 26 20.1087 26 20C26 19.8913 25.0514 19.0959 25 19C24.9486 18.9041 25.0905 19.0602 25 19L17 14Z"
      fill="#00512E"
    />
  </svg>
);
