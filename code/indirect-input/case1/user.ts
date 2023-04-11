export function userAge() {
  // api
  //  return user.age
  return 4;
}

// api.js
export function fetchUserAge(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(18);
    }, 0);
  });
}



