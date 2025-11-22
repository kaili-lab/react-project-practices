import styles from "./three-columns.module.css";
import sedans from "./design/icon-sedans.svg";
import suvs from "./design/icon-suvs.svg";
import luxury from "./design/icon-luxury.svg";

const ThreeColumns = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.sedans}`}>
          <div className={styles.icon}>
            <img src={sedans} alt="sedans" />
          </div>
          <h3 className={styles.title}>Sedans</h3>
          <p className={styles.desc}>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className={styles.btn}>Learn More</button>
        </div>
        <div className={`${styles.card} ${styles.suvs}`}>
          <div className={styles.icon}>
            <img src={suvs} alt="suvs" />
          </div>
          <h3 className={styles.title}>SUVs</h3>
          <p className={styles.desc}>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className={styles.btn}>Learn More</button>
        </div>
        <div className={`${styles.card} ${styles.luxury}`}>
          <div className={styles.icon}>
            <img src={luxury} alt="luxury" />
          </div>
          <h3 className={styles.title}>Luxury</h3>
          <p className={styles.desc}>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className={styles.btn}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumns;
