import './App.css'
import { useState } from 'react';
interface props{

  title?:string;
  year?:number;
  img?:string;
  m_link?:string;
  pagecount?: number;
}
interface Movie{

  title:string;
  year:number;
  img:string;
  rating:number;
}
interface Book{
  title: string;
  year: number;
  img: string;
  pagecount: number;
}
interface Song{
  number: number;
  title: string;
  duration: string;
}
interface Album{
  title: string;
  artist: string;
  genre: string;
  year: number;
  img: string;
  songs: Song[];
}
const movies: Movie[] = [
  {
    title: "Eiga Chiikawa: Ningyo no Shima no Himitsu",
    year: 2026,
    img: "/chiikawa.jpg",
    rating: 8
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    img: "/spiderverae.jpg",
    rating: 9
  },
  {
    title: "fight club",
    year: 1999,
    img: "/fightclub.jpg",
    rating: 9
  },
  {
    title: "Pokémon: The First Movie",
    year: 1998,
    img: "/pokemon.jpg",
    rating: 7
  },
    {
    title: "Spirited Away",
    year: 2001,
    img: "/spiritedaway.jpeg",
    rating: 10
  }
];

const books: Book[] = [
  {title: "Zbrodnia i kara", year: 1867, pagecount: 592, img: "/Zbrodnia i kara.jpg"},
  {title: "mały książę", year: 1943, pagecount: 120, img: "/ksiaze.jpg"},
  {title: "Pokémon (książka)", year: 1999, pagecount: 100, img: "/pokemon.jpg"}
];
const albums: Album[] = [
  {
    title: "Spiderverse", artist: " Nicki Mina",//jest za późno żebym ich wszystkich wymieniała i chce spac
     genre: "Hip-hop, pop, trap", year: 2018,
    img: "/spiderverse-soundtrack.jpg",
    songs: [
      {number: 1, title: "Invincible", duration: "3:16"},
      {number: 2, title: "Sunflower ", duration: "3:30"},
      {number: 3, title: "What's Up Danger", duration: "3:18"}
    ]
  },
  {
    title: "Die Lit", artist: "Playboi Carti", genre: "Trap", year: 2018,
    img: "/Die_Lit_by_Playboi_Carti.jpg",
    songs: [
      {number: 1, title: "	R.I.P.", duration: "3:12"},
      {number: 2, title: "Lean 4 Real", duration: "2:57"}//aaaa cche spac
    ]
  }
];

function Movies({title, year, img, rating}:Movie){
    return(
      <div className="card" onClick={() => console.log("Wybrano film: " + title)}>
        <img src={img} className='img'></img>
        <div className="card-body">
          <p>{title}</p>
          <p>{year}</p>
          <button onClick={(event) => {
            event.stopPropagation();
            console.log("Pokaż szczegóły dla " + title);
          }}>Pokaż szczegóły</button>
          <p>Ocena: {rating}/10</p>
          {rating >= 8 && <p>Polecany</p>}
        </div>
      </div>
    );
}
function Ksiazki({ title, year, img, pagecount }: props) {
  return (
    <div className="card">
      <img src={img} className="img" alt={title} />
      <p>{title}</p>
      <p>Rok wydania: {year}</p>
      <p>Liczba stron: {pagecount}</p>
      {year !== undefined && year < 2000 && <p>Klasyka</p>}
    </div>
  );
}
function Utwor({number, title, duration}:Song){
  return (
    <>
      <td>{number}</td>
      <td>{title}</td>
      <td>{duration}</td>
    </>
  );
}
function AlbumMuzyczny({title, artist, genre, year, img, songs}:Album){
  function handleSongClick(songTitle: string){
    console.log("Wybrano utwór: " + songTitle + " z " + title);
  }

  return(
    <div className="card">
      <img src={img} className="img" />
      <p>{title}</p>
      <p>{artist} - {genre}</p>
      <p>{year}</p>
      {songs.length === 0 && <p>Brak utworów</p>}
      <table>
        <tbody>
          {songs.map((song)=> (
            <tr key={song.number} onClick={() => handleSongClick(song.title)}>
              <Utwor {...song} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
movies.sort((a,b)=> a.title.localeCompare(b.title));
books.sort((a,b)=> a.title.localeCompare(b.title));
albums.sort((a,b)=> a.title.localeCompare(b.title));
const movies_after2010 = movies.filter((movie)=> movie.year > 2010);
const books_new = [...books].sort((a,b)=> b.year - a.year);
const album_most_songs = [...albums].sort((a,b)=> b.songs.length - a.songs.length)[0];

function App(){
  const [filmyOpen, setFilmyOpen] = useState(true);
  const [ksiazkiOpen, setKsiazkiOpen] = useState(true);
  const [albumyOpen, setAlbumyOpen] = useState(true);
  const [filmy2010Open, setFilmy2010Open] = useState(true);
  const [ksiazkiNoweOpen, setKsiazkiNoweOpen] = useState(true);
  const [albumNajOpen, setAlbumNajOpen] = useState(true);
  //Co do pytania, mysle ze ogl jest to lepszy pomysl niz pisania tego za kzdym razem ale jest poznio, nie chce mi sie i moze w przyszleszlej edycji tgeo to dodam 
  return(
    <div>
      <div>
      <h1 onClick={()=> setFilmyOpen(!filmyOpen)}>{filmyOpen ? "▾ " : "▸ "}˚₊‧꒰ა FILMY ໒꒱ ‧₊˚</h1><br />
      {filmyOpen && <div className='put_correct'>
        {movies.map((movie)=> (
        <Movies
        key={movie.title}
        title={movie.title}
        year={movie.year}
        img={movie.img}
        rating={movie.rating}
        />
        ))}
      </div>}
     
    </div>
    <div>
      <h1 onClick={()=> setKsiazkiOpen(!ksiazkiOpen)}>{ksiazkiOpen ? "▾ " : "▸ "}Ksiazki</h1><br />
      {ksiazkiOpen && <div className='put_correct'>
        {books.map((book)=> <Ksiazki key={book.title} {...book} />)}
        <img src="/Hungry Belly Sticker.gif" className='img' />
        
        
      </div>}
     
    </div>
    <div>
      <h1 onClick={()=> setAlbumyOpen(!albumyOpen)}>{albumyOpen ? "▾ " : "▸ "}Albumy muzyczne</h1><br />
      {albumyOpen && <div className='put_correct'>
        {albums.map((album)=> <AlbumMuzyczny key={album.title} {...album} />)}
      </div>}
    </div>
    <div>
      <h1 onClick={()=> setFilmy2010Open(!filmy2010Open)}>{filmy2010Open ? "▾ " : "▸ "}Filmy po 2010</h1><br />
      {filmy2010Open && <div className='put_correct'>
        {movies_after2010.map((movie)=> <Movies key={movie.title} {...movie} />)}
      </div>}
    </div>
    <div>
      <h1 onClick={()=> setKsiazkiNoweOpen(!ksiazkiNoweOpen)}>{ksiazkiNoweOpen ? "▾ " : "▸ "}Ksiazki od najnowszej</h1><br />
      {ksiazkiNoweOpen && <div className='put_correct'>
        {books_new.map((book)=> <Ksiazki key={book.title} {...book} />)}
      </div>}
    </div>
    <div>
      <h1 onClick={()=> setAlbumNajOpen(!albumNajOpen)}>{albumNajOpen ? "▾ " : "▸ "}Album z najwieksza liczba utworow</h1><br />
      {albumNajOpen && <div className='put_correct'>
        <AlbumMuzyczny {...album_most_songs} />
      </div>}
    </div>
    </div>
    
  );
}
export default App
