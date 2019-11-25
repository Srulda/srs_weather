import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, Typography, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

import FavoriteIcon from '@material-ui/icons/Favorite'

const styles = theme => ({
  favoritesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '50px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    minWidth: '15%',
    margin: '1%',
    textAlign: 'center',
  },
  cardContent: {
    padding: '14px',
  },
  media: {
    height: 140,
  },
})
class Favorites extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [
        {
          id: 1,
          city: 'Tel Aviv',
          temp: 38,
          weather: 'Sunny',
          image:
            'https://www.touristisrael.com/wp-content/uploads/tel-aviv-1779649_960_720-001.jpg',
        },
        {
          id: 2,
          city: 'Jerusalem',
          temp: 32,
          weather: 'Cloudy',
          image:
            'https://ichef.bbci.co.uk/news/660/cpsprodpb/F2EB/production/_103878126_6eb47c91-bca4-425f-a351-b4c35c252e12.jpg',
        },
        {
          id: 3,
          city: 'Eilat',
          temp: 39,
          weather: 'Haze',
          image:
            'https://www.worldtravelguide.net/wp-content/uploads/2019/03/shu-Eilat-1101825920-1440x823.jpg',
        },
        {
          id: 4,
          city: 'Madrid',
          temp: 24,
          weather: 'Sunny',
          image:
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/29/13/istock-686221696.jpg?w968h681',
        },
        {
          id: 5,
          city: 'Las Vegas',
          temp: 19,
          weather: 'Rain',
          image:
            'https://img.theculturetrip.com/768x432/wp-content/uploads/2019/05/feature_peeak0.jpg',
        },
      ],
    }
  }

  removeFavorite = favoriteId => {
    const favorites = [...this.state.favorites]
    const index = favorites.findIndex(favorite => favoriteId === favorite.id)
    console.log(index)
    favorites.splice(index, 1)

    this.setState({ favorites })
  }
  render() {
    const { classes } = this.props
    const { favorites } = this.state
    return (
      <div className={classes.favoritesContainer}>
        {favorites.map(favorite => (
          <Card className={classes.card} key={favorite.id}>
            <CardActionArea>
              <CardMedia className={classes.media} image={favorite.image} />
              <CardContent className={classes.cardContent}>
                <div className={classes.header}>
                  <Typography variant='h5'>{favorite.city}</Typography>
                  <FavoriteIcon onClick={() => this.removeFavorite(favorite.id)} />
                </div>
                <Typography variant='body2' color='textSecondary'>
                  {favorite.temp}&#8451;
                </Typography>
                <Typography variant='body1' color='textSecondary'>
                  {favorite.weather}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(Favorites)
