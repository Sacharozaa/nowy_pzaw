import './App.css'
interface props{

  title?:string;
  year?:number;
  img?:string;
  m_link?:string;
  pagecount?: number;
}
interface Movie{

  title?:string;
  year?:number;
  img?:string;
}

const movies: Movie[] = [
  {
    title: "Eiga Chiikawa: Ningyo no Shima no Himitsu",
    year: 2026,
    img: "./public/chiikawa.jpg"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    img: "./public/spiderverae.jpg"
  },
  {
    title: "fight club",
    year: 1999,
    img: "./public/fightclub.jpg"
  },
  {
    title: "Pokémon: The First Movie",
    year: 1998,
    img: "./public/pokemon.jpg"
  },
    {
    title: "Spirited Away",
    year: 2001,
    img: "./public/spiritedaway.jpeg"
  }
];


function Movies({title, year, img}:props){
    return(
      <div>
        <img src={img} className='img'></img>
        <p>{title}</p>
        <p>{year}</p>
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
        />
        ))}
      </div>
     
    </div>
    <div>
      <h1>Ksiazki</h1><br />
      <div className='put_correct'>
        <Ksiazki 
        title="Zbrodnia i kara" 
        year={1867} 
        pagecount={592}
        img="./public/Zbrodnia i kara.jpg"/>
        <Ksiazki 
        title="mały książę" 
        year={1943} 
        pagecount={120}
        img="./public/ksiaze.jpg"/>
        <Ksiazki 
        title=". ݁⋆ ۶ৎ ݁˖ . ݁" 
        img="./public/Hungry Belly Sticker.gif"/>
        
        
      </div>
     
    </div>
    </div>
    
  );
}
export default App