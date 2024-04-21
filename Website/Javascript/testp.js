

function submit() {
html = document.querySelector("html")
range = document.querySelector("#range")
textp = document.querySelector("#vrange").innerHTML
texti = document.querySelector("#itext").innerHTML

textp = "value of " + range.id + ": " + range.value

document.querySelector("#vrange").innerHTML = textp

range.value = ""
}

function reset() {

    range.value = ""
    textp = "value of range: None"

    document.querySelector("#vrange").innerHTML = textp


}

i = 1
    
function changet() {
    if (i == 1) {
        range.type = "text"
    }
    if (i == 2) {
        range.type = "range"
    }
    if (i == 3) {
        range.type = "file"
    }
    if (i == 4) {
        range.type = "date"
    }
    if (i == 5) {
        range.type = "time"
    }
   
    if (i > 4) {
        i = 0
    }
 i++
    texti = "value of i: " + range.type
    document.querySelector("#itext").innerHTML = texti
}