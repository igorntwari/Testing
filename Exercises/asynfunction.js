// 2. **Asynchronous Code Testing**: Write a function named **`fetchUserData(userId)`**.
//  This function should simulate an API call to fetch user data, returning a Promise.

//     Write Jest tests to check the function’s response to different scenarios:

//     - Ensure the function handles a successful API call correctly.
//     - Verify the function appropriately manages an API call that fails.

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() < 0.5; 
        if (success) {
          const userData = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
          };
          resolve(userData);
        } else {
          const error = "An error occurred while fetching data"; 
          reject(error);
          console.log(error);
        }
      }, 1000);
    });
  }
exports.fetchUserData = fetchUserData
fetchUserData()
  .then(userData => {
    console.log(userData);
  })
  .catch(error => {
    console.log(error); 
  });