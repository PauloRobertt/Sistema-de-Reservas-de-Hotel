import Input from '../form/Input.js';
import Button from '../form/SubmitButton.js';
import {useState} from 'react';

export default function Login() {
    const [usuario, setUsuario] = useState({});

    const submit = (e) =>{
        e.preventDefault();
        realizarLogin(usuario);
    }

    function handleEmail(e){
        setUsuario({...usuario, [e.target.name]: e.target.value});
    }

    function realizarLogin(usuario){
        fetch('http://localhost:3001/auth/login',{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data)})
        .catch((error)=>{console.log(error)})
    }

    return (
        <form onSubmit={submit}>
            <Input
                type='email'
                text='E-mail'
                name='email'
                handleOnChange={handleEmail}
                value={usuario.email}
                maxLength={100}
                placeholder='Digite seu endereço de e-mail'
            />
            <Input
                type='password'
                text='Senha'
                name='senha'
                handleOnChange={handleEmail}
                value={usuario.senha}
                maxLength={32}
                minLength={8}
                placeholder='Digite sua senha'
            />

            <Button
                tipo='type'
                text='Login'
            />
        </form>
    );
}