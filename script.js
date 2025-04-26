// DOM Elements
const searchInput = document.getElementById('searchInput');

// Buttons
const searchButton = document.getElementById('searchBtn');
const addItemBtn = document.getElementById('addItemBtn');

// Dropdowns
const searchBy = document.getElementById('searchBy');
const sortBy = document.getElementById('sortBy');

// Modals
const addModal = document.getElementById('addModal');
const closeAddModal = document.getElementById('closeAddModal');
const closeEditModal = document.getElementById('closeEditModal');
const editModal = document.getElementById('editModal');

// Forms
const addItemForm = document.getElementById('addItemForm');
const editItemForm = document.getElementById('editItemForm');

const inventoryBody = document.getElementById('inventoryBody');

// Add Inputs
const itemImage = document.getElementById('itemImage');
const itemName = document.getElementById('itemName');
const itemDetails = document.getElementById('itemDetails');
const itemPrice = document.getElementById('itemPrice');
const itemQuantity = document.getElementById('itemQuantity');

// Edit Inputs
const editItemImage = document.getElementById('editItemImage');
const editItemName = document.getElementById('editItemName');
const editItemDetails = document.getElementById('editItemDetails');
const editItemPrice = document.getElementById('editItemPrice');
const editItemQuantity = document.getElementById('editItemQuantity');

// Event listeners
// input
// click
// onmousedown
// select
// change
// submit

// Inputs
//searchInput.addEventListener('input', handleSearchInput);

// Buttons
addItemBtn.addEventListener('click', handleAddItemBtnClick);
// searchButton.addEventListener('click', handleSearchButtonClick);

// Dropdowns
// searchBy.addEventListener('change', handleSearchByChange);
// sortBy.addEventListener('change', handleSortByChange);

// Forms
addItemForm.addEventListener('submit', handleAddItemFormSubmit);
// editItemForm.addEventListener('submit', handleEditItemFormSubmit);

// Images
// itemImage.addEventListener('change', handleItemImageChange);
// editItemImage.addEventListener('change', handleEditItemImageChange);

// Modals
closeAddModal.addEventListener('click', handleCloseAddModalClick);
// closeEditModal.addEventListener('click', handleCloseEditModalClick);

// Functions
function handleAddItemBtnClick() {
    addModal.style.display = "block";
    addModal.style.display = "flex";
}

function handleCloseAddModalClick() {
    addModal.style.display = "none";
}

function handleAddItemFormSubmit(e) {
    console.log(e);
    e.preventDefault();
    const newItem = {
        id: Date.now(),
        name: itemName,
        details: itemDetails,
        quantity: itemQuantity,
        price: itemPrice,
        dateAdded: new Date().toISOString(),
    };

    console.log(newItem);
}

// display table with existing products
// add product
// edit product