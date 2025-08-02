// global variables
const mainBalance = document.getElementById("main-balance");

// add money functionality
document.getElementById("add-money-btn").addEventListener("click", function () {
  const mainBalanceNumber = parseFloat(mainBalance.innerText);
  const moneyInput = document.getElementById("add-money-amount");
  const pinInput = document.getElementById("add-money-pin");
  const moneyValue = returnInputFieldValue("add-money-amount");
  const pinValue = returnInputFieldValue("add-money-pin");
  const transactionCard = document.getElementById("transaction-card");
  if (pinValue === 1234) {
    if (isNaN(moneyValue)) {
      alert("Invalid input. Please try again.");
      return;
    } else {
      const newBalance = mainBalanceNumber + moneyValue;
      mainBalance.innerText = newBalance;
      alert(
        `${moneyValue}$ is added to your account. Your new balance is ${newBalance}`
      );
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="history-card">
        <div class="w-8 h-8">
            <img
            class="w-full h-full"
            src="../assets/wallet1.png"
            alt=""/>
        </div>
        <div>
            <h5 class="font-semibold">Added ${moneyValue}$</h5>
            <p class="text-sm">Today 01:44 AM</p>
            </div>
            <span class="dot-icon"><i class="fa-solid fa-ellipsis-vertical"></i></span>
        </div>
      `;
      div.classList.add("w-[80%]");
      transactionCard.appendChild(div);
    }
  } else {
    alert("Invalid input. Please try again later.");
  }
  moneyInput.value = "";
  pinInput.value = "";
});

// cash out functionality
document.getElementById("cash-out-btn").addEventListener("click", function () {
  const mainBalanceNumber = parseFloat(mainBalance.innerText);
  const moneyInput = document.getElementById("cash-out-amount");
  const pinInput = document.getElementById("cash-out-pin");
  const moneyValue = returnInputFieldValue("cash-out-amount");
  const pinValue = returnInputFieldValue("cash-out-pin");
  const transactionCard = document.getElementById("transaction-card");
  if (pinValue === 1234) {
    if (isNaN(moneyValue)) {
      alert("Invalid input. Please try again later.");
      return;
    } else if (moneyValue > mainBalanceNumber) {
      alert("Insufficient balance. Please try again.");
    } else {
      const newBalance = mainBalanceNumber - moneyValue;
      mainBalance.innerText = newBalance;
      alert(
        `${moneyValue}$ is withdrawn from your account. Your new balance is ${newBalance}`
      );
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="history-card">
        <div class="w-8 h-8">
            <img
            class="w-full h-full"
            src="assets/wallet1.png"
            alt=""/>
        </div>
        <div>
            <h5 class="font-semibold">Withdrawn ${moneyValue}$</h5>
            <p class="text-sm">Today 01:44 AM</p>
            </div>
            <span class="dot-icon"><i class="fa-solid fa-ellipsis-vertical"></i></span>
        </div>
      `;
      div.classList.add("w-[80%]");
      transactionCard.appendChild(div);
    }
  } else {
    alert("Invalid input. Please try again.");
  }
  moneyInput.value = "";
  pinInput.value = "";
});

// showing section by clicking it's button

document.getElementById("add-money-section-btn").addEventListener("click", () => {
    showSection("add-money-container");
  });
document.getElementById('cash-out-section-btn').addEventListener("click", function(){
    showSection("cash-out-container")
})
document.getElementById('transfer-money-section-btn').addEventListener("click", function(){
    showSection("transfer-money-container")
})
document.getElementById('transaction-history-section-btn').addEventListener("click", function(){
    showSection("transaction-history-container")
})

// log out from account

document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href = '/index.html'
})
