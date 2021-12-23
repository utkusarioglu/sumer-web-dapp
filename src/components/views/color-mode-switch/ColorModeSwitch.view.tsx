import { setColorMode } from "_slices/app/app.slice";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ColorModeSwitchView = () => {
  // FIXME
  // @ts-ignore
  const buttonGroupOnChange: any = (_event, value) => {
    setColorMode(value[0]);
  };

  return (
    <ToggleButtonGroup onChange={buttonGroupOnChange} fullWidth>
      <ToggleButton value="default" aria-label="system default">
        Default
      </ToggleButton>
      <ToggleButton value="light" aria-label="Light colors">
        Light
      </ToggleButton>
      <ToggleButton value="dark" aria-label="Dark colors">
        Dark
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ColorModeSwitchView;
