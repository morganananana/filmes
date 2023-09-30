const filmes = [{
    nome: 'Eu queria ter sua vida',
    anoLancamento: 2011,
    poster: 'https://media.fstatic.com/VeNyNM3kBIPAN0mCKU-4vLG_uUQ=/210x312/smart/filters:format(webp)/media/movies/covers/2014/06/eu-queria-ter-a-sua-vida_t36379_2.jpg',
    diretor: 'David Dobkin',
    disponivelEm: [
        'Amazon Prime',
        'YouTube',
        'Apple Tv',
    ]
},
{
    nome: 'As branquelas',
    anoLancamento: 2004,
    poster: 'https://media.fstatic.com/2w7jxPkN82zyXJWQg9VBcxzB6XI=/210x312/smart/filters:format(webp)/media/movies/covers/2013/03/7c6d04317a06c6cea984d49646fb4d9c_1.jpg',
    diretor: 'Keenen Ivory Wayans',
    disponivelEm: [
        'Amazon Prime',
        'Netflix',
        'Apple Tv',
    ]
},
{
    nome: 'Todo mundo em pânico',
    anoLancamento: 2000,
    poster:'https://media.fstatic.com/4j99UfwM69iEt50tYxPCn2gMuKk=/210x312/smart/filters:format(webp)/media/movies/covers/2018/08/Scary_Movie_2000_Poster.jpg',
    diretor: 'Keenen Ivory Wayans',
    disponivelEm: [
        'Amazon Prime',
        'Globo Play',
        'Apple Tv',
    ]
},
];

const htmlList = document.querySelector('#filmes');

for (let filme of filmes) {
    const img = document.createElement('img');
    img.src = filme.poster;
    htmlList.appendChild(img);
    let p = document.createElement('p');
    let b = document.createElement('b');
    b.textContent = 'Nome: ';
    let span = document.createElement('span');
    span.textContent = filme.nome;
    p.appendChild(b);
    p.appendChild(span);
    htmlList.appendChild(p);
     p = document.createElement('p');
     b = document.createElement('b');
    b.textContent = 'Idade: ';
    span = document.createElement('span');
    span.textContent = 2023 -filme.anoLancamento;
    p.appendChild(b);
    p.appendChild(span);
    htmlList.appendChild(p);
}