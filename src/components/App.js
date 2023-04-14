import React, {useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
// import '../../src/App.css'
import FavoriteVerses from "./FavouriteVerses";
import BibleChapters from "./BibleChapters";
import About from './About';


function App() {
  const [books, setBooks] = useState([]);
  const [selectedBookChapters, setSelectedBookChapters] = useState([]);
  const [selectedBookTitle, setSelectedBookTitle] = useState([]);
let d
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []); 
  

  function handleSelectedBook(theId) {
    //useEffect(() => {
    
      fetch(`http://localhost:9292/books/${theId}`)
        .then((res) => res.json())
        .then((data2) => {
          const chapters = data2.chapters.map(allChapters => allChapters.chapter_text)//[0]//.chapter_text
          console.log(data2)
          setSelectedBookTitle(data2.title)
          setSelectedBookChapters(chapters)

        });//
    //}, []); 

  }
    
  return <div>
  {/* <nav class="navbar background"> */}
      <ul class="nav-list">
          <div class="logo">
          {/* <img alt="logo" src="" width={140} height={100} />  */}
          </div>
      <header className="App-header">{/**/}
          <Navbar />
      </header>
      <Switch>
      <Route exact path="/favourite-verses">
          <FavoriteVerses/>
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        {books.map((eachBook) => {
          return (
        <Route key={eachBook} exact path={`/biblechapters/${eachBook.title}`}>
          <BibleChapters books={books} selectedBookChapters={selectedBookChapters} selectedBookTitle={selectedBookTitle}/>

        </Route>)}) }

        <Route exact path="/">
          <Home books={books} onSelectBook={handleSelectedBook}/>
          {/* <Switch>
          <Route exact path="/biblechapters">
            <BibleChapters />
          </Route>  
          </Switch> */}
        </Route>
      </Switch>
      </ul>
                  {/* <div class="rightNav"> moved to Navbar
                  <input type="text" placeholder="Search.." />
                  <button class="btn">Search</button>
                  </div> */}
  {/* </nav> */}

  {/* <div>
   <img src={imgUrl} alt="randomimage"/>
  </div> */}

  
  </div>;
}

export default App;
