import {displayAllThumbnails} from "./display_photos_thumbnails.js"
import {addPhotoFullView} from "./photo_full_size_view.js"
import {UserPictureUploadHandler} from "./form.js"


async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/photos");
    const photo =  await response.json()
    displayAllThumbnails(photo)
    addPhotoFullView(photo)
  } catch (error) {
    console.log(`error = ${error.message}`)
  }
}

await fetchData()
UserPictureUploadHandler()
