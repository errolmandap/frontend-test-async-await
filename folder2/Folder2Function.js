function Folder2Function (data, result) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        result.push(...data);
        resolve(result);
      } else {
        reject('error');
      }
    }, 500);
  });

  return promise;
}

export default Folder2Function;