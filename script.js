  let inventory = [
    { name: "Office Chair", details: "Ergonomic", quantity: 5, price: 60, type: "Furniture" },
    { name: "T-Shirt", details: "Cotton", quantity: 20, price: 15, type: "Clothing" },
    { name: "Notebook", details: "200 pages", quantity: 50, price: 3, type: "School Supplies" },
  ];

  let editIndex = null;

  const tbody = document.querySelector("#inventoryTable tbody");
  const categoryCheckboxes = document.querySelectorAll(".category");
  const sortOption = document.getElementById("sortOption");

  function renderTable(data) {
    tbody.innerHTML = "";
    data.forEach((item, index) => {
      tbody.innerHTML += `
        <tr>
          <td>${item.name}</td>
          <td>${item.details}</td>
          <td>${item.quantity}</td>
          <td>$${item.price}</td>
          <td>${item.type}</td>
          <td>
            <button class="action-btn edit-btn" onclick="editItem(${index})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteItem(${index})">Delete</button>
          </td>
        </tr>
      `;
    });
  }

  function filterAndSort() {
    let filtered = [...inventory];
    const selected = Array.from(categoryCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
    if (selected.length > 0) {
      filtered = filtered.filter(item => selected.includes(item.type));
    }

    switch (sortOption.value) {
  case "name-asc": filtered.sort((a, b) => a.name.localeCompare(b.name)); break;
  case "name-desc": filtered.sort((a, b) => b.name.localeCompare(a.name)); break;
  case "price-asc": filtered.sort((a, b) => a.price - b.price); break;
  case "price-desc": filtered.sort((a, b) => b.price - a.price); break;
  case "quantity-asc": filtered.sort((a, b) => a.quantity - b.quantity); break;
  case "quantity-desc": filtered.sort((a, b) => b.quantity - a.quantity); break;
}
    renderTable(filtered);
  }

  function openModal() {
    document.getElementById('itemModal').style.display = 'block';
}

// Close modal
function closeModal() {
    resetModal();
    document.getElementById('itemModal').style.display = 'none';
}

// Reset modal to default (add) mode
function resetModal() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemDetails').value = '';
    document.getElementById('itemQuantity').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemType').value = 'Toys';

    document.querySelector('#itemModal h2').textContent = 'Create Item';
    const addButton = document.querySelector('#itemModal button:nth-of-type(1)');
    addButton.textContent = 'Add';
    addButton.setAttribute('onclick', 'addItem()');
    editingIndex = null;
}


  function clearForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemDetails").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemType").value = "Furniture";
  }

  function submitItem() {
    const name = document.getElementById("itemName").value.trim();
    const details = document.getElementById("itemDetails").value.trim();
    const quantity = parseInt(document.getElementById("itemQuantity").value);
    const price = parseFloat(document.getElementById("itemPrice").value);
    const type = document.getElementById("itemType").value;

    if (!name || isNaN(quantity) || isNaN(price)) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const newItem = { name, details, quantity, price, type };

    if (editIndex !== null) {
      inventory[editIndex] = newItem;
    } else {
      inventory.push(newItem);
    }

    closeModal();
    filterAndSort();
  }

  function editItem(index) {
    const item = inventory[index];
    document.getElementById("itemName").value = item.name;
    document.getElementById("itemDetails").value = item.details;
    document.getElementById("itemQuantity").value = item.quantity;
    document.getElementById("itemPrice").value = item.price;
    document.getElementById("itemType").value = item.type;
    document.getElementById("modalTitle").innerText = "Edit Item";
    editIndex = index;
    document.getElementById("addModal").style.display = "block";
  }

  function deleteItem(index) {
    if (confirm("Are you sure you want to delete this item?")) {
      inventory.splice(index, 1);
      filterAndSort();
    }
  }

  categoryCheckboxes.forEach(cb => cb.addEventListener("change", filterAndSort));
  sortOption.addEventListener("change", filterAndSort);

  renderTable(inventory);
