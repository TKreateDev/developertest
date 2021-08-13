import styled from 'styled-components'
import {useState} from 'react'

function App() {
  const [isFirstStepCompleted, setIsFirstStepCompleted] = useState(false);
  const [isSecondStepCompleted, setIsSecondStepCompleted] = useState(false);
  const [isThirdStepCompleted, setIsThirdStepCompleted] = useState(false);

  return (
    <ParentContainer>
        <FormContainer onClick={() => setIsFirstStepCompleted(!isFirstStepCompleted)}>
          {isFirstStepCompleted && }
        </FormContainer>
        <FormContainer onClick={() => setIsSecondStepCompleted(!isSecondStepCompleted)}>
          {isSecondStepCompleted && }
        </FormContainer>
        <FormContainer onClick={() => setIsThirdStepCompleted(!isThirdStepCompleted)}>
          {isThirdStepCompleted && }
        </FormContainer>
    </ParentContainer>
  );
}

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ParentContainer = styled(CenteredContainer)`
  height: 100vh;
  flex-flow: column;
`
const FormContainer = styled.div`
  width: 80vw;
  margin: 20px; 
  min-height: 15vh;
  background-color: rgb(252, 184, 9);
`
const SubForm = styled.div`
  width: 100%;
  height: 25vh;
`

export default App;
