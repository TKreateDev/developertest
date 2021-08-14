import styled from 'styled-components'
import React, { useState } from 'react'

function App() {
  const [isFirstStepCompleted, setIsFirstStepCompleted] = useState(false);
  const [isSecondStepCompleted, setIsSecondStepCompleted] = useState(false);
  const [, setIsThirdStepCompleted] = useState(false);
  const [currentForm, setCurrentForm] = useState(0);

  const forms = [
    {
      completionfun: () => { setIsFirstStepCompleted(true); setCurrentForm(1); },
      formOpenFun: () => setCurrentForm(0),
      form: <YourDetails/>
    },
    {
      completionfun: () => { setIsSecondStepCompleted(true); setCurrentForm(2); },
      formOpenFun: () => (isFirstStepCompleted) ? setCurrentForm(1) : alert('Please complete first section'),
      form: <MoreComments/>
    },
    {
      completionfun: () => { setIsThirdStepCompleted(true); setCurrentForm(3); },
      formOpenFun: () => (isFirstStepCompleted && isSecondStepCompleted) ? setCurrentForm(2) : alert('Please complete second section'),
      form: <FinalComments/>

    }
  ]

  return (
    <CenteredFormContainer>
      <ParentContainer>
        {forms.map(({ completionfun, formOpenFun, form }, key) =>
          <FormContainer key={key}>
            <FormHeader onClick={formOpenFun}></FormHeader>
            {(currentForm === key) &&
              <SubForm>
                <Form>
                  {form}
                  <SubmitButtonContainer>
                    <SubmitButton onClick={completionfun}>Submit {key + 1}</SubmitButton>
                  </SubmitButtonContainer>
                </Form>
              </SubForm>}
          </FormContainer>
        )}
      </ParentContainer>
    </CenteredFormContainer>
  );
}

const YourDetails = () => {
  return (
    <React.Fragment>
      <FormInputsContainer>
        <Input type='text' placeholder='name'></Input>
        <Input type='text' placeholder='surname'></Input>
      </FormInputsContainer>
      <FormInputsContainer>
        <Input type='email' placeholder='email'></Input>
      </FormInputsContainer>
    </React.Fragment>
  )
}

const MoreComments = () => {
  return (
    <React.Fragment>
      <FormInputsContainer>
        <Input type='number' placeholder='number'></Input>
        <select name="genger">
          <option disabled>Select gender</option>
          <option value="male">Female</option>
          <option value="female">Male</option>
          <option value="other">Other</option>
          <option value="prefer not to say">Prefer not to say</option>
        </select>
      </FormInputsContainer>
      <FormInputsContainer>
        <div>
          <Input placeholder='DD'></Input>
          <Input placeholder='MM'></Input>
          <Input placeholder='YYYY'></Input>
        </div>
      </FormInputsContainer>
    </React.Fragment>
  )
}

const FinalComments = () => {
  return (
    <React.Fragment>
      <FormInputsContainer>
        <textarea></textarea>
      </FormInputsContainer>
    </React.Fragment>
  )
}

const Input = styled.input`
  font-family: sans-serif;
  outline: 0;
  width: 35%;
  min-width: 150px;
  max-width: 300px;
  border: 0;
  margin: 10px 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 7px 1px rgba(0,0,0,0.59);
`

const FormInputsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0px 10px 0px;
`

const SubmitButtonContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const CenteredFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const SubmitButton = styled.span`
  margin: 15px;
  padding: 10px 10px;
  background: indigo;
  color: white;
  border-radius: 5px;
  cursor: pointer;`

const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  max-width: 600px;
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
  max-height: 30px;
  background-color: rgb(252, 184, 9);
  border-radius: 10px;
  z-index: 2;
  padding: 20px;
`
const SubForm = styled.div`
  background-color: #e6e6e6;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: -20px;
  transition: all 0.2s ease-in;
`

export default App;
