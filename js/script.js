'use strict'

// valid email
document.querySelector("#btn-submit").addEventListener("click", function() {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = String(document.querySelector("#email").textContent)
    const inputEmail = String(document.querySelector("#inputEmail").value)
    const emailHelp = document.querySelector("#emailHelp")

    if (!inputEmail) {
        emailHelp.textContent = "*Vui lòng nhập email"
        emailHelp.classList.add("invalid-email")
    } else if (!inputEmail.match(regex)) {
        emailHelp.textContent = "*Vui lòng nhập đúng định dạng email"
        emailHelp.classList.add("invalid-email")
    } else {
        if (inputEmail !== email.slice(6).trim()) {
            emailHelp.textContent = "*Email không chính xác"
            emailHelp.classList.add("invalid-email")
        } else {
            document.querySelector("#info").classList.remove("hide")
            document.querySelector("#input-form").classList.add("hide")
        }
    }
})

const otherItems = document.querySelectorAll(".other-item")

// add event visible view when focus mouse in other item
for (const otherItem of otherItems) {
    otherItem.addEventListener("mouseover", function() {
        this.querySelector(".control-view").classList.remove("invisible")
    })
    otherItem.addEventListener("mouseout", function() {
        this.querySelector(".control-view").classList.add("invisible")
    })
}

// inittial and add event hide item when click view
for (const otherItem of otherItems) {
    const view = otherItem.querySelector(".view")
    const otherDetails = otherItem.querySelector(".other-detail")

    otherDetails.classList.add("hide")
    view.innerHTML = `<span class="material-symbols-outlined">
                        arrow_drop_down
                      </span>View More`

    view.addEventListener("click", function() {
        if (otherDetails.classList.contains("hide")) {
            otherDetails.classList.remove("hide")
            view.innerHTML = `<span class="material-symbols-outlined">
                                arrow_drop_up
                              </span>View Less`
        } else {
            otherDetails.classList.add("hide")
            view.innerHTML = `<span class="material-symbols-outlined">
                                 arrow_drop_down
                               </span>View More`
        }
    })
}