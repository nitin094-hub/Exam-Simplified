import React from 'react'
import styles from "../styles/SuccessMsg.module.scss";
import successImg from "../assets/correct.png";

function SuccessMsg({msg}) {
  return (
    <div className={styles.msgContainer}>
        <div className={styles.successImg}>
            <img src={successImg} alt="" />
        </div>
        <h2>{msg}</h2>
    </div>
  )
}

export default SuccessMsg
