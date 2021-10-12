import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-6ed28-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
