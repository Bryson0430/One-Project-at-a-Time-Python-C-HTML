

function submit() {
html = document.querySelector("html")
range = document.querySelector("#range")
text = document.querySelector("p").innerHTML

text = "value of " + range.id + ": " + range.value

document.querySelector("p").innerHTML = text
}

function reset() {
    text = "value of range: None"

    document.querySelector("p").innerHTML = text


}