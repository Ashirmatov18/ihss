import React from "react";
import styles from "../../styles/styles.module.css";
import { Insta, Twitter, Youtube } from "./NavbarIcons";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function DrawerComponent() {
  return (
    <div>
      <div className={styles.first_adaptive}>
        {/* <ul className={styles.first_number}>
          <li>+996 700 00 51 51</li>
        </ul> */}
        <div className={styles.first_number}>
          <span>+996 700 00 51 51</span>
        </div>
        <div className={styles.second_adaptive}>
          <div className={styles.icons}>
            <Insta />
          </div>
          <div className={styles.icons}>
            <Twitter />
          </div>
          <div className={styles.icons}>
            <Youtube />
          </div>
          {/* <div className={styles.logo_social}>
                <Image src={youtube} alt="youtube" />
              </div> */}
        </div>
      </div>

      <div className={styles.third_adaptive}>
        <div className={styles.logo_ihs}></div>
        {/* <div>
          <Search className={styles.search_adaptive}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase inputProps={{ "aria-label": "search" }} />
          </Search>
        </div> */}
      </div>
    </div>
  );
}
