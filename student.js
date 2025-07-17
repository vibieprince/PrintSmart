// student.js
const form = document.getElementById("orderForm");
const shopName = localStorage.getItem("shopName");
const studentEmail = localStorage.getItem("email");

if (!shopName || !studentEmail) {
  alert("Please login as student.");
  window.location.href = "login-student.html";
}

document.getElementById("shopDisplay").innerText = shopName;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const order = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    printType: document.getElementById("printType").value,
    printSize: document.getElementById("printSize").value,
    copies: document.getElementById("copies").value,
    fileURL: document.getElementById("fileURL").value,
    studentEmail: studentEmail,
    status: "pending",
    timestamp: Date.now(),
    orderId: "PS-" + Date.now()
  };

  // Store order in localStorage under the shop name
  let allOrders = JSON.parse(localStorage.getItem(`orders-${shopName}`)) || [];
  allOrders.push(order);
  localStorage.setItem(`orders-${shopName}`, JSON.stringify(allOrders));

  alert("Order submitted successfully!");
  localStorage.setItem("lastOrderId", order.orderId); // track latest
  form.reset();
  window.location.href = "track.html"; // redirect

});
