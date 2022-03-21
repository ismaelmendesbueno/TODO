const search = document.querySelector("#search");

const divApp = document.querySelector("#taskBoxDiv")

function createClienteOnDiv() {
    const div = document.createElement("div");
    const divBorder = document.createElement("div");
    const p = document.createElement("p")

    div.appendChild(divBorder)
    div.appendChild(p)

    div.classList.add("taskBox")
    divBorder.id = "border"
    divBorder.classList.add("border")

    p.innerText = search.value;
    divApp.appendChild(div)
}

search.addEventListener("keypress", function(e){
        
        if(e.key === "Enter") {
        if(e.target.value === "") {
            search.classList.add("error");
            search.value = "Não aceitamos campo vazio"
            return 
        }
        createClient(search.value)
        createClienteOnDiv()
    }
})

const getLocalStorageTask = () => JSON.parse(localStorage.getItem('db_client')) ?? [];

const readClientTask = () => getLocalStorageTask()



function onLoad() {
    readClientTask().forEach(index => {
        const div = document.createElement("div");
        const divBorder = document.createElement("div");
        const p = document.createElement("p")

        div.appendChild(divBorder)
        div.appendChild(p)

        div.classList.add("taskBox")
        divBorder.id = "border"
        divBorder.classList.add("border")

        p.innerText = index;
        divApp.appendChild(div)
    });

}

onLoad()

