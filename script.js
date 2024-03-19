let CouleurFond = document.getElementById("CouleurFond");
let UrlImage = document.getElementById("UrlImage");
let summit = document.getElementById("summit");
let size = document.getElementById("ChangeSize");
let TextContent = document.getElementById("TextContent");
let content = document.getElementById("content");
let ColorText = document.getElementById("ColorText");
let text_error = document.getElementById("text_error");

let textElement = document.createElement("p");
textElement.textContent = "";
textElement.style.color = "red";
text_error.appendChild(textElement);

let optionValue = document.getElementById("ChangeSize");
let textSize; 

optionValue.addEventListener("click", function() {
    textSize = optionValue.value; 
    console.log(textSize);
});

document.getElementById('greetingForm').addEventListener('submit', function (e) {
    e.preventDefault();
  if (UrlImage.value.trim() == "") {
    textElement.innerHTML = "input vide";
    console.log("L'URL dell'immagine non è vuoto");
    UrlImage.classList.add("ecces");
    UrlImage.classList.add("border_red_input");
    setTimeout(() => {
      UrlImage.classList.remove("ecces");
    }, 300);
    TextContent.value = "";
    UrlImage.value = "";
    return;
  }
  if (UrlImage.value.slice(0, 8) !== "https://") {
    textElement.innerHTML = "error URL";
    // alert("not valid URL");
    console.log(
      "L'URL dell'immagine non inizia con 'https://' e quindi è sbagliato"
    );
    UrlImage.classList.add("ecces");
    setTimeout(() => {
      UrlImage.classList.remove("ecces");
    }, 300);
    TextContent.value = "";
    UrlImage.value = "";
    return;
  }
  textElement.innerHTML = "";
  output_img_InnerHTML();

});

function output_img_InnerHTML() {
  UrlImage.classList.remove("border_red_input");
  content.classList.add("active");
  let taille = textSize;
  content.innerHTML = `
        <div class="Backgroundimage" style="background-color: ${CouleurFond.value};">
            <img src="${UrlImage.value}" style="width: 400px;" alt="">
            <p class="text" style="font-size: ${taille}px; color: ${ColorText.value};">${TextContent.value}</p>
        </div>
    `;

  TextContent.value = "";
  UrlImage.value = "";
}


