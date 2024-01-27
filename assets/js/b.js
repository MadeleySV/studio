$(document).ready(() => {
    console.log(1);
    $.ajax({
        type: 'GET',
        url: 'ghibli.json',
        dataType: 'json',
        async: true,
        success: function(data) {
            console.log('A');

            data.films.forEach(movie => {
                let card = $('<div></div>');
                card.addClass('card');

                let poster = $('<img />');
                poster.addClass('poster');
                poster.attr('src', movie.poster);
                
                let titulo = $('<h3></h3>');
                titulo.append(movie.title);
                
                let year = $('<p></p>');
                year.append(movie["release_data"]);
                
                let director = $('<p></p>');
                director.append(movie.director);

                let description = $('<p></p>');
                description.append(movie.description);

                let productor = $('<p></p>');
                productor.append(movie.productor);
            
                card.append(poster);
                card.append(titulo);
                card.append(year);
                card.append(director);
                card.append(description);
                card.append(productor);
   
                $('.container').append(card);

    
            });


        }
    

    });
});
