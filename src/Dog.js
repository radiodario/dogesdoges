import React, { Component } from 'react';

class Dog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image : null,
      text : '',
    }
  }

  componentWillMount() {
    this.loadText();
    this.loadImage();
  }

  async loadImage() {
    const { breed, subBreed } = this.props;

    let breedName = breed
    if (subBreed) {
      breedName += `/${subBreed}`
    }

    const imageDataUrl = `https://dog.ceo/api/breed/${breedName}/images/random`

    try {
      const response = await fetch(imageDataUrl)
      const { message } = await response.json()
      this.setState({ image : message})
    } catch (e) {
      return e.message;
    }
  }

  async loadText() {
    const url = 'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'

    try {
      const response = await fetch(url)
      const textStrings = await response.json()
      this.setState({ text : textStrings.join(' ')})
    } catch (e) {
      return e.message;
    }
  }


  render() {
    const { breed, subBreed } = this.props;
    const { image, text } = this.state;

    const breedName = subBreed ? `${breed} - ${subBreed}` : breed

    return (
      <div className="Dog-Breed">
        <h4>{ breedName }</h4>
        <img src={image} alt={ breedName }/>
        <div className="Dog-Breed--Text">
          { text }
        </div>
      </div>
    )

  }

}


export default Dog;
