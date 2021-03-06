import React, { useState, useEffect } from "react"

import {
  Typography,
  IconButton,
  TextField,
  Button,
  Grid,
  makeStyles,
} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import AddIcon from "@material-ui/icons/Add"
import CancelIcon from "@material-ui/icons/Cancel"
import SubmitIcon from "@material-ui/icons/CheckCircle"

const useStyles = makeStyles((theme) => ({
  note: {
    padding: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  text: {
    flexGrow: 1,
  },
  edit: {
    float: "right",
    opacity: 0.6,
    marginLeft: theme.spacing(2),
  },
  add: {
    opacity: 0.6,
    justifyContent: "flex-start",
  },
  form: {
    padding: theme.spacing(2.5),
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    "& .MuiGrid-item:first-child": {
      flexGrow: 1,
    },
    "& .MuiInputBase-input": {
      marginBottom: theme.spacing(0.5),
    },
    "& .MuiInput-underline:after": {
      borderColor: theme.palette.grey[500],
    },
    "& > :last-child": {
      marginTop: theme.spacing(1.5),
    },
  },
  submitButton: {
    padding: "6px",
    boxShadow: theme.shadows[3],
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.secondary.dark,
    },
  },
}))

const Note = ({ note = "", onEditNote }) => {
  const classes = useStyles()
  return (
    <div className={classes.note}>
      <Typography className={classes.text}>{note}</Typography>
      {note ? (
        <IconButton
          onClick={onEditNote}
          className={classes.edit}
          size="small"
          aria-label="Edit note"
        >
          <EditIcon></EditIcon>
        </IconButton>
      ) : (
        <Button
          fullWidth
          onClick={onEditNote}
          size="small"
          className={classes.add}
        >
          <AddIcon></AddIcon> Add note
        </Button>
      )}
    </div>
  )
}

const NoteForm = ({ note = "", onNoteChange, onClose }) => {
  const classes = useStyles()
  const [value, setValue] = useState(note)
  const [placeholder, setPlaceholder] = useState()

  useEffect(() => {
    const placeholders = [
      "My #period just started.",
      "#energetic",
      "So so #tired",
      "Feeling #sexy!",
      "I am #sad and #angry.",
      "#period #heavyflow",
      "Today I am #happy#happy#happy :D",
      "I think i have #PMS",
    ]

    let index = Math.floor(Math.random() * placeholders.length)

    const tick = () => {
      setPlaceholder(placeholders[index])
      if (index === placeholders.length - 1) {
        index = 0
      } else {
        index++
      }
    }

    const interval = setInterval(tick, 3500)
    tick()

    return () => {
      clearInterval(interval)
    }
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    onNoteChange(value)
    onClose()
  }

  const onCancel = () => {
    onClose()
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <TextField
            className={classes.textField}
            autoFocus={true}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder}
            fullWidth
          />
        </Grid>
        <Grid item>
          <IconButton
            size="small"
            variant="contained"
            color="default"
            aria-label="Cancel"
            onClick={onCancel}
            className={classes.cancelButton}
          >
            <CancelIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size="small"
            variant="contained"
            color="default"
            type="submit"
            aria-label="Save"
            className={classes.submitButton}
          >
            <SubmitIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Typography color="textSecondary" variant="caption" component="p">
        Use hashtags for things you would like to keep a close eye on.
      </Typography>
    </form>
  )
}

const EntryNote = ({ note, isToday, onNoteChange }) => {
  const [isEditing, setIsEditing] = useState()

  return isEditing ? (
    <NoteForm
      note={note}
      onNoteChange={onNoteChange}
      onClose={() => setIsEditing(false)}
    ></NoteForm>
  ) : (
    <Note note={note} onEditNote={() => setIsEditing(true)}></Note>
  )
}

export default EntryNote
