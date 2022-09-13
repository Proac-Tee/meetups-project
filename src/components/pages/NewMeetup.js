import { useHistory } from "react-router-dom";
import NewMeetupForm from "./meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory;

  function addMeetupHandler(meetupData) {
    fetch("https://react-pratics-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application.json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
