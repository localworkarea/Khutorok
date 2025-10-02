import { addTouchAttr, addLoadedAttr, isMobile, FLS } from "@js/common/functions.js"
addLoadedAttr();
document.addEventListener("DOMContentLoaded", () => {
 const sectionWrapper = document.querySelector(".section-2__wrapper");
 if (sectionWrapper) {
   const parentSection = sectionWrapper.closest(".section--main");
   const sectionBody = document.querySelector(".section-2__body"); 
   const mainBtn = document.querySelector(".section-2__btn");
   const predictionBlock = document.querySelector(".prediction");
   const notesBlock = document.querySelector(".section-2__notes");
   const predictionBtn = document.getElementById("prediction");
   const predictionItems = document.querySelectorAll(".prediction__txt");
 
   
   function showRandom() {
     predictionItems.forEach(item => item.classList.remove("--active"));
 
     const randomIndex = Math.floor(Math.random() * predictionItems.length);
     predictionItems[randomIndex].classList.add("--active");
   }
 
   if (mainBtn) {
     mainBtn.addEventListener("click", () => {
 
       predictionBlock.style.display = "block";
       notesBlock.style.display = "block";
       parentSection.classList.add("--show");
 
       showRandom();
 
       mainBtn.style.display = "none";
     });
   }
 
   if (predictionBtn) {
     predictionBtn.addEventListener("click", () => {
       showRandom();
     });
   }
 }
});
