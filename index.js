const hanldaDataLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayUser(data);
    });
};

const displayUser = (user) => {
  console.log(user[0]);
  console.log("total user", user.length);
};
