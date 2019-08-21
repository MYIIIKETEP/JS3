function performAction() {
  document.querySelector(".modal").classList.add("modal-applied");
  ducument.querySelector(".modal").classList.remove("modal-cancelled");
}

function cancelAction() {
  document.querySelector(".modal").classList.add("modal-cancelled");
  document.querySelector(".modal").classList.remove("modal-applied");
}

document.querySelector(".modal-button-right").addEventListener("click", performAction);
document.querySelector(".modal-button-left").addEventListener("click", cancelAction);
