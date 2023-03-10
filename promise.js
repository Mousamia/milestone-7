const getSmth = new Promise((resolve, reject) => {
    resolve(12);
    reject("data Unavialble");

})

// console.log(getSmth);
// returns object

getSmth
    .then(data => console.log(data + 12))
    .catch(err => console.error("err", err))


