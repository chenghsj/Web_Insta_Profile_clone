import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { storage, db } from "../config/firebase.config";
import firebase from "firebase";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

export default function ImageUpload(props) {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [imagesURL, setImagesURL] = useState([]);
  const [progress, setProgress] = useState(null);

  const handleImages = (e) => {
    for (let file of e.target.files) {
      setImages((prev) => [...prev, file]);
      console.log(file.name);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const promises = [];
    for (let image of images) {
      const uploadTask = storage
        .ref(`images/${props.username}/${title}/${image.name}`)
        .put(image);
      promises.push(uploadTask);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        (error) => console.log(error.message),
        () => {
          storage
            .ref("images")
            .child(props.username)
            .child(image.name)
            .child(title)
            .getDownloadURL()
            .then((url) => {
              setImagesURL((prev) => [...prev, url]);
            });
        }
      );
    }
    Promise.all(promises)
      .then(() => {
        console.log("all files uploaded");
        setProgress(null);
        setTitle("");
        setImages(null);
        handleModalClose();
      })
      .then(() => {
        console.log(imagesURL);
      })
      .catch((error) => console.log(error.message));
  };
  // const handleUpload = (e) => {
  //     const uploadTask = storage
  //       .ref(`images/${props.username}/${image.name}`)
  //       .put(image);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         //progress function ...
  //         const progress = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         setProgress(progress);
  //       },
  //       (error) => {
  //         //error function ...
  //         console.log(error);
  //         alert(error.message);
  //       },
  //       () => {
  //         //complete function ...
  //         storage
  //           .ref("images")
  //           .child(props.username)
  //           .child(image.name)
  //           .getDownloadURL()
  //           .then((url) => {
  //             //post image inside db
  //             db.collection("posts").add({
  //               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //               username: props.username,
  //               title: title,
  //               description: desc,
  //               imgURL: url,
  //             });
  //             setProgress(0);
  //             setTitle("");
  //             setImage(null);
  //             handleModalClose();
  //           });
  //       }
  //     );
  // };

  const handleModalClose = () => {
    props.setOpenUpload(false);
  };

  return (
    <div>
      <button
        onClick={() => props.setOpenUpload(true)}
        className={classes.button}
      >
        Upload
      </button>
      <Modal open={props.openUpload} onClose={handleModalClose}>
        <div style={modalStyle} className={classes.paper}>
          <form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  required
                  type="text"
                  id="title-required"
                  label="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  type="text"
                  id="description-required"
                  label="Description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  classes={{ marginDense: classes.fileInput }}
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  type="file"
                  id="file-required"
                  inputProps={{
                    multiple: true,
                  }}
                  InputProps={{
                    disableUnderline: true,
                    classes: { inputMarginDense: classes.fileInput },
                  }}
                  onChange={handleImages}
                />
              </Grid>
              {progress ? (
                <Grid item>
                  <LinearProgress
                    classes={{
                      root: classes.progressBar,
                      colorPrimary: classes.colorPrimary,
                      barColorPrimary: classes.barColorPrimary,
                    }}
                    variant="determinate"
                    value={progress}
                  />
                </Grid>
              ) : null}
              <Grid item>
                <Button
                  classes={{ root: classes.btnText }}
                  fullWidth
                  color={title && images[0] ? "primary" : "default"}
                  variant="contained"
                  disableElevation
                  onClick={(e) => {
                    if (title && images[0]) handleUpload(e);
                  }}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    outline: "none",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "30%",
    [theme.breakpoints.down("xs")]: { width: "50%" },
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    opacity: 1,
    visibility: "visible",
  },
  button: {
    background: "white",
    color: "black",
    height: "100%",
    // background: "#393939",
    // color: "white",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    boxShadow: "1px 1px 5px -2px",
    // boxShadow: "1px 1px 8px -2px black",
    marginLeft: "0.5rem",
    transition: "background 0.2s ease",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.85)",
      marginLeft: "0rem",
    },
    "&:hover": {
      background: "lightgray",
    },
    "&:active": {
      boxShadow: "none",
      top: "calc(6vh + 1px)",
      right: "calc(11vw - 1px)",
    },
  },
  btnText: {
    textTransform: "none",
  },
  fileInput: {
    paddingBottom: "18.5px",
  },
  progressBar: {
    height: "0.4rem",
    borderRadius: "0.4rem",
  },
  colorPrimary: {
    backgroundColor: "#e0e0e0",
  },
  barColorPrimary: {
    backgroundColor: "#6573c3",
  },
}));
