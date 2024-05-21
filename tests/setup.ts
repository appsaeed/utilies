Object.defineProperty(global, "localStorage", {
    value: {
        getItem: jest.fn().mockReturnValue("hello world!")
    },
    writable: true
});

Object.defineProperty(global, 'location', {
    value: {
        host: 'example.com',
        protocol: 'http:',
        // Add other location properties if needed
    },
    writable: true, // Optional: Allows tests to modify mocked location (use with caution)
});