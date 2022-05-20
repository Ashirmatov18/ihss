import React from "react";
import styles from "../../styles/contacts.module.css";
import Image from "next/image";
import adress from "../../assets/img/adress.png";
import { GoldLocation, GoldMobile, Mess } from "./ContactsIncon";

export default function Contacts() {
  return (
    <div className={styles.main_address_title}>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>КОНТАКТЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>

      <div className={styles.main_address}>
        <div className={styles.adress_map}>
          <Image src={adress} />
          <h4 className={styles.title_address}>
            НЖК "Ихсан Групп ЛТД" Головной офис
          </h4>
          <div className={styles.adrress}>
            <div className={styles.location}>
              <GoldLocation />
            </div>
            <div className={styles.info_address}>
              г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” ,{" "}
              <br /> 3-этаж.
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mobile}>
              <GoldMobile />
            </div>
            <div>
              +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778)
              00 51 51
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mess}>
              <Mess />
            </div>
            <div className={styles.info_address}>ihsangroupltd@gmail.com</div>
          </div>
        </div>

        <div className={styles.adress_map}>
          <Image src={adress} />
          <h4 className={styles.title_address}>
            НЖК "Ихсан Групп ЛТД" Головной офис
          </h4>
          <div className={styles.adrress}>
            <div className={styles.location}>
              <GoldLocation />
            </div>
            <div className={styles.info_address}>
              г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” ,{" "}
              <br /> 3-этаж.
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mobile}>
              <GoldMobile />
            </div>
            <div>
              +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778)
              00 51 51
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mess}>
              <Mess />
            </div>
            <div className={styles.info_address}>ihsangroupltd@gmail.com</div>
          </div>
        </div>

        <div className={styles.adress_map}>
          <Image src={adress} />
          <h4 className={styles.title_address}>
            НЖК "Ихсан Групп ЛТД" Головной офис
          </h4>
          <div className={styles.adrress}>
            <div className={styles.location}>
              <GoldLocation />
            </div>
            <div className={styles.info_address}>
              г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” ,{" "}
              <br /> 3-этаж.
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mobile}>
              <GoldMobile />
            </div>
            <div>
              +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778)
              00 51 51
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mess}>
              <Mess />
            </div>
            <div className={styles.info_address}>ihsangroupltd@gmail.com</div>
          </div>
        </div>

        <div className={styles.adress_map}>
          <Image src={adress} />
          <h4 className={styles.title_address}>
            НЖК "Ихсан Групп ЛТД" Головной офис
          </h4>
          <div className={styles.adrress}>
            <div className={styles.location}>
              <GoldLocation />
            </div>
            <div className={styles.info_address}>
              г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” ,{" "}
              <br /> 3-этаж.
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mobile}>
              <GoldMobile />
            </div>
            <div>
              +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778)
              00 51 51
            </div>
          </div>
          <div className={styles.adrress}>
            <div className={styles.mess}>
              <Mess />
            </div>
            <div className={styles.info_address}>ihsangroupltd@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
