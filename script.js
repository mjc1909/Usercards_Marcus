
let outputForLoop = document.querySelector('.outputForLoop')
let outputObjectsInArray = document.querySelector('.outputObjectsInArray')


const container = document.querySelector(".container")

















let user = {
    img:'src="/img/400.jpg"' ,
    name: "Jens Hansen",
    username: "jhansen1963",
    email: 'jenshansen@yahoo.com',
    button:'Se Website'

}

console.log(user)
console.log(user.img)
console.log(user.name)
console.log(user.username)
console.log(user.email)
console.log(user.button)



let users = [
    
    {
        img:'src="/img/jens.jpg"' ,
        name: 'Jens Hansen',
        username: 'jhansen1963',
        email: 'jenshansen@yahoo.com',
        button:'Se Website'
    },
    {
        img:'src="/img/400.jpg"' ,
        name: 'Ole Olesen',
        username: 'Oolesen1963',
        email: 'OleOlesen@yahoo.com',
        button:'Se Website'
        
    },

    {
        img:'src="/img/Katrina.jpg"' ,
        name: 'Katrina Jensen',
        username: 'Kjensen1993',
        email: 'Kjensen@yahoo.com',
        button:'Se Website'
        
    },

    {
        img:'src="/img/åge.jpg"' ,
        name: 'Sara Kristensen',
        username: 'sarakristensen1983',
        email: 'sarakristensen@yahoo.com',
        button:'Se Website'
        
    },

    
    
]




users.forEach(user => {

outputObjectsInArray.innerHTML +=
`
<div class = accordion </div>
<img class = userimg ${user.img}</img>
<p> ${user.name}</p>
<p> ${user.username}</p>
<p> ${user.email}</p>
<button class = website <p SE WEBSITE </p>
 ${user.button}</button>
`
})



















