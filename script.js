function calculateProtein() {
  const weight = parseFloat(document.getElementById("weightInput").value);
  const resultBox = document.getElementById("resultBox");
  const proteinRange = document.getElementById("proteinRange");

  if (!weight || weight <= 0) {
    alert("올바른 체중을 입력해주세요.");
    resultBox.classList.add("hidden");
    return;
  }

  const minProtein = (weight * 2).toFixed(1);
  const maxProtein = (weight * 3.5).toFixed(1);

  proteinRange.textContent = `${minProtein}g ~ ${maxProtein}g`;
  resultBox.classList.remove("hidden");
}
