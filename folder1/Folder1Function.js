function Folder1Function (data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === 'test1') {
        resolve(data);
      } else {
        reject('error');
      }
    }, 2500);
  });

  return promise;
}

export default Folder1Function;