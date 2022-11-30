'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = lang => {
    const result = {
      player: 0,
      computer: 0,
    };
    
    const eng = lang === 'ENG' || lang === 'EN';
    const figures = eng ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const random = getRandomIntInclusive(0, 2);
      const computerChoice = figures[random];
      const text = eng ? prompt("Rock, paper or scissors?") : prompt("Камень, ножницы или бумага?");
      const playerChoice = figures.find(elem => elem.startsWith(text));

      if (text === null) {
        const escape = eng ? confirm('Do you really want to escape?') : confirm('Вы точно хотите завершить игру?');
        if (escape) {
          if (eng) {
            alert(`Computer scores: ${result.computer}\nPlayer scores: ${result.player}`);
          } else {
            alert(`Компьютер: ${result.computer}\nИгрок: ${result.player}`);
          }
          return;
        } else {
          start();
        }
      }

      if (text === '' || playerChoice === undefined) {
        return start();
      }

      if (eng) {
        alert(`Computer: ${computerChoice}\nPlayer: ${playerChoice}`);
      } else {
        alert(`Компьютер: ${computerChoice}\nИгрок: ${playerChoice}`);
      }

      const computerIndex = figures.indexOf(computerChoice);
      const playerIndex = figures.indexOf(playerChoice);

      if (computerIndex === 0 && playerIndex === figures.length - 1) {
        if (eng) {
          alert(`You won!`);
        } else {
          alert('Вы выиграли!');
        }
        result.player++;
      } else if (playerIndex === 0 && computerIndex === figures.length - 1) {
        if (eng) {
          alert(`Computer won!`);
        } else {
          alert('Компьютер выиграл!');
        }
        result.computer++;
      } else if (playerIndex < computerIndex) {
        if (eng) {
          alert(`You won!`);
        } else {
          alert('Вы выиграли!');
        }
        result.player++;
      } else if (computerIndex < playerIndex) {
        if (eng) {
          alert(`Computer won!`);
        } else {
          alert('Компьютер выиграл!');
        }
        result.computer++;
      } else {
        if (eng) {
          alert(`Draw!`);
        } else {
          alert('Ничья!');
        }
      }

      return start();
    };
  };

  window.RPS = game;
})();
