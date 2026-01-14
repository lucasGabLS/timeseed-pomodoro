import type { JSX } from "react";
import FormRow from "@/components/form/formRow/FormRow";
import InputBox from "@/components/inputBox/InputBox";
import styles from "@/components/form/Form.module.css";
import Flow from "@/components/flow/Flow";
import ActionButton from "@/components/actionButton/ActionButton";

export default function Form(): JSX.Element {
    return (
        <div className={styles.form}>
            <FormRow>
                <InputBox
                    placeholder="Digite uma tarefa"
                    label="Task"
                />
            </FormRow>
            <FormRow>
                <Flow />
            </FormRow>
            <FormRow>
                <ActionButton />
            </FormRow>
        </div>
    );
}
