const trigger = document.querySelectorAll("[data-modal-target]")
const modal = document.querySelectorAll(".modal")
const close = document.querySelectorAll(".modal-close")

trigger.forEach(zodiac => {
  zodiac.addEventListener("click", event => toggle(event.currentTarget.getAttribute("data-modal-target")));
});
close.forEach(zodiac => {
  zodiac.addEventListener("click", event => toggle(event.currentTarget.closest(".modal").id));
});
modal.forEach(zodiac => {
  zodiac.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggle(event.currentTarget.id);
  });
});


function toggle(modalId) {
  //toggled but anywhere else clicked will close
  const modals = document.getElementById(modalId);

  if(getComputedStyle(modals).display==="flex") {  
    modals.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; 
      modals.classList.remove("modal-show", "modal-hide");
      modals.style.display = "none";      
    }, 200);
    //This is the fading functionality 
  }
  else {
    document.body.style.overflow = "hidden"; 
    // Enable/disable page scrolling while modal is hidden/shown
    modals.style.display = "flex";
    modals.classList.add("modal-show");
  }
}