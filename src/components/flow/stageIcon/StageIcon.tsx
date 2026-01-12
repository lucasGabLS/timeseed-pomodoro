import type { JSX } from "react";
import SunIconSvg from "@/assets/sun.svg";
import MoonIconSvg from "@/assets/moon.svg";
import DoneIcon from "@/components/flow/stageIcon/doneIcon/DoneIcon";
import styles from "@/components/flow/stageIcon/StageIcon.module.css";

type StageIconDivProps = {
    side: "sun" | "moon",
    isDone?: boolean
};

export default function StageIcon({ side, isDone }: StageIconDivProps): JSX.Element {
    const stageIcon = isDone ? styles.doneStageIcon : styles.stageIcon;
    
    return (
        <div className={styles.stageIconDiv}>
            {side === "sun"
                ? <img className={stageIcon} src={SunIconSvg} alt="Sun" />
                : <img className={stageIcon} src={MoonIconSvg} alt="Moon" />}
            <DoneIcon isVisible={isDone} />
        </div>
    );
}