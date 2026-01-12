import type { JSX } from "react";
import DoneIconSvg from "@/assets/done.svg";
import styles from "@/components/flow/stageIcon/doneIcon/DoneIcon.module.css"

type DoneIconProps = {
    isVisible?: boolean
};

export default function DoneIcon({ isVisible }: DoneIconProps): JSX.Element {    
    return (
        <img
            src={DoneIconSvg}
            alt="Done"
            className={styles[isVisible ? "visible" : "hidden"]}
        /> 
    );
}