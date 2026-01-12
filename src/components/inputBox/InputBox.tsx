import styles from "@/components/inputBox/InputBox.module.css";
import type React from "react";
import type { JSX } from "react";

type InputBoxProps = {
    label?: string,
    id?: string
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string,
    isDisabled?: boolean,
    defaultValue?: string
}

export default function InputBox(props: InputBoxProps): JSX.Element {
    return (
        <div className={styles.inputBox}>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <input
                id={props.id}
                type={props.type ?? "text"}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                disabled={props.isDisabled}
            / >
        </div>
    );
}