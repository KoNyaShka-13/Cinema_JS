'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');//В данном случае у нас коллекция, мы не можем из-за этого исполььзовать метод remove, нужно будет удалять по отдельности

const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movielist = document.querySelector('.promo__interactive-list');//Берем сам список, а не псевдоэлемент из элементов списка для более удобного исползования

adv.forEach(item => {//Через функцию удаляем объекты, что находились в массиве
    item.remove();
});

genre.textContent = 'драма';//Изменили текст

poster.style.backgroundImage = "url(img/bg.jpg)";
movielist.innerHTML = '';//Очищаем список
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {//Делаем переборку и пример того, как записать ответ
    movielist.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

