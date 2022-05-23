import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../../styles/team.module.css";
import { API_URL } from "../../services/const";
import { truncateString } from "../../services/helpers";

const getTeamDetail = async () => {
  const { data } = await axios.get(`${API_URL}/abouts/teams/`);
  return data;
};

const getAboutDetail = async () => {
  const { data } = await axios.get(`${API_URL}/abouts/about/`);
  return data;
};

export default function Team() {
  const [teams, setTeams] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    getTeamDetail().then(setTeams);
    getAboutDetail().then(setAbout);
  }, []);
  return (
    <div className={styles.main_team}>
      <div>
        <div className={styles.calc_title}>
          <h1 className={styles.calc_title_name}>НАША КОМАНДА</h1>
          <hr className={styles.calc_title_line} />
        </div>

        <div className={styles.teammates}>
          {!!teams?.length &&
            teams.map(({ id, image, name, who_is }) => (
              <div className={styles.news} key={`teammates-${id}`}>
                {image && (
                  <div
                    style={{ backgroundImage: `url('${image}')` }}
                    className={styles.teammates_photos}
                  />
                )}
                <div className={styles.titleP_main}>
                  <h4 className={styles.title_name}>{name}</h4>
                  <span className={styles.mini_desc}>{who_is}</span>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className={styles.aboutWrapper}>
        {!!about?.length &&
          about.map(({ id, image, title, name, content }) => (
            <div className={styles.first_team} key={`abouts-${id}`}>
              <div
                className={styles.aboutImage}
                style={{ backgroundImage: `url('${image}')` }}
              />
              <div>
                <h1 className={styles.ihs_first}>{title}</h1>
                <span>{content ? truncateString(content, 500) : ""}</span>
                <p className={styles.pclass}>{name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
