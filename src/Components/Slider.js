import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import Remove from '@material-ui/icons/Remove';
import Add from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import * as firebase from "firebase/app";
import 'firebase/firestore';


const useStyles = makeStyles(theme => ({

  root: { flexGrow: 1, marginTop: 100 },
  margin: { height: theme.spacing(3) },
  slider: { margin: 50, width: '94%', },
  media: { height: 150, width: 150 },
  card: { maxWidth: 325, margin: 5 },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  paperContent: {
    maxWidth: 380,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function DiscreteSlider() {
  const classes = useStyles();
  const [dataBase, setDataBase] = React.useState([]);
  const [count, setCount] = useState({ id: null, count: 0 });
  const [step, setStep] = useState(0);
  const [total, setTotal] = useState(0);


  const marks = [
    { value: -100, label: 'gift puppy' },
    { value: -65, label: 'tickle' },
    { value: -40, label: 'hugs' },
    { value: -15, label: 'surprise' },
    { value: 0, label: '0' },
    { value: 20, label: 'hands' },
    { value: 37, label: 'arms' },
    { value: 55, label: 'feets' },
    { value: 65, label: 'legs' },
    { value: 80, label: 'back' },
    { value: 100, label: 'YOU DIED' },
  ];

  React.useEffect(() => {

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      apiId: process.env.REACT_APP_FIREBASE_API_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    };


    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

    db.collection('thermometer').get()
      .then(db => {
        const d = [];
        db.forEach(data => {
          d.push({ id: data.id, data: data.data() })
        })
        setDataBase(d);
      })


    db.collection('total_points').get()
      .then(db => {
        db.forEach(data => {
          console.log(data.data())
          setCount({ id: data.id, count: total + data.data().total });
        })
      })
  }, [])


  const addPoints = data => {
    let sum = count.count + data.data.points;
    console.log(sum)
    if (count.count >= 100) {
      sum = 100
      firebase.firestore().collection('total_points').doc(count.id).update({
        total: sum
      })
    } else {
      firebase.firestore().collection('total_points').doc(count.id).update({
        total: 100
      })
    }
    setCount({ id: count.id, count: sum });
    setStep(data.data.points);
  }

  const removePoints = data => {
    let rest = count.count - data.data.points;
    console.log(rest)
    if (count.count <= -100) {
      rest = -100
      firebase.firestore().collection('total_points').doc(count.id).update({
        total: rest
      })
    } else {
      firebase.firestore().collection('total_points').doc(count.id).update({
        total: -100
      })
    }
    setCount({ id: count.id, count: rest });
    setStep(data.data.points);
  }

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <AppBar position="fixed" color="inherit">
        <Toolbar variant="regular">
          <Slider
            className={classes.slider}
            defaultValue={count.count}
            value={count.count}
            step={step}
            marks={marks}
            min={-100}
            max={100}
            valueLabelDisplay="on"
          />
        </Toolbar>
      </AppBar>
      <Paper
        color="secondary"
        size="large"
        className={classes.paper}>
        {dataBase.map(data => (
          <Card color="secondary" className={classes.card} key={data.id}>
            <CardMedia
              className={classes.media}
              image={data.data.image}
              title="Contemplative Reptile"
            >
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p" >
                {data.data.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip title={data.data.points} aria-label="remove">
                <Fab size="small" color={data.data.points > 0 ? "secondary" : "primary"} aria-label="remove"
                  onClick={() => removePoints(data)} >
                  <Remove />
                </Fab>
              </Tooltip>
              <Tooltip title={data.data.points} aria-label="add">
                <Fab size="small" color={data.data.points > 0 ? "secondary" : "primary"} aria-label="add"
                  onClick={() => addPoints(data)}>
                  <Add />
                </Fab>
              </Tooltip>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </div >
  );
}