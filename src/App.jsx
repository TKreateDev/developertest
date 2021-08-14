import styled from 'styled-components'
import { useState } from 'react'

function App() {
  const [isFirstStepCompleted, setIsFirstStepCompleted] = useState(false);
  const [isSecondStepCompleted, setIsSecondStepCompleted] = useState(false);
  const [isThirdStepCompleted, setIsThirdStepCompleted] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);

  const forms = [
    {
      completionfun: () => {setIsFirstStepCompleted(true); setCurrentForm(1);},
      formOpenFun: () => setCurrentForm(0),
    },
    {
      completionfun: () => {setIsSecondStepCompleted(true); setCurrentForm(2);},
      formOpenFun: () => (isFirstStepCompleted) ? setCurrentForm(1) : alert('Please complete first section'),
    },
    {
      completionfun: () => {setIsThirdStepCompleted(true); setCurrentForm(3);},
      formOpenFun: () => (isFirstStepCompleted && isSecondStepCompleted) ? setCurrentForm(2) : alert('Please complete second section'),
    }
  ]

  return (
    <CenteredFormContainer>
      <ParentContainer>
        {forms.map(({ completionfun, formOpenFun }, key) =>
          <FormContainer key={key}>
            <FormHeader onClick={formOpenFun}></FormHeader>
            {(currentForm === key) &&
              <SubForm>
                <SubmitButton onClick={completionfun}>Submit {key + 1}</SubmitButton>
              </SubForm>}
          </FormContainer>
        )}
      </ParentContainer>
    </CenteredFormContainer>
  );
}


const CenteredFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const SubmitButton = styled.span`
  position: relative;
  padding: 10px 10px;
  background: indigo;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 5;
`

const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  flex-flow: column;
  box-shadow: 3px 3px 5px 6px #ccc;
  padding: 5px 10px;
  border-radius: 20px;
`
const FormContainer = styled.div`
  width: 100%;
  padding: 5px; 
`
const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 7vh;
  background-color: rgb(252, 184, 9);
  border-radius: 10px;
  z-index: 2;
  padding: 20px;
`
const SubForm = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 20px;
  height: 20vh;
  background-color: grey;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -20px;
  transition: all 0.5s ease-in;
`

export default App;
