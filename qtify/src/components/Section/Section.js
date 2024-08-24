import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Section.module.css";
function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  // useEffect(() => {}, []);
  // useEffect(() => {}, []);

  const handleShowAllClick = () => {
    setIsShowAll((prevstate) => !prevstate);
  };

  useEffect(() => {
    const fetchAlbumData = async () => {
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
    fetchAlbumData();
  }, []);
  console.log("Album Data >>>", topAlbums);
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.topAlbumParent}>
          <div className={styles.albumTopBar}>
            <p className={styles.heading}>Top Albums</p>
            {!isShowAll ? (
              <button
                className={styles.toggleButton}
                onClick={handleShowAllClick}
              >
                Show all
              </button>
            ) : (
              <button
                className={styles.toggleButton}
                onClick={handleShowAllClick}
              >
                Collapse
              </button>
            )}
          </div>
          {!isShowAll ? (
            <Grid container spacing={4}>
              {topAlbums
                .slice(0, Math.floor(topAlbums.length / 2))
                .map((album) => (
                  <Grid key={album.id} item lg={2}>
                    <AlbumCard
                      albumImage={album.image}
                      title={album.title}
                      follows={album.follows}
                    />
                  </Grid>
                ))}
            </Grid>
          ) : (
            <Grid container spacing={4}>
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
      </div>
    </>
  );
}
export default Section;

/* title, follows */
/* <Grid item lg={2}>
          <AlbumCard title={title} follows={follows} />
        </Grid> */
