/* reusable component  */
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3> {/* <h3>TITLE</h3> */}
        <address>{props.address}</address> {/* <address>ADDRESS</address> */}
        <p>{props.description}</p> {/* <p>DESCRIPTION</p> */}
      </div>
      <div>
        <button className={classes.actions}>To Favorites</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
