// function resposible for user login
export function userLogin(reqBody) {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/user/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(reqBody)
    }).then(res => res.json())
    .then((result) => {
      return resolve(result);
    })
    .catch((error) => {
       return reject(error);
    })
  })
}
//function to update user preference.
export function updatePreference(reqBody, token) {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API}/user/preference`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "authorization": `bearerHeader ${token}`
      },
      body: JSON.stringify(reqBody)
    }).then(res => res.json())
    .then((result) => {
      resolve(result)
    })
    .catch((error) => {
      reject(error)
    })
  })
}