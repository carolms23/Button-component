
import styles from "./Button.module.css";

export default function Button(props: { buttonList: string[] }) {
  const buttonList = props.buttonList.map((button, index) => {
    return <button  key={index} className={styles.button}>
        {
            button
        }
        </button>;
  });
  return <div>{buttonList}</div>;
}
