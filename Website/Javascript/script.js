del = document.querySelector("#delete")
create = document.querySelector("#create")
title = document.querySelector("#title")
body = document.querySelector("#body")

create.addEventListener("click", create)

function create() {
    sticky = createElement(div)
    pnew = createElement(p)
    tnew = createTextNode(title.value + body.value)
    pnew.appendChild(tnew)
    sticky.appendChild(pnew)

    create. = "hdhdhhd"

}
