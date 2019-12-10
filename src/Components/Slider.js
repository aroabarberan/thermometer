import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  margin: { height: theme.spacing(3), },
  slider: { margin: 10, width: '96%', },
  buttonGroup: { marginTop: 30 },
  media: { height: 140, width: 150 },
  card: { maxWidth: 345, display: 'flex' },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function DiscreteSlider() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);


  const marks = [
    { value: 0, label: ':(' },
    { value: 20, label: 'hands' },
    { value: 37, label: 'arms' },
    { value: 65, label: 'legs' },
    { value: 85, label: 'feets' },
    { value: 90, label: 'back' },
    { value: 100, label: 'YOU DIED' },
  ];

  const systemPoints = [
    { id: 0, name: "brushing teeth", points: 10, image: "https://st2.depositphotos.com/3440865/9827/v/950/depositphotos_98279962-stock-illustration-happy-boy-love-brushing-teeth.jpg" },

    { id: 2, name: "wash dishes", points: 10, image: "https://media.istockphoto.com/vectors/man-washes-dishes-vector-id512883100?k=6&m=512883100&s=612x612&w=0&h=uCFFodqczw3tLIRM_c5Y1pJB2cPUInV2gPVbsWSEnyo=" },

    { id: 3, name: "body heat", points: 20, image: "https://thumbs.dreamstime.com/b/siblings-boy-girl-sleeping-bed-14363194.jpg" },

    { id: 4, name: "sweep", points: 15, image: "https://previews.123rf.com/images/hermandesign2015/hermandesign20151809/hermandesign2015180900625/109078174-the-happy-boy-using-the-red-cap-sweep-the-trash-with-the-long-broom.jpg" },

    { id: 5, name: "pick up trash from the floor", points: 10, image: "https://www.wikihow.com/images/thumb/7/7f/Pick-Up-Litter-Step-2-Version-2.jpg/aid127542-v4-728px-Pick-Up-Litter-Step-2-Version-2.jpg" },

    { id: 6, name: "pick beard hairs", points: 15, image: "https://s.aolcdn.com/hss/storage/midas/3c896d5acc2902abce6c028195d16e0e/205166013/04-beard-trimmers-engadget.jpg" },

    { id: 7, name: "pick up clothes", points: 10, image: "data:image/jpeg;base64,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" },

  ];

  const addPoints = points => {
    if (count === 100) return;
    const sum = count + points;
    setCount(sum);
    setStep(points)
  }

  const removePoints = points => {
    if (count === 0) return;
    const remove = count - points;
    setCount(remove);
    setStep(points)
  }

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        SOBO O NO SOBO
      </Typography>
      <Slider
        className={classes.slider}
        defaultValue={count}
        value={count}
        aria-labelledby="discrete-slider-always"
        step={step}
        marks={marks}
        valueLabelDisplay="on"
      />
      <Paper
        color="secondary"
        size="large"
        className={classes.paper}
        className={classes.buttonGroup} >
        {systemPoints.map(data => (
          <Grid color="secondary" container spacing={3}>
            <Grid item xs={6}>
              <Card className={classes.paper} key={data.id} color="secondary">
                <CardMedia
                  className={classes.media}
                  image={data.image}
                  title="Contemplative Reptile"
                >
                </CardMedia>

                <Typography id="discrete-slider-always">
                  {data.name}
                </Typography>
                <CardActions>
                  <Fab size="small" color="secondary" aria-label="remove"
                    onClick={() => removePoints(data.points)} >
                    <Remove />
                  </Fab>

                  <Fab size="small" color="secondary" aria-label="add"
                    onClick={() => addPoints(data.points)}>
                    <Add />
                  </Fab>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      </Paper>
      {/* </Grid> */}
    </div >
  );
}