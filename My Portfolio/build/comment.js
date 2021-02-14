let form = document.querySelector("#contact");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("comments").add({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    })
    form.name.value = ""
    form.email.value = ""
    form.message.value = ""
})