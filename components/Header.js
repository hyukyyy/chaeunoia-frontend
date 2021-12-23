import Link from "next/link";
import styles from "../styles/Header.module.scss";

const Header = () => {
  const mainMenus = [
    {
      text: "Introduction",
      url: "/intro/main",
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
      text: "QnA",
      url: "/qna/main",
    },
  ];

  const infoMenus = [
    {
      text: "sign in",
      url: "/auth/signin",
    },
    {
      text: "log in",
      url: "/auth/login",
    },
    {
      text: "my menu",
      url: "",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Link href="/">
          <a className={styles.linkText}>Chaeunoia</a>
        </Link>
      </div>
      <div className={styles.mainMenuWrapper}>
        {mainMenus.map((menu) => {
          return (
            <div key={menu.text} className={styles.menuBox}>
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
            <div key={menu.text} className={styles.menuBox}>
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
