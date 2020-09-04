import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import logo from "../../navigation/logo.png";

const getStyles = makeStyles({
  root: {
    position: "absolute",
    textAlign: "left",
    /* margin: 2px; */
    width: "63%",
    height: "85vh",
    backgroundColor: "black",
    padding: "20px",
    top: "60px",
    left: "17%",
    zIndex: "10",
    color: "#FCC42C",
    borderRadius: "10px",
    overflowY: "scroll",
    border: "solid",
    borderColor: "#FCC42C",
    borderWidth: "5px",
  },
  p: {
    fontWeight: "bold",
  },
});

function WhatsNext(props) {
  const classes = getStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center" }}>FAQ</h1>

      <p className={classes.p}>Who developed this?</p>
      <ul>
        <li>
          MapForAction was created by a team of software engineers for the NYC
          Coders: Hack for #BlackLivesMatter.
        </li>
      </ul>

      <p className={classes.p}>What is MapForAction?</p>
      <ul>
        <li>
          MapForAction is a social justice driven application, created to map
          out instances of police brutality and racial injustice while giving
          users the tools to help take action.
        </li>
      </ul>

      <p className={classes.p}>Where are you getting your information?</p>

      <ul>
        <li>
          From you! We need you to help crowdsource this information in a way
          that makes it clear and concise.
        </li>
        <li>
          First, we need you to tell us the who, what, when, where, why. The
          more details the better.
        </li>
        <li>
          Second, we need you to share resources to take actionable steps. We
          want to spead awareness to these injustices, but that's not enough. We
          need to take action!
        </li>
      </ul>

      <p className={classes.p}>
        How do you prevent misinformation and hateful content?
      </p>

      <ul>
        <li>
          Contributors can help by suggesting incidents, actions and tweets by
          signing in through Google.
        </li>
        <li>
          It uses a moderator system to help filter what information can be
          uploaded.
        </li>
      </ul>

      <p className={classes.p}>How can I become a moderator</p>

      <ul>
        <li>
          Currently at this time we are still in the process of figuring out how
          to successfully turn the reigns over to public moderators. If you are
          interested at this time, please send us an email at{" "}
          <a href="mailto:mapforaction@gmail.com">mapforaction@gmail.com</a>, or
          check back later for more updates!
        </li>
      </ul>

      <p className={classes.p}>Can I contribute to the code base?</p>
      <ul>
        <li>
          Absolutely! If you are a software engineer and would like to
          contribute please visit our{" "}
          <a
            href="https://github.com/Big-Table/MapForAction"
            style={{ textDecoration: "underline" }}
          >
            Github
          </a>{" "}
          and read our ReadMe.
        </li>
      </ul>

      <p className={classes.p}>Are we affiliated with any organization?</p>
      <ul>
        <li>
          No we are not, but here is a list of organizations and charities we
          think are worth donating to.
        </li>
      </ul>

      <p className={classes.p}>What is planned for the future?</p>

      <ul>
        <li>Give users the ability to report misinformation</li>
        <li>Expand our moderator system.</li>
        <li>Mobile and tablet integration.</li>
      </ul>
      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ height: "15%", width: "15%" }}
          src={logo}
          alt="mapforaction-logo"
        ></img>
      </div>
      <h5 style={{ textAlign: "center" }}>
        Black Lives Matter. We remember and honor all victims depicted on this
        site.
      </h5>
      <CloseIcon
        id="close-button"
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default WhatsNext;
