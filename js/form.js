import {
  commentsMaxLength,
  hashTagRules,
  commentsMaxValueError
} from "./data_constants.js"

const body = document.querySelector("body")

export const UserPictureUploadHandler = function () {
  const newPictureUploadFormModalWindow = document.querySelector("#picture_upload_form")
  const newPictureUploadFormModalWindowTemplate = document.querySelector(".img-upload__overlay")
  const modalWindowContent = newPictureUploadFormModalWindowTemplate.cloneNode(true)
  newPictureUploadFormModalWindowTemplate.remove()

  modalWindowContent.classList.remove("hidden")
  newPictureUploadFormModalWindow.appendChild(modalWindowContent)

  const textHashtags = body.querySelector(".text__hashtags")
  const form = body.querySelector("#upload-select-image")
  const submitButton = body.querySelector("#upload-submit")

  const uploadFileInputValue = body.querySelector("#upload-file")
  const commentTextDescription = body.querySelector(".text__description")
  const closeModalButtonHandler = function (evt) {
    // prevent a modal window closing by pressing Esc while input
    if (evt.key === 'Escape' && evt.target.className === textHashtags.className || evt.key === 'Escape' && evt.target.className === commentTextDescription.className) {
      evt.preventDefault()

      //   closing a modal window by pressing Esc
    } else if (evt.key === 'Escape' || evt.target.id === "upload-cancel") {
      evt.preventDefault()
      console.log(uploadFileInputValue.value)
      uploadFileInputValue.value = null
      newPictureUploadFormModalWindow.close()
      // returning page scrolling
      body.classList.remove("modal-open")
    }
  }

  const UserPictureUploadEventHandler = function (evt) {
    if (evt.target.id === "upload-file") {
      newPictureUploadFormModalWindow.showModal()
      body.classList.add("modal-open")
    }
  }

  const clearFormValidity = function (evt) {
    if (textHashtags.checkValidity() === false) {
      textHashtags.setCustomValidity("")
    }
    if (commentTextDescription.checkValidity() === false) {
      commentTextDescription.setCustomValidity("")
    }
  }

  const validateFormHandler = function (evt) {

    let isValidHashTag = hashTagsValidation(textHashtags.value)
    console.log("isValidHashTag", isValidHashTag)
    if (isValidHashTag !== true) {
      evt.preventDefault()
      console.log(textHashtags.value.length)
      textHashtags.setCustomValidity(hashTagRules)
      textHashtags.reportValidity()
    }

    let isValidComment = commentsTagsValidation(commentTextDescription.value)
    console.log(commentTextDescription.value)
    console.log("isValidComment", isValidComment)
    if (isValidComment !== true) {
      evt.preventDefault()
      commentTextDescription.setCustomValidity(commentsMaxValueError)
      commentTextDescription.reportValidity()
    }

    if (isValidHashTag && isValidComment) {
      textHashtags.setCustomValidity("")
      commentTextDescription.setCustomValidity("")
      form.submit()
    }}

  body.addEventListener("change", UserPictureUploadEventHandler)
  body.addEventListener("click", closeModalButtonHandler)
  body.addEventListener("keydown", closeModalButtonHandler)
  form.addEventListener("submit", validateFormHandler)
  submitButton.addEventListener("click", clearFormValidity)
}

const hashTagsValidation = function (string) {
  if (string !== "") {
    let regex = /^#[A-Za-z0-9]+$/
    let res = string.trim().split(" ")
    res = res.map((hashTag) => (hashTag.toLowerCase()))
    let set = new Set(res)
    set.delete("")
    if (set.size > 5) {
      return false
    }
    for (const item of set) {
      if (!regex.test(item) || item.length > 20 || item.length === 1) {
        return false
      }
    }
  }
  return true
}
const commentsTagsValidation = function (string) {
  return string.length <= commentsMaxLength
}
