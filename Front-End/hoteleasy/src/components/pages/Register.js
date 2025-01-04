import Input from '../form/Input.js';
import Button from '../form/SubmitButton.js';
import { useState } from 'react';
import { useNavigate } from "react-router";

export default function Register() {
    const [usuario, setUsuario] = useState({});

    const navegate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        Register(usuario);
    }

    function handleEmail(e) {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    function Register(usuario) {
        fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                navegate("/login", { state: { message: 'Usuario criado com sucesso!' } })
            })
            .catch((error) => { console.log(error) })
    }

    return (
        <form onSubmit={submit}>
            <Input
                type='text'
                text='Nome'
                name='nome'
                handleOnChange={handleEmail}
                value={usuario.nome}
                maxLength={100}
                placeholder='Digite seu nome'
            />

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

            <Input
                type='hidden'
                name='role'
                value={usuario.role = 'USER'}
                handleOnChange={handleEmail}
            />

            <Button
                tipo='type'
                text='Login'
            />
        </form>
    );
}