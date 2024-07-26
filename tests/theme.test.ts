import { getTheme, isDarkSchema, setTheme, themeIs } from '../src/theme';
test('Check theme scheam', () => {
    expect(typeof isDarkSchema === 'boolean').toBe(true)
})


test('Set theme', () => {

    let store: any;

    localStorage.setItem = function (key: string, value) {
        store = { [key]: value }
    }

    localStorage.getItem = function (key: string) {
        return store[key];
    }

    setTheme('dark');
    expect(themeIs('dark')).toBe(true)
    expect(themeIs('dark', getTheme())).toBe(true)
})