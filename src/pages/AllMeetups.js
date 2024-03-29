import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },
      {
        id: 'm2',
        title: 'This is a second meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
          'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
      },    
];

function AllMeetupsPage() {
    return <section>
<h1>
    All Meetups
</h1>

{/* using the reusable, provide the meetups prop, pass it the DUMMY_DATA */}
<MeetupList meetups={DUMMY_DATA} />



{/* using DUMMY_DATA directly */}
{/* <ul>
{DUMMY_DATA.map((meetup) => {
    return <li key={meetup.id}> {meetup.title}</li> })}
</ul> */}
{/* list requires a unique key useDebugValue, so we use meetup.id */}

    </section>
    
    ;

}

export default AllMeetupsPage;


