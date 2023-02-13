import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods and additional class', () => {
        const mods = { hovered: true, scrollable: false };
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', mods, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const mods: any = { hovered: true, scrollable: undefined };
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', mods, ['class1', 'class2']))
            .toBe(expected);
    });
});
