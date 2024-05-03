export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      return resolve({
        status: 200,
        body: 'Success',
      });
    } else if (success === false) {
      return reject('The fake API is not working currently');
    }
  });
}
