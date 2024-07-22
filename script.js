document.getElementById('newUserBtn').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUser(user);
        })
        .catch(error => console.error('Error fetching user:', error));
}

function displayUser(user) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
    `;
}

// Fetch an initial user on page load
fetchUser();
