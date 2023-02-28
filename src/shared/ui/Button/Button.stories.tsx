import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button',
    theme: ButtonTheme.CLEAR_INVERTED,
};
ClearInverted.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
};

export const SquareXl = Template.bind({});
SquareXl.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
