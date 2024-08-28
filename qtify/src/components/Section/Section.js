import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ToggleButton from "../ToggleButton/ToggleButton";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [isShowTopAllClicked, setIsShowTopAllClicked] = useState(false);
  const [isShowNewAllClicked, setIsShowAllClicked] = useState(false);

  const handleIsTopClicked = (clicked) => {
    setIsShowTopAllClicked(clicked);
  };
  const handleIsNewClicked = (clicked) => {
    setIsShowAllClicked(clicked);
  };
  useEffect(() => {
    const fetchTopAlbumData = async () => {
      try {
        let res = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/top`
        );
        let data = res.data;
        setTopAlbums(data);
      } catch (error) {
        console.log("Error >>>", error.message);
      }
    };
    const fetchNewAlbumData = async () => {
      try {
        const res = await axios.get(
          `https://qtify-backend-labs.crio.do/albums/new`
        );
        const data = res.data;
        setNewAlbums(data);
      } catch (error) {
        console.log("error >>>", error);
      }
    };
    fetchTopAlbumData();
    fetchNewAlbumData();
  }, []);
  console.log("TopAlbum Data >>>", topAlbums);
  console.log("NewAlbum Data >>>", newAlbums);
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.topAlbumParent}>
          <ToggleButton isClicked={handleIsTopClicked} albumName={"NewAlbum"} />
          {!isShowTopAllClicked ? (
            <Carousel albums={topAlbums} />
          ) : (
            <Grid container spacing={1}>
              {topAlbums.map((album) => (
                <Grid key={album.id} item lg={2}>
                  <AlbumCard
                    albumImage={album.image}
                    title={album.title}
                    follows={album.follows}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </div>

        <div className={styles.newAlbumParent}>
          <ToggleButton isClicked={handleIsNewClicked} />
          {!isShowNewAllClicked ? (
            <Carousel albums={newAlbums} />
          ) : (
            <Grid container spacing={1}>
              {newAlbums.map((album) => (
                <Grid key={album.id} item lg={2}>
                  {
                    <AlbumCard
                      albumImage={album.image}
                      title={album.title}
                      follows={album.follows}
                    />
                  }
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
    </>
  );
}
export default Section;
