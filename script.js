document.getElementById("DecBtn").onclick = function () {
  let count = document.getElementById("CountLabel").textContent;
  count = Number(count);
  if (count > 0) count--;
  document.getElementById("CountLabel").textContent = count;
};
document.getElementById("ReBtn").onclick = function () {
  document.getElementById("CountLabel").textContent = 0;
};
document.getElementById("IncBtn").onclick = function () {
  let count = document.getElementById("CountLabel").textContent;
  count = Number(count);
  count++;
  document.getElementById("CountLabel").textContent = count;
};
