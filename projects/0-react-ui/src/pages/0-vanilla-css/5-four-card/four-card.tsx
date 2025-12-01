import styles from "./four-card.module.css";
import iconSupervisor from "./icon-supervisor.svg";
import teamBuilder from "./icon-team-builder.svg";
import karma from "./icon-karma.svg";
import calculator from "./icon-calculator.svg";

export default function FourCard() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.subTitle}>Reliable, efficient delivery</p>
          <h2 className={styles.title}>Powered by Technology</h2>
          <p className={styles.desc}>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>
        <main className={styles.main}>
          <Card
            title="Supervisor"
            content="Monitors activity to identify project roadblocks"
            icon={iconSupervisor}
            topColor="hsl(0, 78%, 62%)"
          />
          <div className={styles.cardTwo}>
            <Card
              title="Team Builder"
              content="Scans our talent network to create the optimal team for your project"
              icon={teamBuilder}
              topColor="hsl(180, 62%, 55%)"
            />
            <Card
              title="Karma"
              content="Regularly evaluates our talent to ensure quality"
              icon={karma}
              topColor="hsl(34, 97%, 64%)"
            />
          </div>
          <Card
            title="Calculator"
            content="Uses data from past projects to provide better delivery estimates"
            icon={calculator}
            topColor="hsl(212, 86%, 64%)"
          />
        </main>
      </div>
    </div>
  );
}

function Card({
  title,
  content,
  icon,
  topColor = "red",
}: {
  title: string;
  content: string;
  icon: string;
  topColor?: string;
}) {
  return (
    <div className={styles.card} style={{ borderTop: `solid 4px ${topColor}` }}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardContent}>{content}</p>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
  );
}
