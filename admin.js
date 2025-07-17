// ✅ Access control for Shop Owner
const role = localStorage.getItem("role");
const shopName = localStorage.getItem("shopName");
const email = localStorage.getItem("email");

if (role !== "shop" || !shopName || !email) {
  alert("Please login as shop owner.");
  window.location.href = "login-shop.html";
}

document.getElementById("shopName").innerText = shopName;

function renderOrders() {
  let orders = JSON.parse(localStorage.getItem(`orders-${shopName}`)) || [];

  // Sort: pending at top, printed at bottom
  orders.sort((a, b) => {
    if (a.status === "printed" && b.status !== "printed") return 1;
    if (a.status !== "printed" && b.status === "printed") return -1;
    return a.timestamp - b.timestamp;
  });

  const ordersDiv = document.getElementById("orders");
  ordersDiv.innerHTML = "";

  orders.forEach((order, index) => {
    const div = document.createElement("div");
    div.className = "order";
    div.innerHTML = `
      <p><strong>Order ID:</strong> ${order.orderId}</p>
      <p><strong>Student Email:</strong> ${order.studentEmail}</p>
      <p><strong>Name:</strong> ${order.name}</p>
      <p><strong>Phone:</strong> ${order.phone}</p>
      <p><strong>Type:</strong> ${order.printType}</p>
      <p><strong>Size:</strong> ${order.printSize}</p>
      <p><strong>Copies:</strong> ${order.copies}</p>
      <a href="${order.fileURL}" target="_blank">Download File</a>
      <p><strong>Status:</strong> ${order.status}</p>
      ${order.status === "pending" ? `<button onclick="markPrinted(${index})">Mark as Printed</button>` : ""}
      <hr/>
    `;
    ordersDiv.appendChild(div);
  });
}

window.markPrinted = function (index) {
  let orders = JSON.parse(localStorage.getItem(`orders-${shopName}`)) || [];
  orders[index].status = "printed";
  localStorage.setItem(`orders-${shopName}`, JSON.stringify(orders));

  // Alert to student (placeholder logic)
  alert(`Email sent to: ${orders[index].studentEmail} — Your order ${orders[index].orderId} is printed.`);

  renderOrders();
};

renderOrders();
