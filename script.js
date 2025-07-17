import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { firebaseConfig } from "./firebase-config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const printType = document.getElementById("printType").value;
  const printSize = document.getElementById("printSize").value;
  const copies = document.getElementById("copies").value;
  const fileURL = document.getElementById("fileURL").value;

  const orderData = {
    name,
    email,
    phone,
    printType,
    printSize,
    copies,
    fileURL
  };

  await push(ref(db, "orders"), orderData);

  alert("Order submitted!");
  document.getElementById("orderForm").reset();
});

