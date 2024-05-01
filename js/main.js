// API - aplication programming interfeysing

// console.log("Malumotlar so'rash...")

// setTimeout(() => {
//         console.log("Malumotlar tayyorlanmoqda....")

//         const BAckData = {
//                  server : "aws",
//                  port : "3000",
//                  status :200
//         }
//         setTimeout (() => {
//             console.log(BAckData)
//         },1000);
// },1000);



// Promise

// const request = new Promise ((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Malumot sorash")

//         setTimeout(() => {
//             console.log("Malumotlar tayyorlanmoqda....")
            
//         const BAckData = {
//                  server : "aws",
//                  port : "3000",
//                  status :200
//         }
//            resolve(BAckData)
//         },1000);
//     }, 1000);

// })

// request.then(data => {
//     console.log(data)
//     const requestUpdate = new Promise((resolve,reject) => {
//         setTimeout(() => {
//              data.modified = true
//              resolve(data)
//         }, 1000);
//     })
//     requestUpdate.then(clientUpdate => {
//         console.log('olinga malumotlar',clientUpdate)
//     })
// })



// status

//information 100 - 199
// success    200 - 299
// redirect   300- 399
// client error 400 - 499
// server error 500 - 599

// method 
// get (malumotlarni olish un)
// post (malumotlarni yaratish un)
//put (malumotlarni ozgartirish un)
// patch (malumotlarni ozgartirish un)
// delete (malumotlarni ochirish un)


//   XML


//  photos 

const url = "https://jsonplaceholder.typicode.com/photos";


const request = new XMLHttpRequest()
request.open("GET",url)
request.responseType = "json"
request.send()

request.addEventListener('load', () => {
    if(request.status) {
        // console.log(request.response)

        let data = request.response.slice(0,20)
        console.log(data)

        let container = document.querySelector('.container')

          for (let i = 0; i < data.length; i++) {
            console.log(data[i])

            let div = document.createElement('div')
            div.classList.add('card')
            
            div.innerHTML = `
             <img src = "${data[i].thumbnailUrl}" alt="">
             <h2>${data[i].title}</h2>

            
            `

            container.append(div)
            
          }
    }
})


//                 posts

const urlPosts = "https://jsonplaceholder.typicode.com/posts";


const posts = new XMLHttpRequest()
posts.open("GET",urlPosts)
posts.responseType = "json"
posts.send()

posts.addEventListener('load', () => {
    if(posts.status) {
        // console.log(request.response)

        let dataPosts = posts.response.slice(0,20)
        console.log(dataPosts)

        let container = document.querySelector('.container')

          for (let i = 0; i < dataPosts.length; i++) {
            console.log(dataPosts[i])

            let div = document.createElement('div')
            div.classList.add('card')
            
            div.innerHTML = `
             
             <h2>${dataPosts[i].title}</h2>

            
            `

            container.append(div)
            
          }
    }
})

//                           comments 

const urlComments = "https://jsonplaceholder.typicode.com/comments";


const comments = new XMLHttpRequest()
comments.open("GET",urlComments)
comments.responseType = "json"
comments.send()

comments.addEventListener('load', () => {
    if(comments.status) {
        // console.log(comments.response)

        let dataComments = comments.response.slice(0,20)
        console.log(dataComments)

        let container = document.querySelector('.container')

          for (let i = 0; i < dataComments.length; i++) {
            console.log(dataComments[i])

            let div = document.createElement('div')
            div.classList.add('card')
            
            div.innerHTML = `
             
             <h2>${dataComments[i].title}</h2>
              
          }
          

            
            `

            container.append(div)
            
          }
    }
})

//                               Albums 


const urlAlbums = "https://jsonplaceholder.typicode.com/albums";


const Albums = new XMLHttpRequest()
Albums.open("GET",urlAlbums )
Albums.responseType = "json"
Albums.send()

Albums.addEventListener('load', () => {
    if(Albums.status) {
        // console.log(comments.response)

        let dataAlbums = Albums.response.slice(0,30)
        console.log(dataAlbums )

        let container = document.querySelector('.container')

          for (let i = 0; i < dataAlbums.length; i++) {
            console.log(dataAlbums[i])

            let div = document.createElement('div')
            div.classList.add('card')
            
            div.innerHTML = `
             
             <h2>${dataAlbums[i].title}</h2>
              
          
            `

            container.append(div)
            
          }
    }
})


//                 Todos


const urlTodos = "https://jsonplaceholder.typicode.com/todos";


const todos = new XMLHttpRequest()
todos.open("GET",urlTodos )
todos.responseType = "json"
todos.send()

todos.addEventListener('load', () => {
    if(todos.status) {
        // console.log(comments.response)

        let dataTodos = todos.response.slice(0,15)
        console.log(dataTodos)

        let container = document.querySelector('.container')

          for (let i = 0; i < dataTodos.length; i++) {
            console.log(dataTodos[i])

            let div = document.createElement('div')
            div.classList.add('card')
            
            div.innerHTML = `
             
             <h2>${dataTodos[i].title}</h2>
              
          
            `

            container.append(div)
            
          }
    }
})