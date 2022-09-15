const trigger = document.querySelectorAll("[data-modal-target]")
const modal = document.querySelectorAll(".modal")
const close = document.querySelectorAll(".modal-close")
const logo = document.querySelector("#logo")

trigger.forEach(credit => {
  credit.addEventListener("click", event => toggle(event.currentTarget.getAttribute("data-modal-target")));
});
close.forEach(credit => {
  credit.addEventListener("click", event => toggle(event.currentTarget.closest(".modal").id));
});
modal.forEach(credit => {
  credit.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggle(event.currentTarget.id);
  });
});


function toggle(modalId) {
  const modals = document.getElementById(modalId);

  if(getComputedStyle(modals).display==="flex") {  
    modals.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; 
      modals.classList.remove("modal-show", "modal-hide");
      modals.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden"; 
    modals.style.display = "flex";
    modals.classList.add("modal-show");
  }
}

