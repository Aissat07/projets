const form = document.querySelector("form"),
    nextBnt = form.querySelector(".nextBnt"),
    backBnt = form.querySelector(".backBnt"),
    allInput = form.querySelectorAll(".first input");

nextBnt.addEventListener("click", () =>{
    allInput.forEach(input => {
        if (input.value != ""){
            form.classList.add('secActive');
        }else {
            form.classList.remove('secActive');
            // alert("input is empty")
        }
    })
})

backBnt.addEventListener("click", () => form.classList.remove('secActive'));