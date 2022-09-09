import { useEditing, useTimer } from "../hooks/timer";
import styles from "../styles/Timer.module.css";

export function Timer() {
  const {
    timeElapsedMs,
    timeMissingMs,
    timeOverdueMs,
    timeMs,
    timeParts,
    timeElapsedParts,
    timeOverdueParts,
    timeMissingParts,
    running,
    setTimer,
    startTimer,
    resetTimer,
    pauseTimer,
  } = useTimer();

  return (
    <div className={styles.container}>
      {/* <div className={styles.excedente}>
                {timeOverdueParts.minutes}:{timeOverdueParts.seconds}
            </div> */}
      <div className={styles.tempoRoda}>
        <div
          className={styles.roda}
          style={{
            transform: `rotate(${
              (Number(timeElapsedMs) / Number(timeMs)) * 1800
            }deg)`,
          }}
        >
          <img src={"/images/ValveRoda.svg"} />
        </div>
        <div className={styles.tempo}>
          <div className={styles.restante}>
            {timeMissingMs > 0
              ? `${timeMissingParts.minutes
                  .toString()
                  .padStart(2, "0")}:${timeMissingParts.seconds
                  .toString()
                  .padStart(2, "0")}`
              : `${timeOverdueParts.minutes
                  .toString()
                  .padStart(2, "0")}:${timeOverdueParts.seconds
                  .toString()
                  .padStart(2, "0")}`}
          </div>
          <div className={styles.milliseconds}>
            {timeMissingMs > 0
              ? `${timeMissingParts.milliseconds.toString().padStart(3, "0")}`
              : `${timeOverdueParts.milliseconds.toString().padStart(3, "0")}`}
          </div>
        </div>
      </div>
      <div className={styles.butoes}>
        <div>
          <button onClick={resetTimer}>
            <img src={"/images/ReiniciarMelhor.svg"} />
          </button>
        </div>
        <div>
          <button onClick={startTimer}>
            <img src={"/images/PlayMelhor.svg"} />
          </button>
        </div>
        <div>
          <button onClick={pauseTimer}>
            <img src={"/images/PauseMelhor.svg"} />
          </button>
        </div>
      </div>
      <div className={styles.logo}>
        <img src={"/images/Valve_logo.svg"} />
      </div>
    </div>
  );
}
