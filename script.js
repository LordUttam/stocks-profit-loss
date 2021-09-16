const initialPrice = document.querySelector("#initial-price");
const quantityInput = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const calcBtn = document.querySelector("#calculate");
const moodHero = document.querySelector("#mood-hero");
const resultDiv = document.querySelector("#result");
const avatarImage = document.querySelector("#avatar img");
const body = document.querySelector("body");

function changeTheme(theme) {
  if (theme == "happy") {
    let hero = document.createElement("IMG");
    hero.setAttribute("src", "./images/themes/happy.gif");
    moodHero.appendChild(hero);
    avatarImage.setAttribute("src", "./images/themes/avatar-happy.jpg");
  } else {
    let hero = document.createElement("IMG");
    hero.setAttribute("src", "./images/themes/sad.gif");
    moodHero.appendChild(hero);
    avatarImage.setAttribute("src", "./images/themes/avatar-sad.jpg");
  }
}

function showResult(str) {
  resultDiv.innerText = str;
}

function calculate() {
  let initial = Number(initialPrice.value);
  let current = Number(currentPrice.value);
  let quantity = Number(quantityInput.value);
  avatarImage.setAttribute("src", "./images/themes/avatar.jpg");
  moodHero.innerHTML = "";

  if (current == initial) {
    showResult(
      `You haven't made a profit yet. But on the bright side you haven't suffered any loss either. :)`
    );
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    profit = profit.toFixed(2);
    let profitPercentage =
      (((current - initial) * quantity) / (initial * quantity)) * 100;
    profitPercentage = profitPercentage.toFixed(2);

    showResult(
      `🙌 You profitted by ${profitPercentage}%. Your net profit is ₹${profit}. 📈`
    );
    if (profitPercentage > 50) {
      changeTheme("happy");
    }
  } else {
    let loss = (initial - current) * quantity;
    loss = loss.toFixed(2);
    let lossPercentage =
      (((initial - current) * quantity) / (initial * quantity)) * 100;
    lossPercentage = lossPercentage.toFixed(2);
    showResult(
      `🙁 You suffered a loss of ${lossPercentage}%. You lost ₹${loss}. 📉`
    );
    if (lossPercentage > 50) {
      changeTheme("loss");
    }
  }
}

function clickHandler() {
  if (
    initialPrice.value != "" &&
    currentPrice.value != "" &&
    quantityInput.value != ""
  ) {
    if (
      Number(initialPrice.value) > 0 &&
      Number(currentPrice.value) > 0 &&
      Number(quantityInput.value) > 0
    ) {
      calculate();
    } else {
      showResult(
        "You can not enter ZERO or NEGATIVE numbers as inputs. Try again with correct information."
      );
    }
  } else {
    showResult("Inputs can't be empty. You must fill something.");
  }
}

calcBtn.addEventListener("click", clickHandler);
