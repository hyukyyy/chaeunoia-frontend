import styles from "../styles/Header.module.scss";
const Header = () => {
  const mainMenus = [
    {
      text: "menu1",
    },
    {
      text: "menu2",
    },
    {
      text: "menu3",
    },
    {
      text: "menu4",
    },
    {
      text: "menu5",
    },
  ];

  const infoMenus = [
    {
      text: "sign in",
    },
    {
      text: "log in",
    },

    {
      text: "my menu",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Chaeunoia</div>
      <div className={styles.mainMenuWrapper}>
        {mainMenus.map((menu) => {
          return <div className={styles.menuBox}>{menu.text}</div>;
        })}
      </div>
      <div className={styles.infoMenuWrapper}>
        {infoMenus.map((menu) => {
          return <div className={styles.menuBox}>{menu.text}</div>;
        })}
      </div>
    </div>
  );
};

export default Header;
