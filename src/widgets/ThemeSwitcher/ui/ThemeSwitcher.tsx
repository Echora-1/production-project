import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import IconThemeSwitcher from 'shared/assets/icons/theme-switcher.svg'
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string,
}
export function ThemeSwitcher({className}: ThemeSwitcherProps) {
    const {theme, toggleTheme} = useTheme()


    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <IconThemeSwitcher  />
        </Button>
    );
}