// script.js
function calculateProtein() {
  const weight = parseFloat(document.getElementById("weightInput").value);

  if (!weight || weight <= 0) {
    alert("올바른 체중을 입력하세요.");
    return;
  }

  const minProtein = (weight * 2).toFixed(1);
  const maxProtein = (weight * 3.5).toFixed(1);

  document.getElementById("result").innerHTML =
    `하루 단백질 권장량은 <strong>${minProtein}g</strong> ~ <strong>${maxProtein}g</strong> 입니다.`;
}
