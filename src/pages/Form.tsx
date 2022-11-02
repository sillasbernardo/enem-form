import React, { useRef } from "react";
import axios from "axios";

import "./Form.scss";
const logo = require("../assets/logo.png")
const API_PORT = "3001";
const API_URL = `http://168.197.129.251:${API_PORT}`;

const Form = () => {
	var nameRef = useRef<any>(null);
	var emailRef = useRef<any>(null);
	var phoneRef = useRef<any>(null);

	const postData = () => {
		console.log('im clicked')
		axios.post(`${API_URL}/send`, {
			name: nameRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value
		})
	}

	return (
		<div className="container">
			<form name="enemForm">
				<div className="form-div">
					<div className="logo">
						<img src={logo} alt="logo" width="250" />
					</div>
					<div className="form-info">
						<h5>07 a 11 de novembro</h5>
						<h5>Plataforma: Meet</h5>
						<h5>Período: Noite</h5>
					</div>

					<div className="element-form">
						<label>Nome</label>
						<input
							ref={nameRef}
							type="text" 
							name="fname" 
							id="name"/>
					</div>
					<div className="element-form">
						<label>E-mail</label>
						<input
							ref={emailRef}
							type="text" 
							name="femail" 
							id="email"/>
					</div>
					<div className="element-form">
						<label>Telefone</label>
						<input 
							ref={phoneRef}
							type="text" 
							name="fphone" 
							id="phone"/>
					</div>
					<a href="https://wa.me/5571996598901">
						<button type="button" onClick={postData}>Continuar</button>
					</a>
				</div>
			</form>
		</div>
	)
}

export default Form;