// fill one thumbnail with content from PhotoObject
const displayThumbnail = function (photoObject) {
  // finding template for our thumbnails
  const thumbnailTemplate = document.querySelector("#picture")
  // receiving content of the template
  const pictureElement = thumbnailTemplate.cloneNode(true).content
  // getting child elements
  const pictureImg = pictureElement.querySelector(".picture__img")
  const pictureComments = pictureElement.querySelector(".picture__comments")
  const pictureLikes = pictureElement.querySelector(".picture__likes")
  // mapping data from PhotoObject and thumbnail image
  pictureImg.src = photoObject.url
  pictureComments.innerText = photoObject.comments.length
  pictureLikes.innerText = photoObject.likes

  // finding element after which to add our thumbnail to the DOM
  const imgUpload = document.querySelector(".img-upload")
  // constructing fragment element to enhance our performance
  let fragment = document.createDocumentFragment()
  fragment.appendChild(pictureElement)
  imgUpload.after(fragment)
}

export const displayAllThumbnails = function (photoObjects) {
  photoObjects.map((item) => (displayThumbnail(item)))
}
