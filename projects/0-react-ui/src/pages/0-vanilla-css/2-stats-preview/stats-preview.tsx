import styles from "./stats-preview.module.css";

export default function StatsPreview() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Get <span>insights</span> that help your business grow.
          </h2>
          <p className={styles.text}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className={styles.achive}>
            <div>
              <p className={styles.number}>10k+</p>
              <p className={styles.desc}>companies</p>
            </div>
            <div>
              <p className={styles.number}>314</p>
              <p className={styles.desc}>templates</p>
            </div>
            <div>
              <p className={styles.number}>12m+</p>
              <p className={styles.desc}>queries</p>
            </div>
          </div>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
}
