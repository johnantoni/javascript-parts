function getTime(onSuccess, onFail) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      var didSucceed = Math.random() >= 0.5;
      didSucceed ? resolve(new Date()) : reject('error');
    }, 500);
  })
}

getTime()
  .then(currentTime => getTime())
  .then(currentTime => {
    console.log('time: ' + currentTime);
    return true;
  })
  .catch(err => console.log('there was an error: ' + err))

