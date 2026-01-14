import type { JSX, ReactNode } from "react";
import styles from "@/components/form/formRow/FormRow.module.css"

type FormRowProps = {
    children: ReactNode,
    isHidden?: boolean
};

export default function FormRow({ children, isHidden }: FormRowProps): JSX.Element | null {
    return (
        isHidden
            ? null
            : (<div className={styles.formRow}>
                {children}
              </div>)
    );
}