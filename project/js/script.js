'use strict';

document.addEventListener('DOMContentLoaded', () => {//После того, как дом дерево загрузилось, начинаем зугрузку остального, чтобы все загрузилось без ошибок

    const movieDB = {
        movies: [
            "логан",
            "лига справедливости",
            "ла-ла лэнд",
            "одержимость",
            "скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),//В данном случае у нас коллекция, мы не можем из-за этого исполььзовать метод remove, нужно будет удалять по отдельности
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),//Берем сам список, а не псевдоэлемент из элементов списка для более удобного исползования
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {//Отменяем нормальную работу браузера, чтобы страница при обновлении данных не бновлялась
        event.preventDefault();


        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;//Обрезаем и добавляем ...
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {//Через функцию удаляем объекты, что находились в массиве
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';//Изменили текст

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };


//Добавляем / удаляем и сортируем новые элементы
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);//Добавляем сюда для того, чтобы сразу все сортировалось  с вызовом функции
    
        films.forEach((film, i) => {//Делаем переборку и пример того, как записать ответ
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);//Используем рекурсию для обновления нумерации
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});

