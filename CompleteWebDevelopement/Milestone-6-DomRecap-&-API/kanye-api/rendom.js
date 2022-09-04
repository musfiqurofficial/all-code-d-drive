const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}


const displayUsers = users => {
    const usersContainer = document.getElementById('user-conteiner');
    console.log(users)
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <img src="${user.picture.thumbnail}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Gender: ${user.gender}</p>
        `;
        usersContainer.appendChild(userDiv)
    }
}

loadUsers()