import React from "react";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";

const EpisodesList = React.lazy(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  console.log(state);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }, [state]);

  const props = {
    episodes: state.episodes,
    state: { state, dispatch },
    toggleFavAction: toggleFavAction,
    favourites: state.favourites
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
