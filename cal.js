document.addEventListener('DOMContentLoaded', function(){


    //CREATE buttons

    
    const one = document.getElementById("1");
    const two = document.getElementById("2");
    const three = document.getElementById("3");
    const four = document.getElementById("4");
    const five = document.getElementById("5");
    const six = document.getElementById("6");
    const seven = document.getElementById("7");
    const eight = document.getElementById("8");
    const nine = document.getElementById("9");
    const zero = document.getElementById("0");
    const point = document.getElementById(".");
    const sub = document.getElementById("sub");
    const add = document.getElementById("add");
    const del = document.getElementById("del");
    const mul = document.getElementById("mul");
    const equ = document.getElementById("equ");
    const clear = document.getElementById("clear");
    const inputbox = document.getElementById("inputbox");
    

    //END
    //Create FUNCTIONS



    function ComputeStringExpression(expression) {


        // Проверяем, является ли выражение строкой


        if (typeof expression !== "string") {
          return "Не строка.";
        }
      
        try {
          const result = window.eval(expression);

          // Проверяем, что результат является числом

          if (typeof result !== "number") {
            return "Не число.";
          }
          return result;
        } catch (error) {
          return "Ошибка~.";
        }
      }
      

      function Add(params) {
        inputbox.textContent = inputbox.textContent + params
      }


    one.addEventListener('click', function Adb(){
        Add(1)
    });
    two.addEventListener("click", function Add2(){
        Add(2)
    });
    three.addEventListener("click", function Add3(){
        Add(3)
    });
    four.addEventListener("click", function Add4(){
        Add(4)
    });
    five.addEventListener("click", function Add5(){
        Add(5)
    });
    six.addEventListener("click", function Add6(){
        Add(6)
    });
    seven.addEventListener("click", function Add7(){
        Add(7)
    });
    eight.addEventListener("click", function Add8(){
        Add(8)
    });
    nine.addEventListener("click", function Add9(){
        Add(9)
    });
    zero.addEventListener("click", function Add0(){
        Add(0)
    });
    point.addEventListener("click", function Add01(){
        Add(".")
    });
    sub.addEventListener("click", function Add02(){
        Add("-")
    });
    add.addEventListener("click", function Add03(){
        Add("+")
    });
    del.addEventListener("click", function Add04(){
        Add("/")
    });
    mul.addEventListener("click",function Add05(){
        Add("*")
    });
    clear.addEventListener("click", function(){
        inputbox.textContent = ""
    });

    let a = ""
    equ.addEventListener('click', function Result(somes) {
        inputbox.textContent = (Math.round(ComputeStringExpression(inputbox.textContent) * 1_000_000)) / 1_000_000
    });

})