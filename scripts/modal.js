const taskBox = document.querySelectorAll(".taskBox")

const modal = document.querySelector(".modal")

function openModal () {
    modal.classList.add("active")
}

taskBox.forEach(index => {
    index.addEventListener("dblclick", openModal)
});

window.addEventListener("keyup",(e) => {
    var key = e.which || e.keyCode;
    if (key == 13 || key == 27) {
        modal.classList.remove("active")
    }
})