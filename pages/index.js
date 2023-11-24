import styled, { css } from "styled-components";
import Button from "@/components/Button/index.js";

const TextButton = styled(Button)``;

const FlexContainer = styled.section`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export default function HomePage() {
  return (
    <main>
      <h1>Styled Components with Props</h1>
      <h2>Props using the ternary</h2>
      <FlexContainer>
        <Button>Button</Button>
        <Button $color="danger">Danger Button</Button>
      </FlexContainer>
      <h2>Using Props: css block / complex component</h2>
      <FlexContainer>
        <Button $variant="text">Button - Text</Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </main>
  );
}
