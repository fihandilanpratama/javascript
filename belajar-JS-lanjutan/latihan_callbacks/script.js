$('.search-button').on('click', function() {
   
   $.ajax({
      url: 'http://www.omdbapi.com/?apikey=dd388adb&s=' + $('.search-keyword').val(),
      success: result => {
         const movies = result.Search;
         let cards = '';
         if( movies == undefined ) alert(`tidak ada hasil untuk "${$('.search-keyword').val()}"!`);
         movies.forEach(movie => {
            cards += showCard(movie);
         });
         $('.movie-container').html(cards);
   
   
         // ketika tombol detail diklik
         $('.modal-detail-button').on('click', function() {
            $.ajax({
               url: 'http://www.omdbapi.com/?apikey=dd388adb&i=' + $(this).data('imdbid'),
               success: movie => {
                  const movieDetail = showMovieDetail(movie);
                  $('.modal-body').html(movieDetail);
               },
               error: (e) => {
                  console.log(e.responseText);
               }
            });
         });
      },
      error: (e) => {
         console.log(e.responseText);
      }
   });

});


function showCard(movie) {
   return `<div class="col-md-4 my-3">
               <div class="card">
                  <img src="${movie.Poster}" class="card-img-top" width="100">
                  <div class="card-body">
                  <h5 class="card-title">${movie.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                  <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">show detail</a>
                  </div>
               </div>
            </div>`;
}


function showMovieDetail(movie) {
   return `<div class="container-fluid">
               <div class="row">
                  <div class="col-md-3">
                     <img src="${movie.Poster}" width="180">
                  </div>
                  <div class="col-md">
                     <ul class="list-group">
                        <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                        <li class="list-group-item"><strong>Director : </strong>${movie.Director}</li>
                        <li class="list-group-item"><strong>Actors : </strong>${movie.Actors}</li>
                        <li class="list-group-item"><strong>Writer : </strong>${movie.Writer}</li>
                        <li class="list-group-item"><strong>Plot : </strong> <br> ${movie.Plot}</li>
                     </ul>
                  </div>
               </div>
            </div>`;
}