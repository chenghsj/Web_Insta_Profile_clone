import React, { useState, useEffect } from "react";
import { useStyles } from "./styles/InfoStyle";
import { useAuthContext } from "./contexts/Auth.context";
import { storage, db } from "../config/firebase.config";
import {
  Done as DoneIcon,
  Close as CloseIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import {
  Avatar,
  Button,
  Grid,
  Input,
  TextField,
  LinearProgress,
  Modal,
} from "@material-ui/core";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

function Head() {
  const [{ user, isDark }] = useAuthContext();
  const classes = useStyles(isDark);
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
    if (user?.displayName) {
      db.collection(user.displayName)
        .doc(user.uid)
        .onSnapshot((doc) => {
          setEditProfile({
            profile_image: doc.data()?.image || "",
            profile_name: doc.data()?.name || user.displayName,
            profile_info: doc.data()?.info || "",
            profile_description: doc.data()?.description || "",
          });
          setConfirmProfile({
            profile_image: doc.data()?.image || "",
            profile_name: doc.data()?.name || user.displayName,
            profile_info: doc.data()?.info || "",
            profile_description: doc.data()?.description || "",
          });
        });
    }
    if (isSubmit) {
      db.collection(user.displayName)
        .doc(user.uid)
        .update({
          image: confirmProfile.profile_image,
          name: confirmProfile.profile_name || user.displayName,
          info: confirmProfile.profile_info,
          description: confirmProfile.profile_description,
        });
    }
    setIsSubmit(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isSubmit]);

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
    const uploadTask = storage
      .ref(`images/${user.displayName}/${user.uid}/profile_image/avatar`)
      .put(avatar);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
        console.log("Uploading...");
      },
      (error) => console.log(error.message),
      () => {
        storage
          .ref(`images/${user.displayName}/${user.uid}/profile_image/avatar`)
          .getDownloadURL()
          .then((url) => {
            db.collection(user.displayName)
              .doc(user.uid)
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
              cursor: user ? "pointer" : "default",
            }}
            onClick={() => {
              if (user) {
                setAvatarUploadModal(true);
                setAvatar(null);
              }
            }}
            src={user && confirmProfile.profile_image}
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
              <h2>{user && confirmProfile.profile_name}</h2>
              {user && (
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
              {user && confirmProfile.profile_info}
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
            <p>{user && confirmProfile.profile_description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Head;
