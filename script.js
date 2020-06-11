   const game = document.querySelector('.game');
    let result = document.querySelector('.result'),
    btnNew = document.querySelector('.new__game'),
    fields = document.querySelectorAll('.field'),
    move = false,
    count = 0;
    const circle = `
    <svg class="circle">
        <circle r='45'
         cx='58'
         cy='58'
         stroke='yellow'
         stroke-width='10'
         fill='none'
         stroke-linecap='round'/>
      </svg>`;
      const cross = `
      <svg class="cross">
        <line class="first" x1='15' y1='15', x2='100', y2='100' stroke='yellow' stroke-width='10' stroke-linecap='round'/> 
        <line class="second" x1='100' y1='15', x2='15', y2='100' stroke='yellow' stroke-width='10' stroke-linecap='round'/> 
      </svg>`;

      // const pause = ms => {
      //   return new Promise(r => setTimeout(() => r(), 2000))
      // }

      // Draw a Circle
      function makeCircle(obj) {
        
        
          obj.innerHTML = circle;
         
          obj.classList.add('o')
          obj.classList.add("used")
          count++
          let soundCircle = new Audio('audio/soundCircle.mp3');
          soundCircle.play()
        }
      

      
      // Draw a Cross
      function makeCross(obj) {
        
        
          obj.innerHTML = cross;
          obj.classList.add('x')
          obj.classList.add("used")
          count++
          let audio = new Audio('audio/mario.mp3');
          audio.play()
         }

      function init(event) {
        let tar = event.target;
          
          if(!move) makeCross(tar)
          else makeCircle(tar)
          move = !move
          
          win()  
        } 
        

      function newGame() {
        count = 0,
        result.textContent = '',
        move = false,
        fields.forEach(field => {
          field.classList.remove('x', 'o', 'active')
          field.innerHTML = ''
        })
        game.addEventListener('click', init)


      }

      function win() {
        const combination = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
        ]
  for(let i = 0; i < combination.length; i++) {
    if(fields[combination[i][0]].classList.contains('x') &&
      fields[combination[i][1]].classList.contains('x') &&
      fields[combination[i][2]].classList.contains('x')

      ) {
        
        setTimeout(() => {
          fields[combination[i][0]].classList.add('active');
          fields[combination[i][1]].classList.add('active');
          fields[combination[i][2]].classList.add('active');
          result.textContent = 'X win'
          
        }, 1500)
        game.removeEventListener('click', init)
      }

      else if(fields[combination[i][0]].classList.contains('o') &&
      fields[combination[i][1]].classList.contains('o') &&
      fields[combination[i][2]].classList.contains('o')

      ) {
       
        setTimeout(() => {
          fields[combination[i][0]].classList.add('active');
          fields[combination[i][1]].classList.add('active');
          fields[combination[i][2]].classList.add('active');
          res.textContent = 'O win'
         
        }, 1500)
        game.removeEventListener('click', init)
      }

      else if (count == 9) {
        setTimeout(() => {
          result.textContent = 'No winner'
          game.removeEventListener('click', init)
        }, 1499)
       
       
      }
     

  }        
      }

      btnNew.addEventListener('click', newGame);
      game.addEventListener('click', init)


