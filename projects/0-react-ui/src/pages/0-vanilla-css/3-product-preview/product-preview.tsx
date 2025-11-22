import styles from "./product-preview.module.css";
import desktop from "./image-product-desktop.jpg";
import mobile from "./image-product-mobile.jpg";

const ProductPreview = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src={desktop}
            alt="product image"
            className={`${styles.productImg} ${styles.desktopImg}`}
          />
          <img
            src={mobile}
            alt="product image"
            className={`${styles.productImg} ${styles.mobileImg}`}
          />
        </div>
        <div className={styles.product}>
          <p className={styles.subTitle}>Perfume</p>
          <h2 className={styles.title}>Gabrielle Essence Eau De Parfum</h2>
          <p className={styles.desc}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={styles.price}>
            <span className={styles.currentPrice}>$149.99</span>
            <span className={styles.originalPrice}>$169.99</span>
          </div>
          <button className={styles.cta}>🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
