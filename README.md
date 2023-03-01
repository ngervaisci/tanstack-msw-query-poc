# tanstack-msw-query-poc

## Important reading

[Practical React Query](https://tkdodo.eu/blog/practical-react-query)

[Testing React Query](https://tkdodo.eu/blog/testing-react-query)

[MSW Docs](https://mswjs.io/docs/)

[React Query Quickstart](https://tanstack.com/query/v4/docs/react/quick-start)

Fairly quick and contrived example of msw and react-query

The setupTests.ts is a setup file that instantiates a mock service worker that creates the context that the tests run in, in [MSW](https://github.com/mswjs/examples/blob/master/examples/rest-react/src/setupTests.js)

utils.ts contains a bunch of helper functions taken from [here](https://github.com/TkDodo/testing-react-query) that help to facilitate 
wrapping components/hooks in the provider need to render tests.

The tests for components use that mocked service worker to set the API responses at test run time.

# Todo

Do some basic hook examples using createWrapper

Set up dev mode service handler

