import styles from "./profile.module.css";
import bgPattern from "./bg-pattern-card.svg";
import avatar from "./image-victor.jpg";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.headerImg}>
          <img src={bgPattern} alt="background image" />
        </div>
        <div className={styles.avatarContainer}>
          {/* 这个用来在image的外层实现圆环 */}
          <div className={styles.avatarOuter}>
            {/* 这个div用来作为image的容器，实现圆的效果 */}
            <div className={styles.avatarInner}>
              <img src={avatar} alt="user avatar" />
            </div>
          </div>
        </div>
        <div className={styles.intro}>
          <div className={styles.info}>
            <span className={styles.name}>Victor Crest</span>
            <span className={styles.nameNumber}>26</span>
          </div>
          <p className={styles.city}>London</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.achive}>
          <div className={styles.media}>
            <p className={styles.mediaNumber}>80K</p>
            <p className={styles.mediaLabel}>Followers</p>
          </div>
          <div className={styles.media}>
            <p className={styles.mediaNumber}>803K</p>
            <p className={styles.mediaLabel}>Likes</p>
          </div>
          <div className={styles.media}>
            <p className={styles.mediaNumber}>1.4K</p>
            <p className={styles.mediaLabel}>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
