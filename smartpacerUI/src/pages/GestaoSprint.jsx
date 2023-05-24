import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function GestaoSprint() {
  const navigate = useNavigate();
  const [semestre, setSemestre] = useState(0);
  const [ano, setAno] = useState(0);
  const [idSprint, setIdSprint] = useState(0);
  const [idEquipe, setIdEquipe] = useState(0);
  const [nota, setNota] = useState(0);

  const handleVoltarParaHome = () => {
    navigate("/home-prof");
  };

  const fetchDataSprint = async () => {
    console.log("Semestre: " + semestre + " Ano: " + ano);
  };

  function handleFetchDataSprint() {
    fetchDataSprint();
  }

  const fetchCadastrarNotapacer = async () => {
    console.log(
      "Sprint: " + idSprint + " Equipe: " + idEquipe + " Nota: " + nota
    );
  };

  function handleFetchCadastrarNotaPacer() {
    fetchCadastrarNotapacer();
  }

  return (
    <>
      <Grid container flexDirection="column" alignItems="center">
        <Grid item sx={{ marginTop: 10 }}>
          <Typography variant="h3">Gestão Sprint</Typography>

          <Button onClick={handleVoltarParaHome}>Voltar</Button>
          <Paper elelvation={2} sx={{ padding: 5, width: 500 }}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Grid
                  item
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                  }}
                >
                  <TextField
                    type="text"
                    label="Semestre"
                    variant="outlined"
                    sx={{ width: 150, justifySelf: "right" }}
                    required
                    onChange={(e) => setSemestre(e.target.value)}
                  />
                  <TextField
                    type={"text"}
                    label="Ano"
                    variant="outlined"
                    sx={{ width: 150, justifySelf: "center" }}
                    required
                    onChange={(e) => setAno(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    sx={{ width: 150, justifySelf: "left" }}
                    onClick={handleFetchDataSprint}
                  >
                    Pesquisar
                  </Button>
                </Grid>
                <Grid container direction="column" spacing={4} marginTop={2}>
                  <Grid item sx={{ alignSelf: "center", width: 500 }}>
                    <InputLabel id="sprint-select-label">Sprint</InputLabel>
                    <Select
                      labelId="sprint-select-label"
                      placeholder="Sprint"
                      select
                      fullWidth
                      onChange={(e) => setIdSprint(e.target.value)}
                      value={idSprint}
                      defaultValue={1}
                    >
                      <MenuItem value={1}>Sprint 1</MenuItem>
                      <MenuItem value={2}>Sprint 2</MenuItem>
                    </Select>
                  </Grid>

                  <Grid item sx={{ alignSelf: "center", width: 500 }}>
                    <InputLabel id="equipe-select-label">Equipe</InputLabel>
                    <Select
                      labelId="equipe-select-label"
                      select
                      fullWidth
                      placeholder="Equipe"
                      onChange={(e) => setIdEquipe(e.target.value)}
                      value={idEquipe}
                      defaultValue={1}
                    >
                      <MenuItem value={1}>Equipe 1</MenuItem>
                      <MenuItem value={2}>Equipe 2</MenuItem>
                    </Select>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      alignSelf: "center",
                      width: 500,
                    }}
                  >
                    <TextField
                      type="number"
                      label="Nota Pacer"
                      onChange={(e) => setNota(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleFetchCadastrarNotaPacer}
                    >
                      Cadastrar nota pacer
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default GestaoSprint;
