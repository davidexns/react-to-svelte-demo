exports.filterGames = (games, search) => {
  return games.filter((game) => {
    const searchText = `${game.platform} ${game.name}`.toLowerCase();
    return searchText.includes(search.toLowerCase());
  });
};
