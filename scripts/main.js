window.onload = function movieData () {
  const getTitle = 'Titles/'
  const url = `http://www.omdbapi.com/?s=Batman&page=1` + getTitle

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is: ', data);
    if (getTitle === 'Titles') {
      const results = data.results;
      const resultsLength = results.length;
      const Titles = [];

      for (let i = 0; i < resultsLength; i++) {
        Titles.push(results[i].Search)
      }
      console.log('The Titles are: ', Titles);
    }
    else {
      console.log('The title is: ', data.Search[0].Title);
    }
  })
}
