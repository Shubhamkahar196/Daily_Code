function measureSetTimeoutDelay(delay) {
    const startTime = Date.now();
    console.log(`setTimeout called at: ${startTime}`);

    setTimeout(() => {
        const endTime = Date.now();
        const actualDelay = endTime - startTime;
        console.log(`Callback executed at: ${endTime}`);
        console.log(`Expected delay: ${delay}ms`);
        console.log(`Actual delay: ${actualDelay}ms`);
        console.log(`Difference: ${actualDelay - delay}ms`);
    }, delay);
}

// Example usage: measure delay for 1000ms timeout
measureSetTimeoutDelay(1000);
