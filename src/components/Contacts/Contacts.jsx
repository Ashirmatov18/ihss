import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/contacts.module.css";
import { GoldLocation, GoldMobile, Mess } from "./ContactsIncon";
import axios from "axios";
import { API_URL } from "../../services/const";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  const fetchData = useCallback(() => {
    axios
      .get(`${API_URL}/contacts/`)
      .then(({ data }) => {
        setContacts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(contacts);
  return (
    <div className={styles.main_address_title}>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>КОНТАКТЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>
      <div className={styles.contacts_mainWrapper}>
        {!!contacts?.length &&
          contacts.map(
            ({ id, address, title, phone_numbers, email, lat, lng }) => (
              <div className={styles.main_address} key={id}>
                <Map lat={+lat} lng={+lng} />
                <div className={styles.adress_map}>
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
