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
            
                card.append(poster);
                card.append(titulo);
                card.append(year);
                card.append(director);

                $('.container').append(card);

                movie.people.forEach(person => {
                    let personCard = $('<div></div>');
                    personCard.addClass('card');

                    let personPoster = $('<img />');
                    personPoster.addClass('poster');
                    personPoster.attr('src', person.poster);

                    let personName = $('<h3></h3>');
                    personName.append(person.nombre);

                    let personGender = $('<p></p>');
                    personGender.append(person.genero);

                    let personAge = $('<p></p>');
                    personAge.append(person.edad);

                    let personEyes = $('<p></p>');
                    personEyes.append(person["eye_color"]);

                    let personHair = $('<p></p>');
                    personHair.append(person["hair_color"]);

                    let personSpecies = $('<p></p>');
                    personSpecies.append(person.especie);

                    personCard.append(personPoster);
                    personCard.append(personName);
                    personCard.append(personGender);
                    personCard.append(personAge);
                    personCard.append(personEyes);
                    personCard.append(personHair);
                    personCard.append(personSpecies);

                    $('.container').append(personCard);
                });
            });
        }
    });
})