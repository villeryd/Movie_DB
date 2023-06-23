import { Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { CastCard } from "../Components/castCard";

export function PeoplePopular() {
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/trending/person/today`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
        },
      })
      .then((res) => {
        setPerson(res.data);
      })
      .catch((error) => {
        error.response.status === 404
          ? navigate("*")
          : console.log(error.response);
      });
  }, []);
  return (
    person && (
      <>
        {person.map((p) => {
          <CastCard cast={p} />;
        })}
      </>
    )
  );
}
export function Person() {
  const [person, setPerson] = useState(null);
  const personID = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/person/${personID}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_TOKEN}`,
        },
      })
      .then((res) => {
        setPerson(res.data);
      });
  }, [personID]);
  return (
    <Card>
      <CardContent></CardContent>
    </Card>
  );
}
