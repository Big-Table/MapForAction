import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AddActionButton from "../components/buttons/AddActionButton";
import ActionForm from "../components/forms/ActionForm";
import { getApprovedActions } from "../requests/requests";
import TakeActionIcon from "../svgs/TakeActionIcon";
const useStyles = makeStyles({
  root: {
    width: "90%",
    backgroundColor: "#000000",
    color: "white",
    padding: 15,
  },
  iconHolder: {
    height: 20,
    width: 20,
    display: "inline-block",
  },
  title: {
    display: "inline-block",
  },
  title2: {
    fontWeight: 700,
    color: "white",
    fontSize: 25,
    margin: 5,
    alignSelf: "start",
    paddingBottom: 10,
  },
  spacing: {
    lineHeight: 1.6,
  },
  topBorder: {
    borderTop: "1px solid white",
  },
  actionForm: {
    height: "100%",
    width: "100%",
    border: "solid",
  },
  overlay: {
    position: "fixed", 
    width: "100%", 
    height: "100%", 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
    zIndex: 5, 
    cursor: "pointer"
  }
});
const ActionsContainer = (props) => {
  const classes = useStyles(props);
  const [actions, setActions] = useState([]);
  useEffect(() => {
    getApprovedActions(props.incident._id).then((body) => {
      let filter = body.data.filter(
        (action) => action._incident === props.incident._id
      );
      setActions(filter);
    });
  }, [props.refresh]);

  const renderSuggestedActions = () => {
    return actions.map((action) => {
      return (
        <div>
          <a target="_blank" href={action.url}>
            {action.title}
          </a>
        </div>
      );
    });
  };
  //action form button toggle
  const [actionButton, setActionButton] = useState(false);

  const handleClick = () => {
    setActionButton(!actionButton);
  };


  return (
    <div className={classes.root}>
      <div className={classes.title2}>{props.incident.title}</div>
      <div className={classes.topBorder}>
        <h1>Actions:</h1>
        <div className={classes.iconHolder}>
          <TakeActionIcon />
        </div>
        <h3 className={classes.title}>Suggested Actions: </h3>
        <br></br>
        {actionButton && (
          <div className={classes.actionForm}>
            <ActionForm
              incident={props.incident}
              handleClick={handleClick}
              refresh={props.refresh}
            ></ActionForm>
          </div>
        )}
        {actionButton && <div className={classes.overlay}></div>}

        <div className={classes.spacing}>
          {actions.length > 0 ? (
            renderSuggestedActions()
          ) : (
            <span>No actions have been suggested for this incident yet. </span>
          )}
          <br></br>
            <AddActionButton currentUser={props.currentUser} handleClick={handleClick}>
                Suggest an action.
            </AddActionButton>
           
         

        </div>
        <br></br>
        <div className={classes.iconHolder}>
          <TakeActionIcon />
        </div>
        <h3 className={classes.title}>Donate:</h3>
        <br></br>
        {props.incident.organization ? (
          props.incident.organization
        ) : (
          <a
            target="_blank"
            href={"https://secure.actblue.com/donate/ms_blm_homepage_2019"}
          >
            Black Lives Matter
          </a>
        )}

        {/* https://www.change.org/p/national-action-against-police-brutality-and-murder */}

        <br></br>
        <div className={classes.iconHolder}>
          <TakeActionIcon />
        </div>
        <h3 className={classes.title}>Sign a Petition:</h3>

        <br></br>
        <div className={classes.spacing}>
          <a target="_blank" href={"https://www.justiceforbigfloyd.com/"}>
            Justice for George Floyd
          </a>
          <br></br>
          <a
            target="_blank"
            href={
              "https://www.change.org/p/un-and-us-government-ban-the-use-of-rubber-bullets?recruiter=922712485&recruited_by_id=62d8f120-fdb6-11e8-8dbd-0dee42fd9442&utm_source=share_petition&utm_medium=copylink&utm_campaign=petition_dashboard"
            }
          >
            Ban the use of rubber bullets.
          </a>
          <br></br>
          <a
            target="_blank"
            href={
              "https://www.change.org/p/human-rights-campaign-justice-for-ahmuad-arbery?utm_content=cl_sharecopy_22016318_en-US%3Av4&recruiter=319353471&recruited_by_id=129af720-1490-11e5-9c6e-8515d331dad3&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi"
            }
          >
            Justice for Ahmuad Arbery
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionsContainer;
