function countDown(start) {
    while (start >= 0) {
      console.log(start);
      start--;
    }
  }
  countDown(10);
  
  function writeCards(names, eventName) {
      let thankYouMessages = [];
      
      for (let i = 0; i < names.length; i++) { 
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message); 
      }
      
      return thankYouMessages;
    }
