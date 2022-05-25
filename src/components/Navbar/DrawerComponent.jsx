import React from "react";
import styles from "../../styles/styles.module.css";
import { Insta, Twitter, Youtube } from "./NavbarIcons";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {whatsapp} from "./Navbar";

export default function DrawerComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={styles.first_adaptive}>
        <div className={styles.first_number}>
          <a href="tel:+996700005151">
            <span>+996 700 00 51 51</span>
          </a>
        </div>
        <div className={styles.second_adaptive}>
          <a
            href="https://www.instagram.com/ihsangroup.kg/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className={styles.icons}>
              <Insta />
            </div>
          </a>
          <a
            href="https://wa.me/+996700005151"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className={styles.icons}>
              {whatsapp}
            </div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCnfdcLSlbHlORf6fEx6RBAA"
            rel="noreferrer noopener"
            target="_blank"
          >
            <div className={styles.icons}>
              <Youtube />
            </div>
          </a>
        </div>
      </div>

      <div className={styles.third_adaptive}>
        <div className={styles.logo_ihs} />
        <Burger
          className={styles.burger_menu}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
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
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
          </MenuItem>
          <MenuItem onClick={handleClose}>
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
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

const Burger = (props) => (
  <svg
    {...props}
    style={{ transform: `rotate(-180deg)` }}
    width="24"
    height="19"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3002 3.7998H1.7002C0.900195 3.7998 0.200195 3.0998 0.200195 2.2998C0.200195 1.4998 0.900195 0.799805 1.7002 0.799805H22.3002C23.1002 0.799805 23.8002 1.4998 23.8002 2.2998C23.8002 3.0998 23.1002 3.7998 22.3002 3.7998Z"
      fill="#00512e"
    />
    <path
      d="M17.1002 11.0996H1.7002C0.900195 11.0996 0.200195 10.3996 0.200195 9.59961C0.200195 8.79961 0.900195 8.09961 1.7002 8.09961H17.1002C17.9002 8.09961 18.6002 8.79961 18.6002 9.59961C18.6002 10.4996 18.0002 11.0996 17.1002 11.0996Z"
      fill="#00512e"
    />
    <path
      d="M12.0002 18.5H1.7002C0.900195 18.5 0.200195 17.8 0.200195 17C0.200195 16.2 0.900195 15.5 1.7002 15.5H12.0002C12.8002 15.5 13.5002 16.2 13.5002 17C13.5002 17.8 12.8002 18.5 12.0002 18.5Z"
      fill="#00512e"
    />
  </svg>
);
