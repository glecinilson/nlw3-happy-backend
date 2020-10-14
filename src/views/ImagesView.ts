import images from "../model/Images";

export default {
  render(images: images){
    return {
      id: images.id,
      url: `http://localhost:3333/uploads/${images.path}`
    }
  },

  renderMany(imagess: images[]){
    return imagess.map(images => this.render(images))
  }
}