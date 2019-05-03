/*
 * Create a list that holds all of your cards
 */
 
var MemoryArray=['fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb','fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb'];
var tempArray=[];
var counter=0;
var newArray= shuffle(MemoryArray);
var list = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
document.getElementsByClassName('restart')[0].addEventListener('click',restartFun);
var cnt=0;
var stars=3;


function restartFun()
{
	stars=3;
	cnt=0;
	tempArray=[];
	document.getElementsByClassName('score-panel')[0].innerHTML= '<ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li></ul><span class="moves">0</span> Moves<div class="restart"><i class="fa fa-repeat"></i></div>'; 
	
	document.getElementsByClassName('restart')[0].addEventListener('click',restartFun);
	counter = 0 ;
var newArray= shuffle(MemoryArray);
for(let i=0;i<list.length;i++)
{
	list[i].getElementsByTagName('i')[0].setAttribute('class',newArray[i]);
	list[i].setAttribute('class','card'); // add a class to close the cards
	
	list[i].getElementsByTagName('i')[0].setAttribute('id',i+1);
	var new_element = list[i].cloneNode(true);
    list[i].parentNode.replaceChild(new_element, list[i]);
	list[i].addEventListener('click',function Test(){
		list[i].setAttribute('class','card show open');
		
		if(tempArray.length===2)
		{
			tempArray=[];
		
		}
		if(tempArray.length===1)
		{
			counter++;
			if(counter>15 && counter <= 20)
			{
				stars=2;
					document.getElementsByClassName('score-panel')[0].innerHTML= '<ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star-o"></i></li></ul><span class="moves">0</span> Moves<div class="restart"><i class="fa fa-repeat"></i></div>'; 

			}
			if(counter > 20)
			{
				stars=1;
									document.getElementsByClassName('score-panel')[0].innerHTML= '<ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star-o"></i></li><li><i class="fa fa-star-o"></i></li></ul><span class="moves">0</span> Moves<div class="restart"><i class="fa fa-repeat"></i></div>'; 

			}
	document.getElementsByClassName('moves')[0].innerHTML=counter;
	if(tempArray[0].getAttribute('id')!==list[i].getElementsByTagName('i')[0].getAttribute('id') ){

	
			tempArray[1]=list[i].getElementsByTagName('i')[0];
			checkMatch();
	}
		
		}
		if(tempArray.length===0)
		{
			tempArray[0]=list[i].getElementsByTagName('i')[0];
		}
	});
	
	
	
}
}


for(let i=0;i<list.length;i++)
{
	
	counter = 0 ;
	list[i].getElementsByTagName('i')[0].setAttribute('class',newArray[i]);
	list[i].setAttribute('class','card'); // add a class to close the cards
	list[i].getElementsByTagName('i')[0].setAttribute('id',i+1); 

	list[i].addEventListener('click',function Test(){
		list[i].setAttribute('class','card show open');
		
		if(tempArray.length===2)
		{
			tempArray=[];
		
		}
		if(tempArray.length===1)
		{
			counter++;
			if(counter>15 && counter <= 20)
			{
				stars=2;
					document.getElementsByClassName('score-panel')[0].innerHTML= '<ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star-o"></i></li></ul><span class="moves">0</span> Moves<div class="restart"><i class="fa fa-repeat"></i></div>'; 

			}
			if(counter > 20)
			{
				stars=1;
									document.getElementsByClassName('score-panel')[0].innerHTML= '<ul class="stars"><li><i class="fa fa-star"></i></li><li><i class="fa fa-star-o"></i></li><li><i class="fa fa-star-o"></i></li></ul><span class="moves">0</span> Moves<div class="restart"><i class="fa fa-repeat"></i></div>'; 

			}
	document.getElementsByClassName('moves')[0].innerHTML=counter;
	if(tempArray[0].getAttribute('id')!==list[i].getElementsByTagName('i')[0].getAttribute('id') ){

		
			tempArray[1]=list[i].getElementsByTagName('i')[0];
			checkMatch();
			
			
	}
		
		}
		if(tempArray.length===0)
		{
			tempArray[0]=list[i].getElementsByTagName('i')[0];
		}
	});
	
	
}

 function checkMatch()
{
	setTimeout(function(){
	if((tempArray[0].getAttribute('class')===tempArray[1].getAttribute('class') ) )
	{
		if(tempArray[0].getAttribute('id')!==tempArray[1].getAttribute('id'))
		{
		tempArray[0].parentNode.setAttribute('class','card match');
		tempArray[1].parentNode.setAttribute('class','card match');
		cnt++;
		checkMatch1();
		
		
		var new_element = tempArray[0].parentNode.cloneNode(true);
        tempArray[0].parentNode.parentNode.replaceChild(new_element, tempArray[0].parentNode);
		var new_element2 = tempArray[1].parentNode.cloneNode(true);
		tempArray[1].parentNode.parentNode.replaceChild(new_element2, tempArray[1].parentNode);
		
		}
		
		
	}
	else
	{
		
		
		tempArray[0].parentNode.setAttribute('class','card');
		tempArray[1].parentNode.setAttribute('class','card');
	}
	} ,500);
	
}



function checkMatch1()
{
	if(cnt===8){
	var msg= 'with '+ counter +' moves and ' + stars +' stars '+'\n' +' Wooooooo!';
	
	swal({
		 title: "Congratulations! You Won!",
  text: msg,
  icon: "success",
  button: "Restart",
		
	}).then(function (isConfirm) {
		if (isConfirm) {
			restartFun();
		}
	})
	}

}



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
