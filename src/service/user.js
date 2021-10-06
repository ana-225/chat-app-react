// fetch('https://chat-app-comes.herokuapp.com/auth', {
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( {

//             "email": email,
//             "password": pass,
//         })
//         .then((res) => res.json())
//         .then((res) => {
//             console.log( res );
//             let inMemoryToken = res.token;
//             console.log( inMemoryToken );
//             // { Authorization: `Bearer  ${ inMemoryToken }`; }
//             return inMemoryToken;
           
//         })
//         .catch(console.log)
//     }
    



//         fetch( "http://localhost:3000/users/login", {
//     . . .
//   } ).then( res => res.json() )
//        .then( res => {
//           console.log( res );
//           let inMemoryToken = res.token;

//           localStorage.setItem('user', JSON.stringify(res));