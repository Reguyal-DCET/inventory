// Inventory Management System Functionalities

// ========== DOM Elements ========== //
const tbody = document.querySelector("#inventoryTable tbody");
const categoryCheckboxes = document.querySelectorAll(".category");
const sortOption = document.getElementById("sortOption");
const searchInput = document.getElementById("searchInput");

const itemModal = document.getElementById("itemModal");
const itemName = document.getElementById("itemName");
const itemDetails = document.getElementById("itemDetails");
const itemQuantity = document.getElementById("itemQuantity");
const itemPrice = document.getElementById("itemPrice");
const itemType = document.getElementById("itemType");
const modalTitle = document.getElementById("modalTitle");

const openModalBtn = document.querySelector(".button-container button");
const modalAddBtn = document.querySelector("#itemModal button:nth-of-type(1)");
const modalCancelBtn = document.querySelector("#itemModal button:nth-of-type(2)");
