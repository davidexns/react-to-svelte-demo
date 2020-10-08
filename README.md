# react-to-svelte-demo

A demo project I set up to demonstrate the differences in React + Next and Svelte + Sapper for a knowledge share session at work

## Start the React example app

1. **Option 1:** From the root of this project, run `npm run dev:react`
1. **Option 2:** `cd react` and then run `npm run dev`

## Start the Svelte example app

1. **Option 1:** From the root of this project, run `npm run dev:svelte`
1. **Option 2:** `cd svelte` and then run `npm run dev`

## Demo sequence

1. Show the React app in the browser and the code, components, and logic it contains
1. Show the shell of the Svelte app in the browser
1. Show the hinting around unused styles, add the header to make one go away
1. Update `FloatingBox` to show how Svelte handles children, briefly show fallback `slot`, then add a temporary child (we'll come back to this after we have the data on the page)
1. Add a temporary variable for a single game and update `GameItem` to render it, showing how to "expose" props and prop shorthand
1. Add the `onMount` lifecycle method to pull in the full list of games, showing in the console that we have them
1. Show an `each` block to loop and render each of the games
1. Add the search input to the floating box to show event handling, event modifiers, and eventually binding. Don't add `for` to label at first to show a11y hinting
1. Add `visibleGames` to show reactive variables
1. Implement `if`/`else` block to conditionally handle when there are no visible games

### If time permits

1. Show named slots with the `Field` component?
1. Show and example of built in transitions
1. Discuss VS Code setup

### Pain points

- Styling children requires global modifier
- Maturity of the ecosystem
- DSL to learn
- Testing story (add more notes here in the morning)

## TODOs

- [x] Get an example common landing page in each project with some example components
- [x] DOM events example (on click), including a modifier (ex: once)
- [x] Differences with children/slots
  - [x] Would be nice to add a named slot example
- [x] State management and data flow differences
- [x] Example of svelte prop shorthand
- [x] Example that would show accessibility hinting with Svelte (and maybe an example in React via eslint plugin?)
- [x] Show unused style hinting from Svelte
- [ ] Document VS Code environment differences
- [ ] TypeScript setup & developer experience
- [ ] Testing experience
- [ ] Routing/linking differences between Next and Sapper
