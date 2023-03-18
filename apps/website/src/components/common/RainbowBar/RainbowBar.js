import React from "react";
import { withTheme } from "styled-components";
import { Wrapper, BarSection } from "./StyledRainbowBar";

function RainbowBar({ width = "100%", theme }) {
  return (
    <Wrapper width={width}>
      <BarSection color={theme.colors.ACCENT_1} />
      <BarSection color={theme.colors.ACCENT_2} />
      <BarSection color={theme.colors.ACCENT_4} />
      <BarSection color={theme.colors.ACCENT_3} />
    </Wrapper>
  );
}

export default withTheme(RainbowBar);
