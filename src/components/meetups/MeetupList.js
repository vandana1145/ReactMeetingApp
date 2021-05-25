import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup =>
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        //   we can do this as well and later on destructure it inside of the MeetupItem component- meetup={meetup}
        />
      )}
    </ul>
  );
}

export default MeetupList;
