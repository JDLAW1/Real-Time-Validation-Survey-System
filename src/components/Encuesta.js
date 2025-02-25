import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Paper,
  Box,
  Alert,
  LinearProgress,
} from "@mui/material";

function Encuesta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    satisfaction: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    updateProgress();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccessMessage("Encuesta enviada con éxito!");
    setProgress(100);

    setTimeout(() => {
      setSuccessMessage("");
      setFormData({
        name: "",
        email: "",
        age: "",
        satisfaction: "",
      });
      setProgress(0);
    }, 5000);
  };

  const updateProgress = () => {
    let completedFields = 0;
    for (const key in formData) {
      if (formData[key]) {
        completedFields++;
      }
    }
    setProgress((completedFields / Object.keys(formData).length) * 100);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 0 }}>
        <Box
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            padding: "16px",
            borderRadius: "4px 4px 0 0",
          }}
        >
          <Typography variant="h6" component="h2">
            Encuesta Interactiva
          </Typography>
        </Box>
        <Box sx={{ padding: 3 }}>
          <Typography variant="body1" gutterBottom>
            Complete la Encuesta
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ mb: 2 }}
          />{" "}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Edad"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <FormControl component="fieldset" margin="normal">
              <Typography variant="subtitle1" gutterBottom>
                Nivel de satisfacción:
              </Typography>
              <RadioGroup
                name="satisfaction"
                value={formData.satisfaction}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Muy Satisfecho"
                  control={<Radio />}
                  label="Muy Satisfecho"
                />
                <FormControlLabel
                  value="Satisfecho"
                  control={<Radio />}
                  label="Satisfecho"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio />}
                  label="Neutral"
                />
                <FormControlLabel
                  value="Insatisfecho"
                  control={<Radio />}
                  label="Insatisfecho"
                />
                <FormControlLabel
                  value="Muy Insatisfecho"
                  control={<Radio />}
                  label="Muy Insatisfecho"
                />
              </RadioGroup>
            </FormControl>
            <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
              {successMessage && (
                <Alert severity="success">{successMessage}</Alert>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 1 }}
              >
                Enviar Encuesta
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

export default Encuesta;
