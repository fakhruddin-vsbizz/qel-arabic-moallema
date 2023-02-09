import React from "react";
import styles from "@/components/Login/LoginUser.module.css";
import LoginForm from "./LoginForm";

const LoginUser = () => {
  return (
    <div className={styles.loginMain}>
      <div className={styles.loginBox}>
        <div className={styles.imageBox}>
          <img src="" />
        </div>
        <div className={styles.textBox}>
          <h1 className={styles.headingSecondary}>Welcome</h1>
          <p className={styles.subText}>Please Sign-In To Your Account</p>
        </div>
        <div className={styles.inputFields}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
