import classes from "./Card.module.css";

/* wrap around content. pass content to the card and card exposes it. 
props.children is a special prop, which every component receives by default
children always holds the content, which is passed between the opening and closing tag
*/

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
