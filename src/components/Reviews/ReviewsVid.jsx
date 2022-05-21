import React, { useEffect, useState } from "react";
import styles from "../../styles/reviewvideo.module.css";
import ReactPlayer from "react-player";
import { useClickOutside } from "../../hooks/useClickOutside";
import { API_URL } from "../../services/const";
import axios from "axios";

const getReviews = async () => {
  const { data } = await axios.get(`${API_URL}/reviews/`);
  return data;
};

export default function ReviewsVid() {
  const [firstModal, setFirstModal] = useState(false);
  const [reviews, setReviews] = useState([]);

  let domNode = useClickOutside(() => {
    setFirstModal(null);
  });

  useEffect(() => {
    getReviews().then(setReviews);
  }, []);

  return (
    <div className={styles.review_mod}>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>ОТЗЫВЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>

      <div className={styles.main_block}>
        {!!reviews?.length &&
          reviews.map(({ id, image_cover, video_title, video_url }) => (
            <div className={styles.main_contain} key={`reviews-${id}`}>
              <h2>{video_title || "Отзыв от нашего клиента"}</h2>
              <div
                className={styles.first_modals}
                style={{ backgroundImage: `url("${image_cover}")` }}
              >
                <div
                  className={styles.firstt}
                  onClick={() => {
                    setFirstModal(video_url);
                  }}
                >
                  {play}
                </div>
              </div>
            </div>
          ))}
      </div>

      {!!firstModal && (
        <div className={styles.main_modal}>
          <div className={styles.overlay}>
            <div ref={domNode}>
              <ReactPlayer
                className={styles.player}
                url={firstModal}
                controls={true}
                light
                playIcon={play}
              />
            </div>
          </div>
        </div>
      )}
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
