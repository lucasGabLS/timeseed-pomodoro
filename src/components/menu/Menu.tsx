import type { ComponentType, JSX, SVGProps } from "react";
import styles from "@/components/menu/Menu.module.css";
import MenuButton from "@/components/menu/menuButton/MenuButton";
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";

export default function Menu(): JSX.Element {
    const buttonsToRender: [ComponentType<SVGProps<SVGSVGElement>>, string?][] = [
        [HomeIcon],
        [HistoryIcon],
        [SunIcon],
        [SettingsIcon]
    ];
    
    return (
        <nav className={styles.menu}>
            {buttonsToRender.map((buttonToRender, index) => {
                return <MenuButton
                    key={index}
                    icon={buttonToRender[0]}
                    href={buttonToRender[1]}
                />
            })}
        </nav>
    )
}