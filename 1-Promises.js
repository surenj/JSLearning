let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
      resolve('Cleaned The Room');
    });
  };
  
  let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
      resolve(message + ' remove Garbage');
    });
  };
  
  let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
      resolve( message + ' won Icecream');
    });
  };
  
  //one promise after another.
  cleanRoom().then(function(result){
      return removeGarbage(result);
  }).then(function(result){
      return winIcecream(result);
  }).then(function(result){
      console.log('finished ' + result);
  })

  //Call all at a time and execute after all are completed. 
  Promise.all([cleanRoom,removeGarbage,winIcecream]).then().catch();
  
  //Call after any one is completed. 
  Promise.race([cleanRoom,removeGarbage,winIcecream]).then().catch();