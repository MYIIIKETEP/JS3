function performAction() {
  document.querySelector(".modal").classList.add("modal-applied");
}

function cancelAction() {
  document.querySelector(".modal").classList.add("modal-cancelled");
}

document.querySelector(".modal-button-right").addEventListener("click", performAction);
document.querySelector(".modal-button-left").addEventListener("click", cancelAction);
