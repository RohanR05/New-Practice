const hanldaDataLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayUser(data);
    });
};

const displayUser = (users) => {
  const userContainer = document.getElementById("lolo");

  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    userContainer.appendChild(li);
  }
};
