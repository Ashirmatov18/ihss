import React, { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import youtube from "../../assets/img/youtube.png";
import styles from "../../styles/styles.module.css";
import { Button, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material";
import DrawerComponent from "./DrawerComponent.jsx";
import { Insta, Twitter, Vector } from "./NavbarIcons";

export default function Navbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <nav className={styles.burger_menu}>
      <div>
        <div className={styles.first_nav}>
          <ul className={styles.first_nav_logo}>
            <li>
              <div className={styles.first_mobile}>
                <span>+996 700 00 51 51</span>
                <Vector style={{ marginTop: "5px" }} />
              </div>
            </li>
            <div>
              <li className={styles.social_network}>
                <div className={styles.logo_social}>
                  <Insta />
                </div>
                <div className={styles.logo_social}>
                  <Twitter />
                </div>

                <div className={styles.logo_social}>
                  <Image src={youtube} alt="youtube" />
                </div>
              </li>
            </div>

            <li style={{ marginRight: "70px" }}>
              г. Бишкек, Раззакова / Боконбаева 113, БЦ “Альтаир”, 3-этаж.{" "}
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
                        <Typography variant="h6" color="inherit" component="a">
                          <img src="/img/main_logo.png" alt="" />
                        </Typography>
                      </Link>
                    </div>

                    <div className={styles.navbar_info}>
                      <Link href="/team" passHref>
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="a"
                        >
                          O нас
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
                    <div>
                      <Button
                        className={styles.button_construction}
                        variant="h6"
                        component="div"
                        style={{ pointerEvents: "none" }}
                      >
                        ihsan construction
                      </Button>
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
