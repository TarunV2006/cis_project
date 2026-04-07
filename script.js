function addApp() {
    const input = document.getElementById("appName");
    const list = document.getElementById("list");

    if (input.value !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}