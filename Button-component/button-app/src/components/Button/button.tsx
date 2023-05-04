import { useState } from "react";
import styles from "./Button.module.css";

export default function Button(props: { buttonList: any[] }) {
  const buttonList = props.buttonList.map((button, index) => {
    return <button  key={index} className={styles.button}>
        {
            button.label
        }
        </button>;
  });
  return <div>{buttonList}</div>;
}
