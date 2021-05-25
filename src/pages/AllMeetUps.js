import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

/* We could have used async await here, but since ReactJS data should be uploaded in sync, data fetching should not be async */

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // 'useEffect' will fetch the data based on our feedback
  useEffect(() => {
    // in order to get data automatically from 'firebase', we need to fetch the data from the url endpoint and then get the promise
    setIsLoading(true)
    fetch(
      "https://react-starter-a5371-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        /*We want to read the data and we can do that with the "json" method. That's a method which exists on this response object 
        out of the box. And this will give us access to that data automatically converted from "json" to a plain JavaScript object.*/
        return response.json();
        /*"json" will actually return a promise as well. So we also need to wait for this promise to resolve. So I actually will 
        return "response,Json" here and add another "then" block, where we then get the actual data. And it's now in this second
        "then" block where we can work on that data.*/
      })
      .then((data) => {
        const meetups = [];

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup)
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  // the fallback content whist the data is loading
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      {/* <ul>
                {DUMMY_DATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>
                })}
            </ul> */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
