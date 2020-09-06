import React, { useState, useContext } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import { getModalStyle } from "./styles/reuseableStyle";
import { useStyles } from "./styles/ImageUploadStyle";
import { storage, db } from "../config/firebase.config";
import { ThemeContext } from "./contexts/Theme.context";
import { AuthContext } from "./contexts/Auth.context";
import firebase from "firebase";

export default function ImageUpload(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState(null);

  const handleImages = (e) => {
    for (let file of e.target.files) {
      setImages((prev) => [...prev, file]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const promises = [];
    for (let image of images) {
      const uploadTask = storage
        .ref(`images/${isAuth.displayName}/${title}/${image.name}`)
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
              console.log("Upload paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Uploading...");
              break;
          }
        },
        (error) => console.log(error.message)
      );
    }
    Promise.all(promises)
      .then(async (res) => {
        const promises = [];
        for (let i = 0; i < res.length; i++) {
          const imageURL = await res[i].ref.getDownloadURL();
          promises.push(imageURL);
        }
        const imagesURL = await Promise.all(promises);
        await db
          .collection(isAuth.displayName)
          .doc(isAuth.uid)
          .collection("posts")
          .doc()
          .set({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: isAuth.displayName,
            title: title,
            description: desc,
            coverImage: imagesURL[0],
            images: imagesURL,
          });
      })
      .then(() => {
        console.log("Upload finished");
        handleModalClose();
      })
      .catch((error) => console.log(error.message));
  };

  const handleModalClose = () => {
    setTitle("");
    setDesc("");
    setImages([]);
    setProgress(null);
    props.setOpenUpload(false);
  };

  return (
    <div>
      <button
        onClick={() => props.setOpenUpload(true)}
        className={classes.button}
        style={{
          background: isDarkMode && "white",
          color: isDarkMode && "black",
        }}
      >
        Upload
      </button>
      <Modal
        style={{ cursor: !!progress && "progress" }}
        open={props.openUpload}
        onClose={() => {
          if (!progress) {
            handleModalClose();
          }
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          <form>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  disabled={!!progress}
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
                  disabled={!!progress}
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
                  disabled={!!progress}
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
                    classes: { inputMarginDense: classes.fileInput },
                  }}
                  onChange={handleImages}
                />
              </Grid>
              {!!progress && (
                <Grid item>
                  <LinearProgress
                    classes={{
                      root: classes.progressBar,
                      colorPrimary: classes.colorPrimary,
                      barColorPrimary: classes.barColorPrimary,
                      bar1Determinate: classes.bar1Determinate,
                    }}
                    variant="determinate"
                    value={progress}
                  />
                </Grid>
              )}
              <Grid item>
                <Button
                  disabled={!!progress || !!!title || !!!images[0]}
                  fullWidth
                  color={!!!progress ? "primary" : "default"}
                  variant="contained"
                  disableElevation
                  onClick={(e) => {
                    if (title && images[0]) handleUpload(e);
                  }}
                >
                  {progress ? "Uploading..." : "Upload"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    </div>
  );
}
