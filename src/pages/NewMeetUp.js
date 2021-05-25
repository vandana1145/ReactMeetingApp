import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  // the { useHistory } hook gives some methods that allows to us to manipulate the browser history or to navigte a way.
    const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-starter-a5371-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
      // we want to navigate the user to another page as soon as the data is fetched in the page
    ).then(() => {
      // we can also use history.push() to push a new page at teh stack of the pages.
      // once the fetch method executes, it returns a promise
      // here we are using replace()
         history.replace('/')
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
