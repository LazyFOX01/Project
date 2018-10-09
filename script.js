var bodyWrapp = document.getElementsByTagName('body')[0]
var headWrapp = document.getElementsByTagName('head')[0]


var pirate = document.createElement('img')
var btn = document.createElement ('button')
var pirateText = document.createElement('p')


var fontStyle = document.createElement ('link')


var gameCounter = 0;
// счетчик попыток
var tryCounter = 1;



fontStyle.setAttribute('rel','stylesheet')
fontStyle.setAttribute('href','https://fonts.googleapis.com/css?family=Old+Standard+TT:400i')
headWrapp.appendChild(fontStyle)


bodyWrapp.style =
`
display: flex;
align-items: flex-end;
justify-content: center;
flex-flow: row wrap;
background-image: url(https://cdnb.artstation.com/p/assets/images/images/000/334/245/large/anthony-avon-tavern.jpg?1417635268);
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
`


btn.innerText = "Старт"
btn.style =
`
width: 200px;
height: 60px;
bacground-color: #e2e2e2;
border: 0;
border-radius: 10px;
cursor: pointer;
outline: 0;
`

pirate.setAttribute('src','https://github.com/LazyFOX01/Project/blob/master/pirate_PNG91.png')
pirate.style = ` width: 400px;`



pirateText.innerText = 'Нажми Старт';
pirateText.style =
`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 192px;
padding: 20px;
text-align: center;
background: #725e5e;
border: 6px solid darkred;
color: rgb(255, 255, 255);
font-size: 21px;
font-weight: 600;
`


var pirateWrap = document.createElement('div')
var pirateDiv = document.createElement('div')
var bottleDiv = document.createElement('div')

bottle1 = document.createElement('img')
bottle1.setAttribute('src','http://xn--d1acksbebi.xn--p1ai/images/pirates/gift_bottle_300.png')
bottle1.style = `width: 100px;
cursor: pointer;`
bottleDiv.appendChild(bottle1)
bottle1Number = 1

bottle2 = document.createElement('img')
bottle2.setAttribute('src','http://xn--d1acksbebi.xn--p1ai/images/pirates/gift_bottle_300.png')
bottle2.style = `width: 100px;
cursor: pointer;`
bottleDiv.appendChild(bottle2)
bottle2Number = 2

bottle3 = document.createElement('img')
bottle3.setAttribute('src','http://xn--d1acksbebi.xn--p1ai/images/pirates/gift_bottle_300.png')
bottle3.style = `width: 100px;
cursor: pointer;`
bottleDiv.appendChild(bottle3)
bottle3Number = 3

bottle4 = document.createElement('img')
bottle4.setAttribute('src','http://xn--d1acksbebi.xn--p1ai/images/pirates/gift_bottle_300.png')
bottle4.style = `width: 100px;
cursor: pointer;`
bottleDiv.appendChild(bottle4)
bottle4Number = 4

bottle5 = document.createElement('img')
bottle5.setAttribute('src','http://xn--d1acksbebi.xn--p1ai/images/pirates/gift_bottle_300.png')
bottle5.style = `width: 100px;
cursor: pointer;`
bottleDiv.appendChild(bottle5)
bottle5Number = 5


pirateDiv.appendChild(pirate)

pirateWrap.style = `display: flex;
justify-content: space-around;
align-items: center;
width: 100%;`;
pirateWrap.appendChild(pirateDiv)
pirateWrap.appendChild(bottleDiv)


document.body.appendChild(pirateWrap)
document.body.appendChild(btn)
document.body.appendChild(pirateText)





var fraseArray = ["О-о-о! Добро пожаловать! Давно у нас в гостях не было пиратов Интернет морей, фрегат мне в бухту! Смотрю вы еще зеленые совсем. ",
"К себе в кабак мы пускаем только настоящих морсикх волков. А у вас еще молоко на губах не обсохло, что бы зваться пиратами.",
"С какого вы судна? С Дохлой Каракатицы?... Так это вы под Лютой Ириной ходили?!",
"Дам...ребят, я в свое время с ней шхуны с контрабандными гифками таскал...она мне глаз выколола за то что я якорь не так спустил...не зря Лютой кличут!",
"Это меняет дело, швартовы мне в глотку!  Давайте так, где ваш капитан? У нас для новичков есть небольшое испытание.",
"Для настоящего пирата, как известно, нужно уметь пить, и орать благим душевным.",
"Так, Кэп, смотри, у нас на входе стоят пять бутылок с ромом. Четыре из них пустые. За три попытки ты, по запаху должен угадать какая полная. Если угадываешь правильно, то вы спокойно проходите и пьете, сколько вашей душе угодно.",
"А ежели нет, то я лично выпру вас от сюда грязным веником!",
"Ну что, начинай"

]


var rand = 1 + Math.random() * (5 + 1 - 1)
rand = Math.floor(rand)




btn.onclick = function(){
	pirateText.innerText = fraseArray[gameCounter]
	gameCounter++;
  if(gameCounter >= fraseArray.length)
   pirateText.innerText = "Да бутылку выбирай, что ты на кнопку жмешь"
}


bottle1.onclick = function(){
  if (rand === bottle1Number)
    pirateText.innerText = "Отлично, я знал, что у тебя получится! Давай, заводи своих салаг в кабак и отдыхайте"
  else
    pirateText.innerText = "Не-а, ищи дальше"


   checkTryCounter();
}

bottle2.onclick = function(){
  if (rand === bottle2Number)
    pirateText.innerText = "Отлично, я знал, что у тебя получится! Давай, заводи своих салаг в кабак и отдыхайте"
  else
    pirateText.innerText = "Почти угадал, но это ведь не считается"


   checkTryCounter();
}

bottle3.onclick = function(){
  if (rand === bottle3Number)
    pirateText.innerText = "Отлично, я знал, что у тебя получится! Давай, заводи своих салаг в кабак и отдыхайте"
  else
    pirateText.innerText = "Давай дальше, здесь пусто"


   checkTryCounter();
}

bottle4.onclick = function(){
  if (rand === bottle4Number)
    pirateText.innerText = "Отлично, я знал, что у тебя получится! Давай, заводи своих салаг в кабак и отдыхайте"
  else
    pirateText.innerText = "Эта пустая"


   checkTryCounter();
}

bottle5.onclick = function(){


  if (rand === bottle5Number)
    pirateText.innerText = "Отлично, я знал, что у тебя получится! Давай, заводи своих салаг в кабак и отдыхайте"
  else{
    pirateText.innerText = "Да что за невезение такое, давай дальше";
  }

   checkTryCounter();
}


function checkTryCounter() {

  if(tryCounter != 3) {
    tryCounter++;
    console.log(tryCounter);
  }
  else {
    pirateText.innerText = "Все, ребятки, вы не справились, что бы в течении 10 секунд ноги вашей здесь не было!";
  }
}
