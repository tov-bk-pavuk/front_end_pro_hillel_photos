import {photoDescriptions, commentVariationsList, authorsNamesList} from "./data_constants.js"
// import {commentVariationsList} from "./data_constants.js"
// import {authorsNamesList} from "./data_constants.js"

const randomInt = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const ID = function () {
  return crypto.randomUUID()
}


const creatBulkOfComments = function (amountOfComments) {
  const comments = []
  for (let counter = 1; counter <= amountOfComments; counter++) {
    const comment = {
      "id": "",
      "avatar": "",
      "message": "",
      "name": "",
    }
    comment.id = ID()
    comment.avatar = `../img/avatar-${counter}.svg` // change if we need more avatars
    comment.message = commentVariationsList[randomInt(0, commentVariationsList.length)]  // check ends of array
    comment.name = authorsNamesList[randomInt(0, authorsNamesList.length)]
    comments.push(comment)
  }
  return comments
}

const createPhotoObjects = function (photoAmount) {
  const photoObjects = []
  // for (let counter = 0; counter <= photoAmountMinusOne; counter++) {
  for (let counter = 0; counter < photoAmount; counter++) {
    const photoObject = {}  // consider to add into an object its values
    // const photoObject = {
    //   // "id": "",
    //   "id": "",
    //   "url": "",
    //   "description": "",
    //   "likes": "",
    //   "comments": "",
    // }
    photoObject.id = counter
    photoObject.url = `../photos/${counter + 1}.jpg`
    photoObject.description = photoDescriptions[counter]
    photoObject.likes = randomInt(1, 33)  // remove magic numbers
    photoObject.comments = [...creatBulkOfComments(randomInt(1, 5))] // check end values
    photoObjects.push(photoObject)
  }
  return photoObjects
}

const testObjects = createPhotoObjects(24)
console.log(testObjects)
