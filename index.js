const hanldaDataLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayUser(data);
    });
};

const displayUser = (users) => {
 const container=document.getElementById("divvv");

 for(const user of users){
  const div=document.createElement("div");
  div.classList.add("card");
  div.innerHTML=`
  <div>  <p>${user.id}</p>
  <p>Name: ${user.name}</p>
  <p>Company Name: ${user.company.name}</p>
  <p>Email: ${user.email}</p>
  </div>

  `
  container.appendChild(div)
 }
};
