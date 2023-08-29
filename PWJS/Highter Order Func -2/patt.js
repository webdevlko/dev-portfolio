function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  function delayedReverse(input) {
    setTimeout(() => {
      const reversed = reverseString(input);
      console.log(`Reversed string after 2 seconds: ${reversed}`);
    }, 2000);
  }
  
  const input = "Hello, World!";
  delayedReverse(input);
  