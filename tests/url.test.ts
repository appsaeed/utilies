import { pathJoin, queryTojson, unSlash, url } from '../src/url';

test('url unslash', () => {
    expect(unSlash('/example.com/')).toBe('example.com');
})

test('path join', () => {
    expect(pathJoin('example.com', 'hello', false, ['new', 'task'], { name: 'Saeed' }, 10))
        .toBe('example.com/hello/new/task/10')
})


test('Home url', () => {
    expect(url())
        .toBe('http://example.com')
})

test('Home url with hello', () => {
    expect(url('hello'))
        .toBe('http://example.com/hello')
})

test('Home url with hello world', () => {
    expect(url(['hello', 'world']))
        .toBe('http://example.com/hello/world')
})

test('Query string to json', () => {
    expect(queryTojson('name=Javascript&ext=js&founder=Brendan Eich'))
        .toEqual({ name: 'Javascript', ext: 'js', founder: 'Brendan Eich' })
})