import type { JSX } from "react";
import styles from "@/components/flow/Flow.module.css";
import StageIcon from "@/components/flow/stageIcon/StageIcon";

export default function Flow(): JSX.Element {
    return (
        <div className={styles.flow}>
            <ul className={styles.flowBar}>
                <li className={styles.flowBarStageIcon}><StageIcon side="moon" isDone /></li>
                <li className={styles.flowBarStageIcon}><StageIcon side="sun" isDone /></li>
                <li className={styles.flowBarStageIcon}><StageIcon side="moon" /></li>
                <li className={styles.flowBarStageIcon}><StageIcon side="sun" /></li>
                <li className={styles.flowBarStageIcon}><StageIcon side="moon" /></li>
            </ul>
        </div>
    );
}