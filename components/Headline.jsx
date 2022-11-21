import styles from "../styles/Home.module.css";

export const HeadLine = (props) => {
  const { title, page } = props;
  console.log(props);
  return (
    <>
      <h1 className={styles.title}>{page} Page</h1>

      <p className={styles.description}>Get started by editing {props.code}</p>

      <button onClick={props.onClick}>click!!!</button>
    </>
  );
};
