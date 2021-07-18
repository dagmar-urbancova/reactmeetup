import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {/* map each meetup element into MeetupItem. Render one Meetup object per item in the meetup array */}
      {/* add key and list what gets mapped into elements */}
      {/* alternatively, instead of listing individual elements, can pass the entire meetup object, but we would need to destructure it inside the MeetupItem component - meetup={meetup} */}
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}{" "}
    </ul>
  );
}

export default MeetupList;

