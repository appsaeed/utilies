Object.defineProperty(global, 'location', {
    value: {
        host: 'example.com',
        protocol: 'http:',
        // Add other location properties if needed
    },
    writable: true, // Optional: Allows tests to modify mocked location (use with caution)
});


// jest.setup.js
Object.defineProperty(globalThis, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

