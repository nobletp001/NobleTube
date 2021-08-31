import React from 'react'
import '../components/header.css'
import Search from './search'
import axios from 'axios';
import Welcome from './Welcome';
export default function Header() {
    const [inputText, setInputText] = React.useState('');
    const [video, setVideo] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [show, setShow] = React.useState(true);

//     useEffect(() => {
//     localStorage.setItem("document", JSON.stringify(video));
//  for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   let local = JSON.parse(localStorage.getItem(key));
// console.log(local)
//  }
//     }, [])

   
   const handleInput=(e)=>{
       e.preventDefault(); 
        setInputText(e.target.value)
    }
    
      


    const SendData=()=>{
setLoading(true)
axios.get(
  `https://youtube.googleapis.com/youtube/v3/search?type=video&q=${inputText}&part=snippet&maxResults=100&key=AIzaSyCcMbGYhsuXkoMRaHwTafRid8TTPyTR1I0`
).then((res)=>{
  const {items} = res.data;
  setVideo(items)
  // console.log(items)
  setLoading(false)
  setInputText('')
  setShow(false)
}).catch((error)=>{
  console.log(error)
  setLoading(false);

});

    }
    return (
      <>
        <div className="header">
          <form className="Form">
            <div className="input-group  grid justify-content-center ">
              <div className="form-outline bg-white col-xs-6 ">
                <input
                  id="search-input"
                  type="search"
                  className="form-control text-dark  fs-3 text-uppercase  shadow-lg bg-white "
                  value={inputText}
                  onChange={handleInput}
                />
                <label
                  className="form-label shadow-lg "
                  htmlFor="form1 "
                >
                  Search
                </label>
              </div>
              <button
                id="search-button"
                type="button"
                className="btn btn-white shadow-lg bg-white col-xs-2"
                onClick={(e) => {
                  e.preventDefault();
                  SendData();
                }}
              >
                <i className="fas fa-search shadow-lg bg-white" />
              </button>
            </div>
          </form>
          {loading ? (
            <div
              style={{ color: "#fff", textAlign: "center", display: "block" }}
            >
              <img src="tenor.gif" alt="..." className="img-thumbnail"></img>
            </div>
          ) : (
            ""
          )}

          {show ? (
            <Welcome />
          ) : (
            <div className="Search">
              <Search video={video} />
            </div>
          )}
        </div>
      </>
    );
}
