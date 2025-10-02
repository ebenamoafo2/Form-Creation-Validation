
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

   try {

    const response = await fetch(apiUrl);
    const users = await response.json();

    //Clear the loading message
    dataContainer.innerHTML = "";

    //create and append user list 
    const userList = document.createElement("ul");

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
    });

    dataContainer.appendChild(userList);

    console.log(users);
   }catch(error) {
    console.error('Error fetching user data:', error);
    dataContainer.textContent = "Failed to load user data.";

   }

    
}
// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
