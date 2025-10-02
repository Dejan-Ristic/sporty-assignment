The app is built as a React 19 SPA. The Node version I used was 22.

The main parts of the app are the single-page LeaguesPage.tsx and the components used therein. A router with lazy loading is also used, but only as something I consider good practice (and part of my usual tech stack).

All backend calls are made through the Axios library (api.config.ts), and all responses are cached using axios-cache-adapter. This caching is only in-memory; it can't be enabled without the respective response headers from the backend server.

Since it is a small app, one data service was sufficient — LeaguesApi.service.ts, which uses only API calls that are then consumed by methods in the MobX store.

The app state is managed through the MobX library. There is one store (LeaguesStore.ts). It has three main observables: one for the list of leagues, one for the list of seasons, and one for the filter. The data are shown on the page using MobX getter functions:

1. leaguesToDisplay – takes all the leagues fetched and filters them using values set by the filter fields.
2. allSportsList – this list is computed from the data in the allLeagues observable, extracting distinct values for types of sports.
3. badgeToDisplay – returns the badge item from the last element (if there is any) in the seasons list, fetched by clicking an item in the list.

Note: The list of sports is derived from the list of all leagues because I saw no other way to do it. Usually, I would obtain this data from a dedicated API, but it only returns one or two items, so I filtered it from the leagues data.

Also, the list of leagues is provided as-is by the API, meaning there is no additional data that I can request in batches, so pagination cannot be implemented.

The layout and design are created using the Ant Design UI library. A few details for responsive layout are managed using CSS custom properties (responsive.sass).

All types and enums are defined in interfaces/leagues.ts.

As for AI assistance, I did use it during development, mostly for advice and quick solutions to very specific problems (e.g. best way to create an array of unique values). I also used it for simple boilerplate code and, in one instance, to generate an entire component (useDebounce.ts custom hook).

It took me 3-4 hours, not because it couldn’t have been finished sooner, but because I give a lot of attention to details and testing, and tend to go more in-depth on things I don’t know well (e.g. caching) or any interesting subject that comes up during development.
