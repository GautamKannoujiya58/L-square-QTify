import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import "./TabComponent.css";

function TabComponent(props) {
  const [value, setValue] = useState(0);

  // Function to handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("Valure in Tab>>>>>>>>>>", value);
  const jazzGenre = props.songs.filter((song) => song.genre.label === "Jazz");
  const rockGenre = props.songs.filter((song) => song.genre.label === "Rock");
  const popGenre = props.songs.filter((song) => song.genre.label === "Pop");
  const bluesGenre = props.songs.filter((song) => song.genre.label === "Blues");

  console.log("JazzGenres >>>>>>", jazzGenre);
  console.log("RockGeneres >>>>>>", rockGenre);
  console.log("PopGenres >>>>>>", popGenre);
  console.log("BluesGenres >>>>>>", bluesGenre);

  return (
    <Box sx={{ width: "auto" }}>
      <Tabs
        style={{ width: "auto", height: "34px", marginLeft: "32px" }}
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#34C94B", // Change this to the desired color
            height: 4, // Adjust the thickness
            borderRadius: "4px",
            marginLeft: "12px",
            minWidth: 20,
            maxWidth: 60,
          },
        }}
      >
        <Tab
          style={{
            color: "#FFFFFF",
            fontFamily: "Poppins",
            minWidth: "68px",
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "24px",
          }}
          label="All"
        />
        {props.genres.map((genre) => (
          <Tab
            key={genre.key}
            style={{
              color: "#FFFFFF",
              fontFamily: "Poppins",
              minWidth: "68px",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
            label={genre.label}
          />
        ))}
      </Tabs>
      {value === 0 && (
        <Box style={{ marginLeft: "28px", marginTop: "8px" }} p={2}>
          {<Carousel albums={props.songs} />}
        </Box>
      )}
      {value === 1 && (
        <Box style={{ marginLeft: "28px", marginTop: "8px" }} p={2}>
          {<Carousel albums={rockGenre} />}
        </Box>
      )}
      {value === 2 && (
        <Box style={{ marginLeft: "28px", marginTop: "8px" }} p={2}>
          {<Carousel albums={popGenre} />}
        </Box>
      )}
      {value === 3 && (
        <Box style={{ marginLeft: "28px", marginTop: "8px" }} p={2}>
          {<Carousel albums={jazzGenre} />}
        </Box>
      )}
      {value === 4 && (
        <Box style={{ marginLeft: "28px", marginTop: "8px" }} p={2}>
          {<Carousel albums={bluesGenre} />}
        </Box>
      )}
    </Box>
  );
}

export default TabComponent;
