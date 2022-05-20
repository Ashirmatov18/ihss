import React, { useState } from "react";
import Image from "next/image";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import youtube from "../../assets/img/youtube.png";
import vector from "../../assets/img/Vector.png";
import styles from "../../styles/styles.module.css";
import { Button, useMediaQuery } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Link from "next/link";
import { useTheme } from "@mui/material";
import DrawerComponent from "./DrawerComponent.jsx";
import { Insta, Twitter, Vector } from "./NavbarIcons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "1ch",
      "&:focus": {
        width: "12ch",
      },
    },
  },
}));

export default function Navbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [style, setStyle] = useState({ backgroundColor: "white" });

  return (
    <nav className={styles.burger_menu} style={style}>
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
              <Image src={vector} />
            </li>
          </ul>
        </div>

        {isMatch ? (
          <DrawerComponent />
        ) : (
          <>
            <div style={style} className={styles.second_nav}>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar
                  elevation={0}
                  style={{ backgroundColor: "white", color: "black" }}
                  position="static"
                >
                  <Toolbar className={styles.toolbar}>
                    <div>
                      <Link href="/">
                        <Typography
                          variant="h6"
                          color="inherit"
                          component="div"
                        >
                          <img src="/img/main_logo.png" alt="" />
                        </Typography>
                      </Link>
                    </div>

                    <div className={styles.navbar_info}>
                      <Link href="/team">
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="div"
                        >
                          <span className={styles.popup_window}>lorem</span>О
                          нас
                        </Typography>
                      </Link>

                      <Link href="/programs">
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="div"
                        >
                          <span className={styles.popup_window}>lorem</span>
                          Программы
                        </Typography>
                      </Link>
                      <Link href="/news">
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="div"
                        >
                          <span className={styles.popup_window}>lorem</span>
                          Новости
                        </Typography>
                      </Link>
                      <Link href="/review">
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="div"
                        >
                          <span className={styles.popup_window}>lorem</span>
                          Отзывы
                        </Typography>
                      </Link>

                      <Link href="/contacts">
                        <Typography
                          className={styles.about}
                          variant="h6"
                          color="inherit"
                          component="div"
                        >
                          <span className={styles.popup_window}>lorem</span>
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

                    <div className={styles.search_icon}>
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
                    </div>
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
