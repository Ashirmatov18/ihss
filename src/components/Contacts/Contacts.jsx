import React from "react";
import styles from "../../styles/contacts.module.css";
import Image from "next/image";
import adress from "../../assets/img/adress.png";

export default function Contacts() {
  return (
    <div>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>КОНТАКТЫ</h1>
        <hr className={styles.calc_title_line} />
      </div>

      <div className={styles.main_address}>
        <div className={styles.adress_map}>
          <Image src={adress} />
          <h4>НЖК "Ихсан Групп ЛТД" Головной офис</h4>
          <div>
            г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” , <br />{" "}
            3-этаж.
          </div>
          <div>
            +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778) 00
            51 51
          </div>
          <div>ihsangroupltd@gmail.com</div>
        </div>

        <div>
          <Image src={adress} />
          <h4>НЖК "Ихсан Групп ЛТД" Головной офис</h4>
          <div>
            г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” , <br />{" "}
            3-этаж.
          </div>
          <div>
            +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778) 00
            51 51
          </div>
          <div>ihsangroupltd@gmail.com</div>
        </div>

        <div>
          <Image src={adress} />
          <h4>НЖК "Ихсан Групп ЛТД" Головной офис</h4>
          <div>
            г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” , <br />{" "}
            3-этаж.
          </div>
          <div>
            +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778) 00
            51 51
          </div>
          <div>ihsangroupltd@gmail.com</div>
        </div>

        <div>
          <Image src={adress} />
          <h4>НЖК "Ихсан Групп ЛТД" Головной офис</h4>
          <div>
            г. Бишкек <br /> Раззакова / Боконбаева 113 , БЦ “Альтаир” , <br />{" "}
            3-этаж.
          </div>
          <div>
            +996 (700) 00 51 51 <br /> +996 (559) 00 51 51 <br /> +996 (778) 00
            51 51
          </div>
          <div>ihsangroupltd@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
