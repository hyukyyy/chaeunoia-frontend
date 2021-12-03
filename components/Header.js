import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const mainMenus = [
    {
      text: "menu1",
      url: "",
    },
    {
      text: "menu2",
      url: "",
    },
    {
      text: "menu3",
      url: "",
    },
    {
      text: "menu4",
      url: "",
    },
    {
      text: "menu5",
      url: "",
    },
  ];

  const infoMenus = [
    {
      text: "sign in",
      url: "",
    },
    {
      text: "log in",
      url: "",
    },
    {
      text: "my menu",
      url: "",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Chaeunoia</div>
      <div className={styles.mainMenuWrapper}>
        {mainMenus.map((menu) => {
          return (
            <div className={styles.menuBox}>
              <Link href={menu.url}>
                <a className={styles.linkText}>{menu.text}</a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.infoMenuWrapper}>
        {infoMenus.map((menu) => {
          return (
            <div className={styles.menuBox}>
              <Link href={menu.url}>
                <a className={styles.linkText}>{menu.text}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
