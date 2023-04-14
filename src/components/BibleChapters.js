import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";

let s
const searchStyle = {
  // display: "flex",
  // padding: "20px",
  // justifyContent: "center",
  // gap: "50px",
  color: "black",
};

function BibleChapters({books, selectedBookChapters, selectedBookTitle}) {
  // const [eachBookAll, setBooks] = useState([]);
  // if (!selectedBook) {
  //   console.log("y")
  // }
  // useEffect(() => {
  //   fetch("http://localhost:9292/books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []); 
  
  console.log(selectedBookChapters)
  // console.log(selectedBook.chapters)//[0].verse_text
  // const r = selectedBook.chapters//[0].chapter_text//[0].map((eachChapter)=> eachChapter.chapter_text)
  // debugger;
  // for (let i = 0; i < selectedBook.chapters[0].chapter_text.length-1; i++) {
  //   console.log(selectedBook.chapters[0].chapter_text[i])
  // }
  // console.log(r)
  
  console.log(selectedBookChapters)
  return (
    <div style={searchStyle} className="card sizehomepgheight menu-container container-fluid centerhomemaindiv">
      <div className="card" style={{ width: "auto" }}>
        <div className="card-header">
          {selectedBookTitle}
        </div>
        {
            <p>{selectedBookChapters}</p>
         
       /* })} */}
      </div>
    </div>
  );
}

export default BibleChapters;
