// Automatically calculate totals
function calculateTotals() {
  let subtotal = 0;
  const rows = document.querySelectorAll("#invoiceTable tbody tr");

  rows.forEach(row => {
    const qty = parseFloat(row.querySelector(".qty").value) || 0;
    const price = parseFloat(row.querySelector(".price").value) || 0;
    const amount = qty * price;
    row.querySelector(".amount").textContent = `$${amount.toFixed(2)}`;
    subtotal += amount;
  });

  const taxRate = parseFloat(document.getElementById("taxRate").value) || 0;
  const otherCosts = parseFloat(document.getElementById("otherCosts").value) || 0;

  const taxAmount = subtotal * (taxRate / 100);
  const total = subtotal + taxAmount + otherCosts;

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("totalCost").textContent = `$${total.toFixed(2)}`;
}

// Add new row
document.getElementById("addRow").addEventListener("click", () => {
  const tableBody = document.querySelector("#invoiceTable tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><input type="text" placeholder="Description"></td>
    <td><input type="number" class="qty" min="0" value="0"></td>
    <td><input type="number" class="price" min="0" step="0.01" value="0.00"></td>
    <td class="amount">$0.00</td>
  `;
  tableBody.appendChild(row);
  attachListeners();
});

// Update totals when any input changes
function attachListeners() {
  document.querySelectorAll(".qty, .price, #taxRate, #otherCosts").forEach(input => {
    input.removeEventListener("input", calculateTotals);
    input.addEventListener("input", calculateTotals);
  });
}

// Initialize
attachListeners();
