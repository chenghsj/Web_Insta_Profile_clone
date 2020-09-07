import React, { useState, useEffect, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useStyles } from "./styles/InfoStyle";
import { ThemeContext } from "./contexts/Theme.context";
import { AuthContext } from "./contexts/Auth.context";
import Input from "@material-ui/core/Input";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import { storage, db, auth } from "../config/firebase.config";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

function Head() {
  const { isDarkMode } = useContext(ThemeContext);
  const { isAuth } = useContext(AuthContext);
  const classes = useStyles(isDarkMode);
  const [modalStyle] = React.useState(getModalStyle);
  const [isSubmit, setIsSubmit] = useState(false);
  const [edit, setEdit] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarUploadModal, setAvatarUploadModal] = useState(false);
  const [progress, setProgress] = useState(null);
  const [editProfile, setEditProfile] = useState({
    profile_image: "",
    profile_name: "",
    profile_info: "",
    profile_description: "",
  });
  const [confirmProfile, setConfirmProfile] = useState({
    profile_image: "",
    profile_name: "",
    profile_info: "",
    profile_description: "",
  });

  const { profile_name, profile_info, profile_description } = editProfile;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        db.collection(authUser.displayName)
          .doc(authUser.uid)
          .onSnapshot((doc) => {
            setEditProfile({
              profile_image: doc.data()?.image || "",
              profile_name: doc.data()?.name || authUser.displayName,
              profile_info: doc.data()?.info || "",
              profile_description: doc.data()?.description || "",
            });
            setConfirmProfile({
              profile_image: doc.data()?.image || "",
              profile_name: doc.data()?.name || authUser.displayName,
              profile_info: doc.data()?.info || "",
              profile_description: doc.data()?.description || "",
            });
          });
        if (isSubmit) {
          db.collection(authUser.displayName)
            .doc(authUser.uid)
            .set({
              image: confirmProfile.profile_image,
              name: confirmProfile.profile_name || authUser.displayName,
              info: confirmProfile.profile_info,
              description: confirmProfile.profile_description,
            });
        }
        setIsSubmit(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmit]);

  const handleProfileChange = (e) => {
    e.preventDefault();
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const currentUser = auth.currentUser;
    const uploadTask = storage
      .ref(
        `images/${currentUser.displayName}/${currentUser.uid}/profile_image/avatar`
      )
      .put(avatar);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => console.log(error.message),
      () => {
        storage
          .ref(
            `images/${currentUser.displayName}/${currentUser.uid}/profile_image/avatar`
          )
          .getDownloadURL()
          .then((url) => {
            db.collection(currentUser.displayName)
              .doc(currentUser.uid)
              .update({ image: url });
            setAvatar(null);
            setProgress(null);
            setAvatarUploadModal(false);
            setIsSubmit(false);
          });
      }
    );
  };

  const editContent = (
    <div style={{ display: "flex" }}>
      <DoneIcon
        onClick={(e) => {
          e.preventDefault();
          setConfirmProfile({ ...editProfile });
          setEdit(false);
          setIsSubmit(true);
        }}
        className={classes.profileIcon}
      />
      <CloseIcon
        onClick={(e) => {
          e.preventDefault();
          setEditProfile({ ...confirmProfile });
          setEdit(false);
        }}
        className={classes.profileIcon}
      />
    </div>
  );

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextField
            disabled={!!progress}
            variant="outlined"
            size="small"
            fullWidth
            required
            type="file"
            id="profile-image-upload"
            InputProps={{
              classes: { inputMarginDense: classes.fileInput },
            }}
            onChange={handleAvatar}
          />
        </Grid>
        {!!progress && (
          <Grid item>
            <LinearProgress variant="determinate" value={progress} />
          </Grid>
        )}
        <Grid item>
          <Button
            disabled={!!!avatar || !!progress}
            fullWidth
            variant="contained"
            disableElevation
            color="primary"
            onClick={(e) => {
              handleImageUpload(e);
              setIsSubmit(true);
            }}
          >
            {progress ? "Uploading..." : "Upload"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );

  const imageUploadModal = (
    <Modal
      open={avatarUploadModal}
      onClose={() => {
        if (!progress) {
          setAvatar(null);
          setAvatarUploadModal(false);
        }
      }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      style={{ cursor: !!progress ? "progress" : "default" }}
    >
      {body}
    </Modal>
  );
  return (
    <div className={classes.container}>
      <div className={classes.avatarContainer}>
        <div className={classes.offCircle}></div>
        <div className={classes.innerCircle}>
          <Avatar
            className={classes.avatarRoot}
            style={{
              width: "90%",
              height: "90%",
              cursor: isAuth ? "pointer" : "default",
            }}
            onClick={() => {
              if (isAuth) {
                setAvatarUploadModal(true);
                setAvatar(null);
              }
            }}
            src={isAuth && confirmProfile.profile_image}
          />
          {imageUploadModal}
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.nameBlock}>
          {edit ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Input
                classes={{
                  root: classes.nameInputRoot,
                  underline: classes.inputUnderline,
                }}
                name="profile_name"
                inputProps={{ "aria-label": "profile name" }}
                value={profile_name}
                onChange={handleProfileChange}
              />
              {editContent}
            </div>
          ) : (
            <div className={classes.editIcon}>
              <h2>{isAuth && confirmProfile.profile_name}</h2>
              {isAuth && (
                <EditIcon
                  onClick={() => setEdit(true)}
                  style={{
                    margin: "0.1rem",
                    color: "lightgray",
                  }}
                />
              )}
            </div>
          )}
        </div>
        {edit ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              classes={{
                root: classes.infoInputRoot,
                multiline: classes.inputMultiline,
                underline: classes.inputUnderline,
              }}
              fullWidth
              multiline
              name="profile_info"
              inputProps={{ "aria-label": "description" }}
              value={profile_info}
              onChange={handleProfileChange}
            />
          </div>
        ) : (
          <div className={classes.editIcon}>
            <p style={{ fontSize: "0.8rem", fontWeight: "bold", margin: 0 }}>
              {isAuth && confirmProfile.profile_info}
            </p>
          </div>
        )}
        {edit ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
              classes={{
                multiline: classes.inputMultiline,
                underline: classes.inputUnderline,
              }}
              fullWidth
              multiline
              name="profile_description"
              inputProps={{ "aria-label": "description" }}
              value={profile_description}
              onChange={handleProfileChange}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p>{isAuth && confirmProfile.profile_description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Head;
