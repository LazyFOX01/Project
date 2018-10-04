document.body.style = `
    background-image: url(https://cdnb.artstation.com/p/assets/images/images/000/334/245/large/anthony-avon-tavern.jpg?1417635268);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
`
var pirate = document.createElement('img')
pirate.src = "https://cdn.pixabay.com/photo/2017/03/07/06/47/pirate-2123313_960_720.png"
document.body.appendChild(pirate)

var bottle = document.createElement('img')
bottle.src = 'http://xn--d1acksbebi.xn--p1ai/images/pirates/gift_bottle_300.png'
document.body.appendChild(bottle)

var style = document.createElement ( 'link' )
document.head.appendChild ( style )
style.rel = "stylesheet"
style.href = "https://fonts.googleapis.com/css?family=Old+Standard+TT:400i"

var btn = document.createElement ( 'button' )
btn.innerText = "OK"
btn.style = `
padding: 50px 100px 50px 100px;
`
document.body.appendChild ( btn )
