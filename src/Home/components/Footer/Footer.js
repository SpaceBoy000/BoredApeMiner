import React from "react";
import styles from "./Footer.module.css";
import { config } from "../../../config";
const Footer = () => {
  const footerArray = [
    { items: "AUDIT", to: "https://auditlink" },
    { items: "CONTRACT", to: config.scanLink },
    { items: "DISCORD", to: "https://discord.gg/" },
    { items: "TELEGRAM", to: "https://t.me/" },
    { items: "TWITTER", to: "https://twitter.com/" },
  ];

  return (
    <div className={styles.footer}>
      <div className="d-flex justify-content-center align-items-center">
        {footerArray.map((el, i) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={el.to}
            className={styles.footerItem}
            key={i}
          >
            {el.items}
          </a>
        ))}
      </div>
      <p className={styles.copyRight}>© CryptoPunk Team , All Rights Reserved</p>
    </div>
  );
};

export default Footer;
