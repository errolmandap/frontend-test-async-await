function folder3Function (data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === 'test3') {
        resolve(data);
      } else {
        reject('error');
      }
    }, 2000);
  });

  return promise;
}

export { folder3Function };
