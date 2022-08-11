import React from "react";
import { Link } from "react-router-dom";

import { routes } from "@/core";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { Button, Card, CardContent } from "@mui/material";

import classes from "../characters.styles.scss";
import { Character, Gender } from "../characters.vm";

interface Props {
  character: Character;
}

export const CharacterDetail: React.FC<Props> = ({ character }) => {
  return (
    <>
      <Card sx={{ maxWidth: 650 }}>
        <CardContent className={classes.characterDetailCard}>
          <section className={classes.characterImageSection}>
            <img src={character.image} alt={`${character.name} image from Rick and Morty`} />
          </section>

          <section className={classes.detailsSection}>
            <div className={classes.detailsContainer}>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Name:&nbsp;</span>
                {character.name}
              </p>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Created:&nbsp;</span>
                {character.created?.toLocaleDateString()}
              </p>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Gender:&nbsp;</span>
                {character.gender === Gender.male ? <MaleIcon /> : <FemaleIcon />}
              </p>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Location:&nbsp;</span>
                {character.location}
              </p>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Species:&nbsp;</span>
                {character.species}
              </p>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Origin:&nbsp;</span>
                {character.origin}
              </p>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Status:&nbsp;</span>
                {character.status}
              </p>
              <p className={classes.detailInfo}>
                <span className={classes.detailTitle}>Type:&nbsp;</span>
                {character.type}
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
      <div className={classes.goBackButton}>
        <Link to={routes.rickAndMorty}>
          <Button>Go Back</Button>
        </Link>
      </div>
    </>
  );
};
