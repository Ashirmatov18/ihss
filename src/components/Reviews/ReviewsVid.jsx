import React, { useState } from "react";
import styles from "../../styles/reviewvideo.module.css";
import Image from "next/image";
import ReactPlayer from "react-player";
import Play from "../../assets/img/play.png";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function ReviewsVid() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const [fourthModal, setFourthModal] = useState(false);
  const [, setFifthModal] = useState(false);
  const [, setSixModal] = useState(false);
  const [, setSeventhModal] = useState(false);
  const [, setEightModal] = useState(false);

  let domNode = useClickOutside(() => {
    setFirstModal(false);
    setSecondModal(false);
    setThirdModal(false);
    setFourthModal(false);
    setFifthModal(false);
    setSixModal(false);
    setSeventhModal(false);
    setEightModal(false);
  });

  return (
    <div>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>ОТЗЫВЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>

      <div className={styles.main_block}>
        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setFirstModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setSecondModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_block}>
        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setThirdModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setFourthModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_block}>
        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setFifthModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setSixModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.main_block} style={{ marginBottom: "100px" }}>
        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setSeventhModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={domNode}>
          <h2>Отзыв от нашего клиента</h2>
          <div className={styles.first_modals}>
            <div className={styles.firstt}>
              <div style={{ paddingTop: "110px" }}>
                <Image
                  src={Play}
                  onClick={() => {
                    setEightModal(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {firstModal && (
        <div className={styles.main_modal}>
          <div className={styles.overlay}>
            {/* <div className={styles.modal_content}>
              <button
                className={styles.close_modal}
                onClick={() => setFirstModal(false)}
              >
                C
              </button> */}
            <ReactPlayer
              className={styles.player}
              url="https://www.youtube.com/watch?v=9DwGahSqcEc"
              controls={true}
              light
              playIcon={
                <div>
                  <Image src={Play} />
                </div>
              }
            />
            {/* </div> */}
          </div>
        </div>
      )}

      {secondModal && (
        <div className={styles.main_modal}>
          <div className={styles.overlay}>
            {/* <div className={styles.modal_content}>
              <button
                className={styles.close_modal}
                onClick={() => setFirstModal(false)}
              >
                C
              </button> */}
            <ReactPlayer
              className={styles.player}
              url="https://www.youtube.com/watch?v=wvFDXV0VBg4&list=PLUfiNKbU7q-f4m0nwJWkf7WrNezjMg3pn&index=98"
              controls={true}
              light
              playIcon={
                <div>
                  <Image src={Play} />
                </div>
              }
            />
            {/* </div> */}
          </div>
        </div>
      )}
      {thirdModal && (
        <div className={styles.main_modal}>
          <div className={styles.overlay}>
            <div className={styles.modal_content}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=h8V9qphAPBg"
                controls={true}
              />
              <button
                className={styles.close_modal}
                onClick={() => setThirdModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {fourthModal && (
        <div className={styles.main_modal}>
          <div className={styles.overlay}>
            <div className={styles.modal_content}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=9DwGahSqcEc"
                controls={true}
              />
              <button
                className={styles.close_modal}
                onClick={() => setFourthModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
