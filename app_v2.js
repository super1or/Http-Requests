const http = new CustomAjaxLib;

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Users Data
const data = {
    name: 'Danny Garsia',
    username: 'dannygarsia123',
    email: 'dannygarsia@gmail.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Update Post
// http.put('https://jsonplaceholder.typicode.com/users/5', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// Delete Post
http.delete('https://jsonplaceholder.typicode.com/users/1', data)
.then(data => console.log(data))
.catch(err => console.log(err));
