import React, { useEffect, useState } from "react";
import styles from "../../styles/contacts.module.css";
import Image from "next/image";
import adress from "../../assets/img/adress.png";
import { GoldLocation, GoldMobile, Mess } from "./ContactsIncon";
import axios from "axios";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://64.227.168.246/api/v1/contacts")
      .then(({ data }) => {
        console.log(data);
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
      {contacts.map((c) => (
        <div className={styles.main_address} key={c.id}>
          <div className={styles.adress_map}>
            <Image src={adress} />
            <div style={{ paddingLeft: "10px" }}>
              <h4 className={styles.title_address}>{c.title}</h4>
              <div className={styles.adrress}>
                <div className={styles.location}>
                  <GoldLocation />
                </div>
                <div className={styles.info_address}>{c.address}</div>
              </div>
              <div className={styles.adrress}>
                <div className={styles.mobile}>
                  <GoldMobile />
                </div>
                <div>
                  {c.phone_numbers.map((p) => (
                    <span key={p.id}>{p.phone_number}</span>
                  ))}
                </div>
              </div>
              <div className={styles.adrress}>
                <div className={styles.mess}>
                  <Mess />
                </div>
                <div className={styles.info_address}>{c.email}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
