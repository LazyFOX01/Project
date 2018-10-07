
// Вытягиваем в ДЖ наш блок body, это нобязательно но для большей читаемости кода и правильности делам так
var bodyWrapp = document.getElementsByTagName('body')[0];
var headWrapp = document.getElementsByTagName('head')[0];
// Создаем наши блоки
var pirate = document.createElement('img');
var btn = document.createElement ('button');
var pirateText = document.createElement('p');

// Создаем "подключение шрифтов"
var fontStyle = document.createElement ('link');
// Счетчик количества бутылок
var bottleCounter = 5;
var gameCounter = 0;
// Подключаем шрифты
// Атрибуты лучше задавать через setAttribute(опять же читаемость кода и правильность)
fontStyle.setAttribute('rel','stylesheet');
fontStyle.setAttribute('href','https://fonts.googleapis.com/css?family=Old+Standard+TT:400i');
headWrapp.appendChild(fontStyle);

// Стилизация элементов
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


btn.innerText = "Star play"
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

pirate.setAttribute('src','https://cdn.pixabay.com/photo/2017/03/07/06/47/pirate-2123313_960_720.png');
pirate.style = ` width: 400px;`



pirateText.innerText = 'Start to play';
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

// Добавляем наши элементы непосредственно в body + обарачиваем их в дополнительные обертки для лучшей стилизации

function createBodyElements() {
    	var pirateWrap = document.createElement('div');
    	var pirateDiv = document.createElement('div');
    	var bottleDiv = document.createElement('div');

    // На самом деле не самое лучше решение , но наглядно и работает. Создаем в цикле 5 бутылок и раскидываем в соответствующий блок
      for(var i = 0; i < bottleCounter; i++) {
          var bottle = document.createElement('img');
        	bottle.setAttribute('src','http://xn--d1acksbebi.xn--p1ai/images/pirates/gift_bottle_300.png');
        	bottle.style = `width: 100px;
        	cursor: pointer;`
        	bottleDiv.appendChild(bottle);
      }
      pirateDiv.appendChild(pirate);

      pirateWrap.style = `display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;`;
      pirateWrap.appendChild(pirateDiv);
      pirateWrap.appendChild(bottleDiv);

      document.body.appendChild(pirateWrap);
      document.body.appendChild(btn);
      document.body.appendChild(pirateText);
}
// Вызываем функцию
createBodyElements();




// В массив можно просто все фразы по порядку запихать
let fraseArray = ["О-о-о! Добро пожаловать! Давно у нас в гостях не было пиратов Интернет морей, фрегат мне в бухту! Смотрю вы еще зеленые совсем. ",
"К себе в кабак мы пускаем только настоящих морсикх волков. А у вас еще молоко на губах не обсохло, что бы зваться пиратами.",
"С какого вы судна? С Дохлой Каракатицы?... Так это вы под Лютой Ириной ходили?!",
"Дам...ребят, я в свое время с ней шхуны с контрабандными гифками таскал...она мне глаз выколола за то что я якорь не так спустил...не зря Лютой кличут!",
"Это меняет дело, швартовы мне в глотку!  Давайте так, где ваш капитан? У нас для новичков есть небольшое испытание.",
"Для настоящего пирата, как известно, нужно уметь пить, и орать благим душевным.",
"Так, Кэп, смотри, у нас на входе стоят пять бутылок с ромом. Четыре из них пустые. За три попытки ты, по запаху должен угадать какая полная. Если угадываешь правильно, то вы спокойно проходите и пьете, сколько вашей душе угодно.",
"А ежели нет, то я лично выпру вас от сюда грязным веником!",
"Ну что, начинай"

]


btn.onclick = function(){

	pirateText.innerText = fraseArray[gameCounter];
	gameCounter++;
	// Не сильно понял как должны работать фразы, поэтому при достижении последней , разговоро начинается  с первой.
	if(gameCounter >= fraseArray.length) {
    function getRandom(){
			var rand = 1 + Math.random() * (5 + 1 - 1)
    	rand = Math.floor(rand)
    	return (rand)
		}
    createBodyElements.bottleDiv.onclick = function(){
      if ()
        pirateText.innerText = "Отлично, я знал, что у тебя получится! Давай, заводи своиг салаг в кабак и отдыхайте"
      else {
        pirateText.innerText = "Я говорил, что вы еще зеленые, а ну пошли вон! Что бы ноги вашей не было через 10 секунд!"
      }
    }

		// Вот тут уже вызываешь свою функцию , которая и запустить игру
	}

}
