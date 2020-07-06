import React from 'react'
import { makeStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
        // position: "absolute",
        // top: 10,
        // right: '16%',
        // zIndex: 4,
        backgroundColor: "#000000",
        color: "#FCC42C",
        borderStyle: "solid",
        borderColor: "#FCC42C",
        borderWidth: 1,
        height: 40,
        width: 150,
        borderRadius: 20,
        fontFamily: 'Work Sans',
        fontWeight: 700,
        cursor: "pointer",
        outline: "none"
    },
    alert: {
        backgroundColor: 'black', 
        color: '#FCC42C'
    }, 
    backButton: {
        backgroundColor: "#000000",
        color: "#FCC42C",
        borderStyle: "solid",
        borderColor: "#FCC42C",
        borderWidth: 1,
        height: 40,
        width: 150,
        borderRadius: 20,
        fontFamily: 'Work Sans',
        fontWeight: 700,
        cursor: "pointer",
        outline: "none"
    }
})
const AddActionButton = props => {
    const classes = useStyles(props)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <button className={classes.root} onClick={handleClickOpen}>
                + Add an Action!
            </button>
           
            <Dialog
            style={{paddingBottom: '20px'}}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle className={classes.alert} id="alert-dialog-title">{"No Access! Please Sign In."}</DialogTitle>
            <DialogContent  className={classes.alert}>
            <DialogContentText id="alert-dialog-description" className={classes.alert}>
                Please Sign-In through your Google account, in order to submit an Action. 
            </DialogContentText>
            </DialogContent>
            <DialogActions style={{display: 'flex', justifyContent: 'center'}}className={classes.alert}>
            <button className={classes.backButton} onClick={handleClose} color="primary" autoFocus>
                Back
            </button>
            <a href="/auth/google">
            <img
                src={require("../../svgs/btn_google_signin_dark_normal_web@2x.png")}
                alt="google-login"
                width="200px"
                height="50px"
            />
            </a>
            </DialogActions>
            </Dialog>
        
        </div>
    )
}

export default AddActionButton