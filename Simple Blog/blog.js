const images = document.querySelectorAll(".post-pic");
let imgSrc;

// get images src onclick
images.forEach(img => {
  img.addEventListener("click", e => {
    imgSrc = e.target.src;
    //run modal function
    imgModal(imgSrc);
  });
});
//creating the modal
let imgModal = src => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add modal to posts
  document.querySelector("#posts").append(modal);
  //add img to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //make close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times closeBtn");
  //close
  closeBtn.onclick = () => {
    modal.remove();
  };
  modal.append(newImage, closeBtn);
};
