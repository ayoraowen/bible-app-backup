import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";


const searchStyle = {
  // display: "flex",
  // padding: "20px",
  // justifyContent: "center",
  // gap: "50px",
  color: "black",
};
let eachBookId

function Home({books, onSelectBook}) {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:9292/books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []); 
 function handleClick(id) {
  console.log(id)
  onSelectBook(id)

 }
  
  return (
    <div
      className="card sizehomepgheight menu-container container-fluid centerhomemaindiv"
      style={searchStyle}
    >
    
    
      
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle incrminwidth"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Book
            </button>
            <ul class="dropdown-menu dropdown-menu-dark incrminwidth">
              {
              books.map((bookItem) => {
                eachBookId = bookItem.id
                // console.log(bookItem)
                return (
                  
              <li key={bookItem.id} onClick={() => handleClick(bookItem.id)}>
                <NavLink
                                className="dropdown-item"
                                to={`/biblechapters/${bookItem.title}`}
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                background: "green",
                            
                                }}
                            >
                                {bookItem.title}
                            </NavLink>
                {/* <a className="dropdown-item" href="#">
                  {bookItem.title}
                </a> */}
                <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li></li>
              </li>)})
              /* <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </li> */}

            </ul>
          </div>
        </div>
      </div>
      
    
    
    </div>
  );
}

export default Home;
