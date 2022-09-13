import { useContext } from "react";
import FavouriteContext from "../../store/favourite-context";
import MeetupList from "./meetups/MeetupList";

function FavouritePage() {
  const favouriteCtx = useContext(FavouriteContext);

  let content;

  if (favouriteCtx.totalFavourites === 0) {
    content = <p>You got no favourite yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favouriteCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourite</h1>
      {content}
    </section>
  );
}

export default FavouritePage;
