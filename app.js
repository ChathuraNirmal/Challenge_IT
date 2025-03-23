alert("Guess No 0 to 10 ฅʕ•̫͡•ʔฅ");
let count = 0;

document.getElementById("b1").onclick = function () {
  let myNumber = document.getElementById("txt1").value;

  if (myNumber > 10) {
    alert("No is greater than 10");
  } else if (myNumber < 0) {
    alert("No is less than 0");
  } else {
    let Guess = Math.floor(Math.random() * 11);
    let noGuess = 1;
  
    console.log(count);

    if (document.getElementById("txt1").value == "") {
      alert("Empty");
      return;
    }

    if (count == 3) {
      document.getElementById("b1").disabled = true;
      alert("Rounds are Over");

      return;
    }
    count++;

  
      Guess = Math.floor(Math.random() * 11);

      if (Guess == myNumber) {
  
        alert(
          "Your number is " +
            myNumber +
            " it took " +
            noGuess +
            " times for me ≡(▔﹏▔)≡ "
        );
      } else {
        noGuess++;
  
        alert(myNumber>Guess ? "No is greater than guessed No" :"No is greater than guessed No")

    }
  }
};
