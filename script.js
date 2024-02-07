let $ = document
const input = $.querySelector("input")
const generateBtn = $.querySelector("button")
const wrapper = $.querySelector(".wrapper")
const QRCodeImg = $.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    if (input.value != "") {
        let URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`

        fetch(URL)
        QRCodeImg.setAttribute("src", URL)

        if (QRCodeImg.hasAttribute('src')) {
            wrapper.classList.add('active')
        }
    }
})

input.addEventListener("keydown", () => {
    if (QRCodeImg.hasAttribute('src')) {
        wrapper.classList.remove('active')
    }
})