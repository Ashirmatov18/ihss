import React, { useEffect, useState } from "react";
import styles from "../../styles/contacts.module.css";
import { GoldLocation, GoldMobile, Mess } from "./ContactsIncon";
import axios from "axios";
import { API_URL } from "../../services/const";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${API_URL}/contacts/`)
      .then(({ data }) => {
        setContacts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.main_address_title}>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>КОНТАКТЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>
      <div className={styles.contacts_mainWrapper}>
        {!!contacts?.length &&
          contacts.map(
            ({ id, address, title, phone_numbers, email, image }) => (
              <div className={styles.main_address} key={id}>
                <div className={styles.adress_map}>
                  <div
                    className={styles.contacts_image}
                    style={{ backgroundImage: `url("${image}")` }}
                  />
                  <div style={{ paddingLeft: "10px" }}>
                    <h4 className={styles.title_address}>{title || ""}</h4>
                    <div className={styles.contacts_wrapper}>
                      <div className={styles.contacts}>
                        <div className={styles.icon}>
                          <GoldLocation />
                        </div>
                        <div className={styles.info_address}>
                          {address || ""}
                        </div>
                      </div>
                      {phone_numbers.map((p) => (
                        <div
                          className={styles.contacts}
                          key={`numbers-${p.id}`}
                        >
                          <div className={styles.icon}>
                            <GoldMobile />
                          </div>
                          <div className={styles.info_address}>
                            {p?.phone_number || ""}
                          </div>
                        </div>
                      ))}
                      <div className={styles.contacts}>
                        <div className={styles.icon}>
                          <Mess />
                        </div>
                        <div className={styles.info_address}>{email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
}
