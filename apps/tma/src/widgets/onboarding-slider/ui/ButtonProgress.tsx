import styles from "@animman/tma/widgets/onboarding-slider/ui/buttonProgress.scss";

export default function ButtonProgress({ step }: { step: number }) {
  switch (step) {
    case 0: {
      return (
        <svg
          className={styles.progress}
          viewBox="0 0 150 150"
          width="80"
          height="80"
        >
          <path
            d="M 80 7 h 43 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    case 1: {
      return (
        <svg
          className={styles.progress}
          viewBox="0 0 150 150"
          width="80"
          height="80"
        >
          <path
            d="M 80 7 h 43 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            style={{ transform: "rotate(90deg)" }}
            d="M 80 -143 h 43 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            style={{ transform: "rotate(180deg)" }}
            d="M -75 -143 h 48 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    }
    default: {
      return (
        <svg
          className={styles.progress}
          viewBox="0 0 150 150"
          width="80"
          height="80"
        >
          <path
            d="M 80 7 h 43 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            style={{ transform: "rotate(90deg)" }}
            d="M 80 -143 h 43 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            style={{ transform: "rotate(180deg)" }}
            d="M -75 -143 h 48 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            style={{ transform: "rotate(270deg)" }}
            d="M -70 7 h 43 a 20 20 0 0 1 20 20 v 46"
            fill="none"
            stroke="#00cfe8"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    }
  }
}
