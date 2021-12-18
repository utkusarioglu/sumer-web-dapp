import { useState } from "react";
import Button from "@mui/material/Button";
import wasmService from "_services/wasm/wasm.service";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const WasmView = () => {
  const [value, setValue] = useState("");

  const getValueOnClick = () => {
    wasmService.lerp(1, 2, 0.5).then((response) => {
      setValue(response);
    });
  };

  return (
    <Container>
      <Button onClick={getValueOnClick} variant="contained" fullWidth>
        Get Wasm Value
      </Button>
      <Typography>{value}</Typography>
    </Container>
  );
};

export default WasmView;
