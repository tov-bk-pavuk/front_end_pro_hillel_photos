export const addPhotoFullView = function (photoObjects) {

  const modalWindow = document.querySelector("#picture_full_view")
  const body = document.querySelector("body")

  const dialogHandler = function (evt) {  // todo divide code to functions
    if (evt.target.className === "picture__img") {

      const modalWindowTemplate = document.querySelector(".big-picture")
      const modalWindowContent = modalWindowTemplate.cloneNode(true)

      modalWindowContent.classList.remove("hidden")

      const bigDiv = modalWindowContent.querySelector(".big-picture__img")
      const bigPictureImgTag = bigDiv.querySelector("img")

      const socialCaptionPhotoDescription = modalWindowContent.querySelector(".social__caption")
      const socialPictureAvatar = modalWindowContent.querySelector(".social__picture")
      const likesCount = modalWindowContent.querySelector(".likes-count")
      const commentsCount = modalWindowContent.querySelector(".comments-count")
      const socialComments = modalWindowContent.querySelector(".social__comments")

      // remove example comment from the template node
      const socialComment = modalWindowContent.querySelector(".social__comment")
      socialComment.remove()

      const socialCommentCount = modalWindowContent.querySelector(".social__comment-count")

      bigPictureImgTag.src = photoObjects[evt.target.id].url
      bigPictureImgTag.alt = photoObjects[evt.target.id].description
      socialCaptionPhotoDescription.innerText = photoObjects[evt.target.id].description
      socialPictureAvatar.src = photoObjects[evt.target.id].authorAvatar
      likesCount.innerText = photoObjects[evt.target.id].likes
      commentsCount.innerText = photoObjects[evt.target.id].comments.length
      socialCommentCount.style.display = "none"

      // filling comments block
      const comments = photoObjects[evt.target.id].comments
      const docFragment = document.createDocumentFragment()

      comments.forEach(comment => {
        const commentTemplate= socialComment.cloneNode(true)
        const socialPicture = commentTemplate.querySelector(".social__picture")
        const socialAuthor = commentTemplate.querySelector(".social__author")
        const socialText = commentTemplate.querySelector(".social__text")

        socialPicture.src = comment.avatar
        socialPicture.alt = comment.name
        socialAuthor.innerText = comment.name
        socialText.innerText = comment.message

        docFragment.appendChild(commentTemplate)
      })
      socialComments.appendChild(docFragment)
      modalWindow.appendChild(modalWindowContent)
      modalWindow.showModal()

      // prevent page scrolling
      body.classList.add("modal-open")
    }

    if (evt.target.id === "picture-cancel" || evt.key === 'Escape') {
      const sectionInModal = modalWindow.querySelector("section")
      sectionInModal.remove()
      modalWindow.close()

      // returning page scrolling
      body.classList.remove("modal-open")
    }
  }

  modalWindow.addEventListener("keydown", dialogHandler)
  document.addEventListener("click", dialogHandler)
}
