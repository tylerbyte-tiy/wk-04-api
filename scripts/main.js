window.onload = function movieData () {
  const getTitle = 'Batman'
  const url = 'https://www.omdbapi.com/?s=' + getTitle + '&page=1'


////////////////////////////////////////////////////////////
$.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data);

    if(getTitle === 'Batman') {
      const search = data.Search;
      const searchLength = search.length;
      const batmanTitles =[];


      // isTitle = search.filter(function(element, index) {
      //    return element.Title})
      //    year = search.filter(function(element, index) {
      //       return element.year})

            for (let i = 0; i < searchLength; i++) {
                     batmanTitles.push(search[i].Title)
                   }
                   let year1 = search[0].Year;
                   console.log(year1);
                   let film1 = search[0].Title;
                   console.log(film1);
                   document.getElementById('titleOutput').innerHTML = film1;
                   let container = document.getElementById('infoButton');
                   container.addEventListener("click", function() {
                    document.getElementById('yearOutput').innerHTML= year1;
                  } )
                 }
               })
             }


                //  ('The Titles are: ', Titles);
                //  }
                //  else {
                //    console.log('The title is: ', data.Search[0].Title,'/', 'Release Date: ', data.Search[0].Year);
                //    console.log('The title is: ', data.Search[1].Title,'/', 'Release Date: ', data.Search[1].Year);



////////////////////////////////////////////////////////////

//   $.ajax({
//     url: url
//   }).done(function(data) {
//     console.log('The returned object is: ', data);
//     console.log(data);
//     console.log('getTitle', getTitle)
//     if (getTitle === 'Titles/') {
//       const results = data.Search;
//       const resultsLength = results.length;
//       const Titles = [];
//
//       for (let i = 0; i < resultsLength; i++) {
//         Titles.push(results[i].Title)
//       }
//     ('The Titles are: ', Titles);
//     }
//     else {
//       console.log('The title is: ', data.Search[0].Title,'/', 'Release Date: ', data.Search[0].Year);
//       console.log('The title is: ', data.Search[1].Title,'/', 'Release Date: ', data.Search[1].Year);
//       console.log('The title is: ', data.Search[2].Title,'/', 'Release Date: ', data.Search[2].Year);
//       console.log('The title is: ', data.Search[3].Title,'/', 'Release Date: ', data.Search[3].Year);
//       console.log('The title is: ', data.Search[4].Title,'/', 'Release Date: ', data.Search[4].Year);
//       console.log('The title is: ', data.Search[5].Title,'/', 'Release Date: ', data.Search[5].Year);
//       console.log('The title is: ', data.Search[6].Title,'/', 'Release Date: ', data.Search[6].Year);
//       console.log('The title is: ', data.Search[7].Title,'/', 'Release Date: ', data.Search[7].Year);
//       console.log('The title is: ', data.Search[8].Title,'/', 'Release Date: ', data.Search[8].Year);
//       console.log('The title is: ', data.Search[9].Title,'/', 'Release Date: ', data.Search[9].Year);
//
//     }
//   })
// }
