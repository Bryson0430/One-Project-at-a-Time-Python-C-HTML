/**
 * This is a class about a book that can borrow
 */
class book {
    book(title, author, text) {
        if (typeof title === "string" && typeof author === "string" && typeof text === 'string') {
            this.title = title
            this.author = author
            this.text = text
        } else {
            TypeError("Must be a string")
        }
        
    }

    borrow(authornew) { 
        if (typeof authornew === "string") {
            this.author = authornew
        }
        else {
            TypeError("Must be a String")
        }
    }

    changeTitle(newTitle) {
        if (typeof newTitle === "string") {
            this.title = newTitle
        }
        else {
            TypeError("Must be a string")
        }
    }
}

boom = new book("title", "autghor", "hifuewshfsehdiseulhdseilhdwulhdiselhfiuhfihesfsuehifhsiulfhshufsilfhisfhsuefhsiflhsifhlsfhuisefuhsifhiseuhfisehfilshfisehfuishfishfueshufisehfuiesfil")

console.log(boom.text, boom.title, boom.author)