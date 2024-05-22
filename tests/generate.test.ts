import { generateToken } from '../src/generate'
test('Generate token', () => {
    expect(generateToken(10).length).toBe(10)
})