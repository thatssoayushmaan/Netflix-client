import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from 'axios'

const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        const getRandomLists = async () => {
          try {
            const res = await axios.get(
              `lists${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : ""
              }`,
              {
                headers: {
                  token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDdjMzMyZTI3NmIzMGY3ZjY3MjY0ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mjc5MzUwOTMsImV4cCI6MTYyNzkzODY5M30.tb1pP5NeLqYqK8_0C2FkZm9bNBZtFDRtc0xFjpCKpUo",
                },
              }
            );
            console.log(res)
            // setLists(res.data)
          } catch (err) {
            console.log(err);
          }
        };
        getRandomLists();
      }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type}/>
            {/* {lists.map(list => {
              <List />
            })} */}
            <List/>
        </div>
    );
};

export default Home;