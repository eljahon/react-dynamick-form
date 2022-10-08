
import {useState} from "react";
import SignupForm from "./components/registration";
import FormiBuilder from './components/FormBuilder/FormiBuilder'
function App() {
    const saveUser = async (data) => {
    const res = await fetch('http://localhost:5000/api/auth/registration', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        console.log(res.json());
    }
    const onSubmit = (values) => {
        console.log(values)
       
        saveUser(values)
    }
    const feilds = [{
        name: 'email',
        type: 'input',
        label: 'email',
        required: true,
        validationsType: 'string',
        value: null,
    },
        {
            name: 'password',
            type: 'input',
            label: 'password',
            required: true,
            validationsType: 'string',
        },
        {
            name: 'user',
            type: 'select',
            label: 'user',
            required: true,
            options: [{
                value: 'name',
                label: 'salom'
            }],
            validationsType: 'string',
        }
    ]
  return (
    <div className="App">
        <FormiBuilder feilds={feilds} onSubmit={onSubmit} title={'Siginin'}>
            <button type='submit'>Submit</button>
            </FormiBuilder>
    </div>
  );
}

export default App;
