  const dayOfWeekText = ['Sunday',
						'Monday',
						'Tuesday',
						'Wensday',
						'Thursday',
						'Friday',
						'Saturday'];
		
  
  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.minute-hand');
  const hourHand = document.querySelector('.hour-hand');
  const timeText = document.querySelector('.time-text');
  const modeButton = document.querySelector('.mode-button');
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


	modeButton.addEventListener('click', (element) => {
			const html = document.querySelector('html');
			if (html.classList.contains('dark')) {
				html.classList.remove('dark');
				element.target.textContent = 'Dark mode'
			}
			else  {
				html.classList.add('dark');
				element.target.textContent = 'Light Mode';
			}
	})
	
  function setDate() {
    const now = new Date();
	const dayOfWeek = now.getDay();
	const date = now.getDate();
	const month = now.getMonth();
	


    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
	
	/*timeText.textContent = 
    ("0" + hour).substr(-2) + ":" + ("0" + mins).substr(-2) + ":" + ("0" + seconds).substr(-2) + ' ' + dayOfWeekText[dayOfWeek] ;*/
	
	timeText.textContent = `${now.toLocaleTimeString('en-GB')} \n ${now.toLocaleDateString('en-GB', options)}`;
	
	
}

  setInterval(setDate, 1000);

  setDate();