import styles from "./Headline.module.css";

export const HeadLine = (props) => {
  const { title, page } = props;
  console.log(props);
  return (
    <>
      <h1 className={styles.title}>{page} Page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
      <button onClick={props.onClick}>click!!!</button>
    </>
  );
};
