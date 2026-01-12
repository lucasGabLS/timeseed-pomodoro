import type { JSX } from "react";
import styles from "@/components/flow/Flow.module.css";
import StageIcon from "@/components/flow/stageIcon/StageIcon";

export default function Flow(): JSX.Element {
    return (
        <div className={styles.flow}>
            <ul>
                <li><StageIcon side="moon" isDone /></li>
                <li><StageIcon side="sun" isDone /></li>
                <li><StageIcon side="moon" /></li>
                <li><StageIcon side="sun" /></li>
                <li><StageIcon side="moon" /></li>
                <li><StageIcon side="sun" /></li>
            </ul>
        </div>
    );
}