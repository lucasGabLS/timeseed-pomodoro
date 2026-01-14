import type { JSX } from "react";
import styles from "@/components/actionButton/ActionButton.module.css";
import { FlameIcon, PlayIcon } from "lucide-react";

type ActionButtonProps = {
    isRunning?: boolean
};

export default function ActionButton({ isRunning }: ActionButtonProps): JSX.Element {
    const buttonStyle = isRunning ? styles.flame : styles.play; 
    
    return (
        <button className={`${styles.actionButton} ${buttonStyle}`}>
            {isRunning ? <FlameIcon /> : <PlayIcon />}
        </button>
    );
}