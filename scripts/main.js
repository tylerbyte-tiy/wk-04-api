window.onload = function movieData () {
  const getTitle = 'title/'
  const url = `http://www.omdbapi.com/?t=the+dark+knight&y=200` + getTitle

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is: ', data);
    if (getTitle === 'title') {
      const results = data.results;
      const resultsLength = results.length;
      const title = [];
      for (let i = 0; i < resultsLength; i++) {
        people.push(results[i].name)
      }
      console.log('The titles are: ', title);
    }
    else {
      console.log('The title is: ', data.name);
    }
  })
}
