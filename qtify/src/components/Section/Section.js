import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
function Section() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  // useEffect(() => {}, []);
  // useEffect(() => {}, []);
  // console.log(topAlbums);
  // console.log(topAlbums);

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
            <Carousel topAlbums={topAlbums} />
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
      </div>
    </>
  );
}
export default Section;
// ksdlksaksafsflsklskdfksdfksdfkladsfasd;fabClasses;dfljsad;fl
