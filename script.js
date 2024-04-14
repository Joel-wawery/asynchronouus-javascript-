function sumAsync(num1, num2, callback) {
    const result = num1 + num2;
  
    // Generate random delay between 1 and 5 seconds
    const delay = Math.floor(Math.random() * 4000) + 1000;
  
    setTimeout(() => {
      // Call the callback function with the result after the delay
      callback(result);
    }, delay);
  }
  
  // Example usage
  sumAsync(5, 3, (sum) => {
    console.log("The sum is:", sum);
  });
  