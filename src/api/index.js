const URLROOT = 'https://dog.ceo/api'


const fetchDogs = () => {
  const url = `${URLROOT}/breeds/list/all`

  try {
    return fetch(url)
      .then(result => result.json())
      .then(result => result.message)
  }
  catch (error) {
    return {
      error
    }
  }

}

const fetchImage = (breed, subBreed = null) => {
  let breedName = breed
  if (subBreed) {
    breedName += `/${subBreed}`
  }

  const url = `${URLROOT}/breed/${breedName}/images/random`

  try {
    return fetch(url)
      .then(result => result.json())
      .then(result => result.message)
  }
  catch (error) {
    return {
      error
    }
  }
}

const fetchText = () => {
  const url = 'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'

  try {
    return fetch(url)
      .then(result => result.json())
      .then(result => result.join(' '))
  }
  catch (error) {
    return {
      error
    }
  }

}

export default {
  fetchDogs,
  fetchImage,
  fetchText,
}
