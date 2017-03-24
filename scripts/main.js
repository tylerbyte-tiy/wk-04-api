window.onload = function movieData () {
  const getTitle = 'Titles/'
  const url = 'http://www.omdbapi.com/?s=' + getTitle + '&page=1' 

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is: ', data);
    console.log(data);
    console.log('getTitle', getTitle)
    if (getTitle === 'Titles/') {
      const results = data.Search;
      const resultsLength = results.length;
      const Titles = [];

      for (let i = 0; i < resultsLength; i++) {
        Titles.push(results[i].Title)
      }
      console.log('The Titles are: ', Titles);
    }
    else {
      console.log('The title is: ', data.Search[0].Title);
    }
  })
}
