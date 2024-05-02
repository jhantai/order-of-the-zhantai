var btn3 = document.getElementById('first-answer')
var btn2 = document.getElementById("third-answer")
var btn = document.getElementById("second-answer");
var btn4 = document.getElementById("fourth-answer")


function clearTextarea() {
  document.getElementById("myTextarea").value = "";
  Swal.fire({
    title: "Успешно отправлено!",
    text: "С вами свяжется ментор или тех-поддержка!",
    icon: "success"
  });
}

var btns = document.querySelectorAll('[data-target]');


btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      
        var targetId = this.getAttribute("data-target");
        var targetElement = document.getElementById(targetId);
      
        if (targetElement.style.display === "none" || targetElement.style.display === "") {
            targetElement.style.display = "block";
        } else {
            targetElement.style.display = "none";
        }
    });
});


btn.addEventListener("click", function() {
  this.classList.add("active");
});


btn2.addEventListener("click" , function () {
  this.classList.add("not-right")
})

btn3.addEventListener("click" , function () {
  this.classList.add("not-right")
})
btn4.addEventListener("click" , function () {
  this.classList.add("not-right")
} )

function moveElement() {
  var element = document.querySelector('#cody-character');
  var currentLeft = parseInt(element.style.left) || 0;
  var currentTop = parseInt(element.style.top) || 0;


  var newX = currentLeft + 1150; 
  var newY = currentTop + 510;
  

  element.style.left = newX + 'px';
  element.style.top = newY + 'px';
 
}



    