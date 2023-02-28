import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
}
export function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={() => onLogout()}>
                    Выйти
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={() => onToggleModal()}>
                Войти
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={() => onToggleModal()} />}

        </div>
    );
}
