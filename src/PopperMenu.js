import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    cursor: "pointer",
    // paddingRight: 50
  },
 
  paper: {
    marginRight: theme.spacing(2),
  },
  smallPic: {
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    color: "#FCC42C",
    border: "solid",
    borderColor: "#FCC42C",
    borderWidth: 5,
    backgroundColor: 'black',
  },
}));

export default function MenuListComposition(props) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  console.log(props.currentUser)
  return (
    <div className={classes.root}>
      <div>
        {/* <Avatar ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        {!props.currentUser ? (
          <a href="/auth/google">
            <img
              src={require("./svgs/btn_google_signin_dark_normal_web@2x.png")}
              alt="google-login"
              width="200px"
              height="50px"
            />
          </a>
        ) : (
            <div style={{paddingRight: '50px', paddingLeft: '50px'}}>
            <Avatar
                className={classes.smallPic}
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{
                  width: "100px",
                  height: "100px"
                }}
        >{props.currentUser.moderator ? "Big Mod" : "Logged In"}</Avatar>
        </div>
        )
        }
        
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement="bottom-end"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper style={{backgroundColor: 'black'}}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem>
                      <a href="/auth/logout">Logout</a>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
