import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import Pokemon from './pokemon.js'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height:120,
  },
}

class PokeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: props.pokemon
    };
    console.log('Loaded pokemon card: ' + this.state.pokemon);
  }

  render() {
    return (
      <>
        <Card className={this.props.classes.card}>
          <CardMedia
            className={this.props.classes.media}
            image={this.state.pokemon.imageLocation}
            title={this.state.pokemon.name}
          />
          <CardContent>{this.state.pokemon.name}</CardContent>
        </Card>
      </>
    );
  }
}

export default withStyles(styles)(PokeCard);
