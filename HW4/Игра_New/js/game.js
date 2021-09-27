    var number = [];
    var attempts = 0;

    generateNumber();
    guessNumber();

    function generateNumber(){
      number = [];
      var min = 0;
      var max = 9;

      for(var i = 0; i < 4; i++){
        var part = Math.round(min + Math.random() * (max - min));

        if(i == 0){
          number[i] = part;
        }
        else{
          while(number.indexOf(part) != -1){
            part = Math.round(min + Math.random() * (max - min));
          }
          number[i] = part;
        }
      }
    }

    function guessNumber(){
      var result = prompt("Введите число (-1 - закончить игру)", 0);
      var gameIsRunning = true;
   /*   создал массив для записи резельтата хода*/
      var stroke = [];
      stroke.push(result);
   /*   создал массив для записи резельтата хода*/
      while(gameIsRunning){
        // выход из игры
        if(parseInt(result) == -1){
          gameIsRunning = false;
        }
        else if(parseInt(result) == 0 || isNaN(parseInt(result))){
          alert("Вы не ввели число");
          result = prompt("Введите число (-1 - закончить игру)", 0);
        }
        else{
          var answer = checkNumber(result);

          if(answer[0]){
//alert меняем на prompt чтобы ввести номер хода
            var history = prompt ("Поздравляем! Вы угадали число. Кол-во попыток: " + attempts + ". Введите номер хода чтобы узнать введенное число или введите 0 для полного вывода истории)");
            if (history > 0){
              history -= 1;
              alert("Результат хода: " + stroke[history]);
              }
              else {
                a = [];
                b = 0;
                for(i = 0;i < stroke.length;i++){

                  c = "Ход " + i + " Результат: " + stroke[b]+'\r\n';
                  b++;
                  a.push(c);
                }
                alert(a.join(''));
            }
            // останавливаем игру
            gameIsRunning = false;
          }
          else{
            // следующий ход
/*            Если число не угадано продолжаем записывать результаты*/
            result = prompt("Быки: " + answer[1] + " Коровы: " + answer[2] + " Введите число (-1 - закончить игру)", 0);
            stroke.push(result);
            console.log(stroke);
          }
        }
      }
    }

    function checkNumber(myresult){
      attempts++;
      var answer = [false, 0, 0];
      console.log(myresult);
      console.log(number);
      var ranks = myresult.split("");

      for(var i = 0; i < ranks.length; i++){
        if(parseInt(ranks[i]) == number[i]){
          answer[1]++;
        }
        else if(number.indexOf(parseInt(ranks[i])) != -1){
          answer[2]++;
        }
      }

      if(answer[1] == 4){
        answer[0] = true;
      }

      return answer;
    }