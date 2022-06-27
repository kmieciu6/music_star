import React, {useState} from 'react';
import '../../scss/main.scss';

export const Form = ({onSubmit}) => {
    // const [show, setShow] = useState(false);
    //
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const regTel = '/^([A-Za-z])$/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const _errors = [];

        if (name.length < 2 || name.indexOf(' ') === -1) {
            _errors.name = "Podane imię jest nieprawidłowe!";
        }

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.email = "Podany email jest nieprawidłowy!";
        }

        if (number === regTel) {
            _errors.number = "Numer telefonu musi posiadać tylko cyfry!"
        }

        if (number.length < 9 || number.length > 9) {
            _errors.number = "Numer telefonu musi posiadać 9 cyfr!"
        }

        if (message.length < 100) {
            _errors.message = "Wiadomość musi mieć conajmniej 100 znaków!";
        }

        setErrors(_errors);
        setSuccess(false);
        if (Object.values(_errors).length > 0) {
            return false;
        }

        const obj = {
            name,
            email,
            number,
            message
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Błąd sieci!");
                }
            })
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='infoForm'>
            <div className='info'>
                <h1>Formularz kontaktowy</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='suc'>
                    {success && <h2>Wiadomość została wysłana! Wkrótce się skontaktujemy.</h2>}
                </div>
                <div className='data'>
                    <div>
                        <h4>Imię i nazwisko</h4>
                        <input type="text" name="name" placeholder="Jan Kowalski" value={name}
                               onChange={e => setName(e.target.value)}/>
                        {errors.name && <p className='error'>{errors.name}</p>}
                    </div>
                    <div>
                        <h4>E-mail</h4>
                        <input type="text" name="email" placeholder="jan.kowalski@xyz.com"
                               value={email} onChange={e => setEmail(e.target.value)}/>
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div>
                        <h4>Telefon</h4>
                        <input type="text" name="number" placeholder="123456789"
                               value={number} onChange={e => setNumber(e.target.value)}/>
                        {errors.number && <p className='error'>{errors.number}</p>}
                    </div>
                </div>
                <div className='textarea'>
                    <h4>Treść wiadomości</h4>
                    <textarea name="text" rows={6} onChange={e => setMessage(e.target.value)}
                              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                   nisi ut aliquip ex ea commodo consequat."/>
                    {errors.message && <p className='error'>{errors.message}</p>}
                </div>
                <div className='button'>
                    <button type="submit">Wyślij</button>
                </div>
            </form>
        </div>
    );
};