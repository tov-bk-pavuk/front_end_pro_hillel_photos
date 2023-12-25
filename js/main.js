import {photoDescriptions} from "./data_constants.js"
import {commentVariationsList} from "./data_constants.js"
import {authorsNamesList} from "./data_constants.js"

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
    comment.avatar = `../img/avatar-${counter}.svg`
    comment.message = commentVariationsList[randomInt(0, commentVariationsList.length)]
    comment.name = authorsNamesList[randomInt(0, authorsNamesList.length)]
    comments.push(comment)
  }
  return comments
}

const createPhotoObjects = function (photoAmountMinusOne) {
  const photoObjects = []
  for (let counter = 0; counter <= photoAmountMinusOne; counter++) {
    const photoObject = {
      "id": "",
      "url": "",
      "description": "",
      "likes": "",
      "comments": "",
    }
    photoObject.id = counter
    photoObject.url = `../photos/${counter + 1}.jpg`
    photoObject.description = photoDescriptions[counter]
    photoObject.likes = randomInt(1, 33)
    photoObject.comments = [...creatBulkOfComments(randomInt(1, 5))]
    photoObjects.push(photoObject)
  }
  return photoObjects
}

// const testObjects = createPhotoObjects(24)
// console.log(testObjects)
