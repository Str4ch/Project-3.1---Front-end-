import "./cardImage.css"

export const cardImage = (cardImage) => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card-image")

    const img = new Image()
    img.src = cardImage ||
        "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
    img.setAttribute("alt", "avatarImage")

    cardDiv.appendChild(img)

    return cardDiv
}
