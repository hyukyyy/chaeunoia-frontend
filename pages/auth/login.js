import styles from "../../styles/Login.module.scss";
const login = () => {
  const handleLogin = () => {
    return;
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleLogin}>
        <div className={styles.title}>Log in</div>

        <div className={styles.inputWrapper}>
          <input name="id" />
          <input name="password" type="password" />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default login;
