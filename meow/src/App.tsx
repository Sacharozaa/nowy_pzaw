import './App.css'
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
    img: "/fightclub.jpg", rating: 9
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
      <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
        <p>Ocena: {rating}/10</p>
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
    </div>
  );
}
function Utwor({number, title, duration}:Song){
  return <p>{number}. {title} - {duration}</p>;
}
function AlbumMuzyczny({title, artist, genre, year, img, songs}:Album){
  return(
    <div className="card">
      <img src={img} className="img" />
      <p>{title}</p>
      <p>{artist} - {genre}</p>
      <p>{year}</p>
      {songs.map((song)=> <Utwor key={song.number} {...song} />)}
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
  return(
    <div>
      <div>
      <h1>˚₊‧꒰ა FILMY ໒꒱ ‧₊˚</h1><br />
      <div className='put_correct'>
        {movies.map((movie)=> (
        <Movies
        key={movie.title}
        title={movie.title}
        year={movie.year}
        img={movie.img}
        rating={movie.rating}
        />
        ))}
      </div>
     
    </div>
    <div>
      <h1>Ksiazki</h1><br />
      <div className='put_correct'>
        {books.map((book)=> <Ksiazki key={book.title} {...book} />)}
        <img src="/Hungry Belly Sticker.gif" className='img' />
        
        
      </div>
      </div>
    <div>
      <h1>Albumy muzyczne ˖ ݁♬⋆.˚𝄞</h1><br />
      <div className='put_correct'>
        {albums.map((album)=> <AlbumMuzyczny key={album.title} {...album} />)}
      </div>
    </div>
    <div>
      <h1>Filmy po 2010˚˖𓍢ִ໋🦢˚</h1><br />
      <div className='put_correct'>
        {movies_after2010.map((movie)=> <Movies key={movie.title} {...movie} />)}
      </div>
    </div>
    <div>
      <h1>Ksiazki od najnowszej₊˚⊹ᰔ</h1><br />
      <div className='put_correct'>
        {books_new.map((book)=> <Ksiazki key={book.title} {...book} />)}
      </div>
    </div>
    <div>
      <h1>Album z najwieksza liczba utwoeow⋆✴˚｡⋆</h1><br />
      <div className='put_correct'>
        <AlbumMuzyczny {...album_most_songs} />
      </div>
    </div>
    </div>
    
  );
}
export default App