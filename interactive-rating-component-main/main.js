// Select A number
const numbers = document.querySelector(".numbers").querySelectorAll("li");

numbers.forEach(li =>{
    li.addEventListener("click", function(){
        // console.log(e.target.dataset.value);
        numbers.forEach(number => number.classList.remove("active"));
        
        this.classList.add("active");
    });

});