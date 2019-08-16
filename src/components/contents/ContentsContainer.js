import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Image from './Image';


export default function ContentsContainer () {

    const [all, setAll] = useState([]);
    const [copyright, setCopyright] = useState([])
    const [date, setDate] = useState([])
    const [explanation, setExplanation] = useState([])
    const [hdurl, setHdurl] = useState([])
    const [title, setTitle] = useState([])
    const [url, setURL] = useState([])

    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=4QxIUVYlkpHqOl0O2oGbTbd6DfPL07nO45OAnRxl`)
          .then(res => {
              const allInfo = res.data;
              const copyright = res.data.copyright
              const date = res.data.date
              const explanation = res.data.explanation
              const hdurl = res.data.hdurl
              const title = res.data.title
              const url = res.data.url
    
            console.log("data", allInfo);
            setAll(allInfo);
            setCopyright(copyright)
            setDate(date)
            setExplanation(explanation)
            setHdurl(hdurl)
            setTitle(title)
            setURL(url)

          });
      }, []);
    

    return (
        <div>
       {copyright}
       {date}
       {explanation}
       <img src = {hdurl} alt = 'ok'/>
       {title}
       <img src = {url} alt = 'ok'/>
            
        </div>
    )
}
