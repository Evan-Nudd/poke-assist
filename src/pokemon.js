const IMG_BASE_LOC = 'img/';

class Pokemon {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.imageLocation = IMG_BASE_LOC + this.id + this.name + '.png';
  }
}

export default Pokemon;
