console.log("hello");

document.getElementById("b1").onclick = function () {
  let myNumber = document.getElementById("txt1").value;

  if (myNumber > 10) {
    alert("No is greater than 10");
  } else if (myNumber < 0) {
    alert("No is less than 0");
  } else {
    let Guess = Math.floor(Math.random() * 11);
    let noGuess = 1;
    let gotIt = false;

    while (gotIt == false) {
      Guess = Math.floor(Math.random() * 11);

      if (Guess == myNumber) {
        gotIt = true;

        alert(
          "Your number is " +
            myNumber +
            " it took " +
            noGuess +
            " times for me ≡(▔﹏▔)≡ "
        );
      } else {
        noGuess++;
      }
    }
  }
};
