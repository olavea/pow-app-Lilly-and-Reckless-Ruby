import React, { useState } from "react"
import {
  Link,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core"

import MenstruationSettings from "./MenstruationSettings"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    "& + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const Profile = ({ user }) => {
  const classes = useStyles()
  if (!user) return null
  // const [state, setState] = useState({
  //   email: "",
  //   rememberMe: "local",
  // })

  // const handleChange = (event) => {
  //   setState({ value: event.target.value })
  // }
  const handleChange = (name) => (event) => {
    let value = event.target.value
    if (name === "rememberMe") {
      value = event.target.checked ? "local" : "session"
    }
  }

  const handleSubmit = (event) => {
    alert("An email was submitted: ")
    event.preventDefault()
    console.log("email is submitted")
  }

  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Stay in the loop
            </Typography>
            <Typography>
              <form
                // className={classes.form}
                // variant={signUp}
                // noValidate
                onSubmit={handleSubmit}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  placeholder="ruby@rooftop.aero"
                  // value={state.email}
                  // onChange={handleChange("email")}
                  InputLabelProps={{ shrink: true }}
                />
                <input type="submit" value="❤️" />
                <Button>❤️</Button>
              </form>
            </Typography>
            <Typography gutterBottom variant="body1">
              Sign up for the POW! Newsletter
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              We send you off to another site to sign up. Your Blockstack id is
              not forwarded and not be linked to the e-mail you submit.
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container className={classes.container} maxWidth="sm">
        <Card>
          <CardHeader title={user.username} />
        </Card>
      </Container>
      <Container className={classes.container} maxWidth="sm">
        <MenstruationSettings />
      </Container>

      <Container className={classes.container} maxWidth="sm">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Stay in the loop
            </Typography>
            <Typography gutterBottom variant="body1">
              Sign up for the{" "}
              <Link
                target="_blank"
                rel="noopener"
                href="https://lillylabs.ck.page/a5f42d2b44"
              >
                POW! Newsletter
              </Link>
              .
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary">
              We send you off to another site to sign up. Your Blockstack id is
              not forwarded and not be linked to the e-mail you submit.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default Profile
