import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "../../styles/styles.module.css";
import { Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material";
import DrawerComponent from "./DrawerComponent.jsx";
import { Insta } from "./NavbarIcons";

export default function Navbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [num, setNum] = useState("+996 700 00 51 51");

  return (
    <nav className={styles.burger_menu}>
      <div>
        <div className={styles.first_nav}>
          <ul className={styles.first_nav_logo}>
            <li>
              {/*<select*/}
              {/*  className={styles.nums}*/}
              {/*  value={num}*/}
              {/*  onChange={({ target: { value } }) => setNum(value)}*/}
              {/*>*/}
              {/*  <option value={"+996 700 00 51 51"}>+996 700 00 51 51</option>*/}
              {/*  <option value={"+996 559 00 51 51"}>+996 559 00 51 51</option>*/}
              {/*  <option value={"+996 778 00 51 51"}>+996 778 00 51 51</option>*/}
              {/*</select>*/}
              <div className={styles.phones}>
                <p>+996 700 00 51 51</p>
                <p>+996 559 00 51 51</p>
                <p>+996 778 00 51 51</p>
              </div>
            </li>
            <li className={styles.social_network}>
              <a
                href="https://www.instagram.com/ihsangroup.kg/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className={styles.logo_social}>
                  <Insta />
                </div>
              </a>
              <a
                href="https://wa.me/+996700005151"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div className={styles.logo_social}>{whatsapp}</div>
              </a>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCnfdcLSlbHlORf6fEx6RBAA"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <div className={styles.logo_social}>{youtube}</div>
                </a>
              </div>
            </li>

            <li className={styles.address}>
              г. Бишкек, Раззакова / Боконбаева 113, БЦ “Альтаир”, 3-этаж
            </li>
          </ul>
        </div>

        {isMatch ? (
          <DrawerComponent />
        ) : (
          <>
            <div className={styles.second_nav}>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar
                  elevation={0}
                  style={{ backgroundColor: "white", color: "black" }}
                  position="static"
                >
                  <Toolbar className={styles.toolbar}>
                    <div>
                      <Link href="/" passHref>
                        <div className={styles.main_logo} />
                      </Link>
                    </div>

                    <div className={styles.navbar_info}>
                      <Link href="/" passHref>
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="a"
                        >
                          Главная
                        </Typography>
                      </Link>
                      <Link href="/team" passHref>
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="a"
                        >
                          Команда
                        </Typography>
                      </Link>

                      <Link href="/programs" passHref>
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="a"
                        >
                          Программы
                        </Typography>
                      </Link>
                      <Link href="/news" passHref>
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="a"
                        >
                          Новости
                        </Typography>
                      </Link>
                      <Link href="/review" passHref>
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="a"
                        >
                          Отзывы
                        </Typography>
                      </Link>

                      <Link href="/contacts" passHref>
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="a"
                        >
                          Контакты
                        </Typography>
                      </Link>
                    </div>

                    {/* <div className={styles.search_icon}>
                      <div className={styles.lang}>
                        <FormControl fullWidth>
                          <NativeSelect
                            defaultValue={30}
                            inputProps={{
                              name: "age",
                              id: "uncontrolled-native",
                            }}
                          >
                            <option value={10}>РУС</option>
                            <option value={20}>КЫР</option>
                          </NativeSelect>
                        </FormControl>
                      </div>

                      <Search
                        className={styles.search_main}
                        onClick={() => setStyle({ backgroundColor: "black" })}
                      >
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          inputProps={{ "aria-label": "search" }}
                        />
                      </Search>
                    </div> */}
                  </Toolbar>
                </AppBar>
              </Box>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

const whatsapp = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
      fill="#141414"
    />
    <path
      d="M8.67711 16.5458L9.18391 16.8419C10.0386 17.3403 11.0106 17.602 12 17.6C13.1076 17.6 14.1903 17.2716 15.1112 16.6562C16.0321 16.0409 16.7499 15.1663 17.1737 14.143C17.5976 13.1198 17.7085 11.9938 17.4924 10.9075C17.2763 9.8212 16.743 8.82337 15.9598 8.0402C15.1766 7.25703 14.1788 6.72368 13.0925 6.5076C12.0062 6.29152 10.8802 6.40242 9.85698 6.82627C8.83371 7.25012 7.95911 7.96789 7.34378 8.8888C6.72844 9.80972 6.40001 10.8924 6.40001 12C6.40001 13.0052 6.66391 13.9691 7.15881 14.8168L7.45421 15.3236L6.99711 17.0043L8.67711 16.5458ZM5.00281 19L5.94921 15.5224C5.32561 14.4534 4.99798 13.2376 5.00001 12C5.00001 8.1339 8.13391 5 12 5C15.8661 5 19 8.1339 19 12C19 15.8661 15.8661 19 12 19C10.763 19.002 9.54767 18.6746 8.47901 18.0515L5.00281 19ZM9.47371 8.7156C9.56751 8.7086 9.66201 8.7086 9.75581 8.7128C9.79361 8.7156 9.83141 8.7198 9.86921 8.724C9.98051 8.7366 10.103 8.8045 10.1443 8.8983C10.3529 9.3715 10.5559 9.8482 10.7519 10.3263C10.7953 10.4327 10.7694 10.5692 10.6868 10.7022C10.63 10.7921 10.5685 10.879 10.5027 10.9626C10.4236 11.0641 10.2535 11.2503 10.2535 11.2503C10.2535 11.2503 10.1842 11.3329 10.2108 11.4358C10.2206 11.475 10.2528 11.5317 10.2822 11.5793L10.3235 11.6458C10.5027 11.9447 10.7435 12.2478 11.0375 12.5334C11.1215 12.6146 11.2034 12.6979 11.2916 12.7756C11.6192 13.0647 11.9902 13.3006 12.3906 13.4756L12.3941 13.477C12.4536 13.5029 12.4837 13.5169 12.5705 13.554C12.6139 13.5722 12.6587 13.5883 12.7042 13.6002C12.7512 13.6122 12.8007 13.6099 12.8465 13.5937C12.8922 13.5775 12.9321 13.5481 12.9611 13.5092C13.4679 12.8953 13.5141 12.8554 13.5183 12.8554V12.8568C13.5535 12.824 13.5953 12.799 13.641 12.7837C13.6866 12.7684 13.735 12.763 13.7829 12.7679C13.8249 12.7707 13.8676 12.7784 13.9068 12.7959C14.2785 12.966 14.8868 13.2313 14.8868 13.2313L15.2942 13.414C15.3628 13.4469 15.4251 13.5246 15.4272 13.5995C15.43 13.6464 15.4342 13.722 15.4181 13.8606C15.3957 14.0419 15.3411 14.2596 15.2865 14.3737C15.2491 14.4516 15.1995 14.5229 15.1395 14.5851C15.0689 14.6593 14.9915 14.7267 14.9085 14.7867C14.8798 14.8083 14.8506 14.8293 14.821 14.8497C14.7339 14.9049 14.6445 14.9563 14.5529 15.0037C14.3727 15.0994 14.1736 15.1544 13.9698 15.1647C13.8403 15.1717 13.7108 15.1815 13.5806 15.1745C13.575 15.1745 13.183 15.1136 13.183 15.1136C12.1878 14.8518 11.2674 14.3614 10.495 13.6814C10.3368 13.5421 10.1905 13.3923 10.0407 13.2432C9.41771 12.6237 8.94731 11.9552 8.66171 11.3238C8.51553 11.0139 8.43656 10.6766 8.43001 10.334C8.42712 9.90899 8.56605 9.49516 8.82481 9.158C8.87591 9.0922 8.92421 9.0236 9.00751 8.9445C9.09641 8.8605 9.15241 8.8157 9.21331 8.7849C9.29428 8.74432 9.38261 8.72051 9.47301 8.7149L9.47371 8.7156Z"
      fill="#141414"
    />
  </svg>
);

const youtube = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.1"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
      fill="#141414"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0009 7.87464C17.5517 8.02577 17.9854 8.47108 18.1326 9.03659C18.4001 10.0615 18.4001 12.2 18.4001 12.2C18.4001 12.2 18.4001 14.3384 18.1326 15.3634C17.9854 15.9289 17.5517 16.3742 17.0009 16.5254C16.0028 16.8 12.0001 16.8 12.0001 16.8C12.0001 16.8 7.99741 16.8 6.99923 16.5254C6.44846 16.3742 6.01472 15.9289 5.86752 15.3634C5.6001 14.3384 5.6001 12.2 5.6001 12.2C5.6001 12.2 5.6001 10.0615 5.86752 9.03659C6.01472 8.47108 6.44846 8.02577 6.99923 7.87464C7.99741 7.59998 12.0001 7.59998 12.0001 7.59998C12.0001 7.59998 16.0028 7.59998 17.0009 7.87464ZM10.8001 10.3999V14.3999L14.0001 12.4L10.8001 10.3999Z"
      fill="#141414"
    />
  </svg>
);
