// Fetch user data from the API
fetch("https://dummyjson.com/users")
    .then(response => response.json())
    .then(data => {
        console.log("First Five Users:");

        for (let i = 0; i < 5; i++) {
            console.log(data.users[i].firstName + " " + data.users[i].lastName);
        }
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    });