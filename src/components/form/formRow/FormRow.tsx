import type { JSX, ReactNode } from "react";
import styles from "@/components/form/formRow/FormRow.module.css"

type FormRowProps = {
    children: ReactNode
};

export default function FormRow({ children }: FormRowProps): JSX.Element {
    return (
        <div className={styles.formRow}>
            {children}
        </div>
    );
}