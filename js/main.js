import {photoDescriptions,
  commentVariationsList,
  authorsNamesList,
  likesMaxValue,
  commentsMaxValue,
} from "./data_constants.js"
import {displayAllThumbnails} from "./display_photos_thumbnails.js"

const randomInt = function (min, max) {
  min = Math.ceil(min)
  max = 1 + Math.floor(max)
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
    comment.avatar = `../img/avatar-${counter}.svg` // todo change if we need more avatars
    comment.message = commentVariationsList[randomInt(0, commentVariationsList.length)]
    comment.name = authorsNamesList[randomInt(0, authorsNamesList.length)]
    comments.push(comment)
  }
  return comments
}

const createPhotoObjects = function (photoAmount) {
  const photoObjects = []
  for (let counter = 0; counter < photoAmount; counter++) {
    const photoObject = {
      "id": counter,
      "url": `../photos/${counter + 1}.jpg`,
      "description": photoDescriptions[counter],
      "likes": randomInt(1, likesMaxValue),  // todo remove magic numbers,
      "comments": [...creatBulkOfComments(randomInt(1, commentsMaxValue))],
    }
    photoObjects.push(photoObject)
  }
  return photoObjects
}

// client code starts here
const testObjects = createPhotoObjects(25)
console.log(testObjects)

displayAllThumbnails(testObjects)
