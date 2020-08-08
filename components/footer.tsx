import styles from "../styles/Home.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Source Code Available on{" "}
        <b>
          <a href="https://github.com/343guiltyspark/ncheckers">
            github/343guiltyspark
          </a>
        </b>
      </p>
    </footer>
  );
};
