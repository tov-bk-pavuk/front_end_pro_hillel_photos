export const displayAllThumbnails = function (photoObjects) {
  const thumbnailTemplate = document.querySelector("#picture")

  const fragment = document.createDocumentFragment()

  photoObjects.forEach((item) => {
    const pictureElement = thumbnailTemplate.cloneNode(true).content

    const pictureImg = pictureElement.querySelector(".picture__img")
    const pictureComments = pictureElement.querySelector(".picture__comments")
    const pictureLikes = pictureElement.querySelector(".picture__likes")

    pictureImg.id = item.id
    pictureImg.src = item.url
    pictureComments.innerText = item.comments.length
    pictureLikes.innerText = item.likes

    fragment.appendChild(pictureElement)
  })
  const imgUpload = document.querySelector(".img-upload")
  imgUpload.after(fragment)
}
