import { debounce } from './debounce';



describe('debounce function testing', () => {
  const callback = jest.fn();

  beforeEach(() => {
    // Reset in case there are more test cases depending on the same mock
    jest.useFakeTimers();
    callback.mockReset();
  });

  it('should call debounce after 10 seconds after being called 1k times', () => {
    const debouncedCallback = debounce(callback, 10);
    for (let i = 0; i < 1000; i++) {
      // Execute the debounced function
      debouncedCallback();
    }

    // Should not have been called yet since 10ms is not passed
    expect(callback).not.toHaveBeenCalled();

    // Fast forward time => 10ms will be passed
    jest.runAllTimers();

    // Now the callback should have been called exactly once
    expect(callback).toHaveBeenCalledTimes(1);
  });
});