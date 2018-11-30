const IMG_BASE_LOC = 'img/';

class Pokemon {
  constructor(_id, name, img_url, types, evolutions) {
    this.id = _id;
    this.name = name;
    this.imageLocation = IMG_BASE_LOC + this.id + this.name + '.png';
    this.img_url = img_url;
    this.types = types;
    this.evolutions = evolutions;
  }
}

export default Pokemon;
