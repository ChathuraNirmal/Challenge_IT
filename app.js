alert("Guess No 0 to 10 ฅʕ•̫͡•ʔฅ You ve 3 rounds t do it （￣︶￣）↗　");
let count = 0;

document.getElementById("b1").onclick = function () {
  if (document.getElementById("txt1").value == "") {
    alert("Empty");
    return;
  }

  let myNumber = document.getElementById("txt1").value;

  if (myNumber > 10) {
    alert("No is greater than 10");
  } else if (myNumber < 0) {
    alert("No is less than 0");
  } else {
    let Guess = Math.floor(Math.random() * 11);
    let noGuess = 1;

    console.log(count);

    if (count == 3) {
      document.getElementById("b1").disabled = true;
      alert("Rounds are Over");

      return;
    }
    count++;

     

    if (Guess == myNumber) {
      alert(
        "my number is " +
          myNumber +
          " you took " +
          noGuess +
          " times for guess ≡(▔﹏▔)≡ "
      );
    } else {
      noGuess++;

      alert(
        myNumber > Guess
          ? "No is greater than guessed No"
          : "No is Less than guessed No"
      );
    }
  }
};
