import Header from "./Header";
import React, { useState, useEffect } from "react";
import FormData from "./FormData";
const Main = () => {
  const [memearray, setMemearray] = useState([]);
  const [text, setText] = useState({
    toptext: "",
    bottomtext: "",
    new_url: "https://i.imgflip.com/1o00in.jpg",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText((prevtext) => ({
      ...prevtext,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const random = Math.floor(Math.random() * memearray.length);
    // url of an object of the Memearray at a random index
    const url = memearray[random].url;
    setText((prevtext) => ({
      ...prevtext,
      new_url: url,
    }));
  };
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemearray(data.data.memes))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="content">
        <FormData toptext={text.toptext} bottomtext={text.bottomtext} handleChange={handleChange}/>
        <div className="btn-container">
          <button onClick={handleSubmit} className="btn">
            Get a New Meme image
          </button>
        </div>
        <div className="div-postion">
          <p className="name-tag">{text.toptext}</p>
          <p className="name-tags">{text.bottomtext}</p>
          {error}
          <p className="img-container">
            <img src={text.new_url} alt="" className="img--last" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
