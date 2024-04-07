import { addSlash, home_url, toSeoURL, unSlash, unSlashL, unSlashR, urlToText } from '../src/url';

test('Text to SEO url', () => {
    expect(toSeoURL('Hello, world')).toBe('hello-world');
    expect(toSeoURL('My name is saeed')).toBe('my-name-is-saeed');
    expect(toSeoURL('I\'m Saeed')).toBe('im-saeed');
})

test('A SEO url to text', () => {
    expect(urlToText('hello-world')).toBe('hello world');
    expect(urlToText('my-name-is-saeed')).toBe('my name is saeed');
    expect(urlToText('im-saeed')).toBe('im saeed');
})

test('add slash at end of a url', () => {
    expect(addSlash('example.com')).toBe('example.com/');
    expect(addSlash('example.com/')).toBe('example.com/');
    expect(addSlash('/example.com/')).toBe('example.com/');
});
test('remove slash from a url', () => {
    expect(unSlash('/example.com/')).toBe('example.com');
    expect(unSlash('example.com/')).toBe('example.com');
    expect(unSlash('/example.com/')).toBe('example.com');
});

test('remove left slash from a url', () => {
    expect(unSlashL('/example.com/')).toBe('example.com/');
    expect(unSlashL('example.com/')).toBe('example.com/');
    expect(unSlashL('/example.com')).toBe('example.com');
});

test('remove right slash from a url', () => {
    expect(unSlashR('/example.com/')).toBe('/example.com');
    expect(unSlashR('/example.com')).toBe('/example.com');
    expect(unSlashR('example.com/')).toBe('example.com');
});

test('Get home/base url', () => {
    expect(home_url()).toBe('http://localhost');
    expect(home_url('/')).toBe('http://localhost/');
    expect(home_url(['hello', 'world'])).toBe('http://localhost/hello-world');
    expect(home_url(['hello', 'world'], '/')).toBe('http://localhost/hello/world');
});

