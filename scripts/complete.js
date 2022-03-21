const completeButton = document.querySelectorAll("#border")

completeButton.forEach((index,ele,pepe) => {
   index.addEventListener("click", () => {
       const taskBox = document.querySelectorAll(".taskBox")
       taskBox.forEach((index,elem,pepem) => {
           pepem.forEach(index.remove())
       })
   })
});

