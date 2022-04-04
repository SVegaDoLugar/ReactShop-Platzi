import React, {useRef} from 'react';
import Layout from '../containers/Layout';
import Header from '../components/Header';
import '../styles/Login.scss';

const Login = () => {
	const form = useRef(null);
	const handleSubmit = (event) =>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			userName: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data)
	}
	return (
		<Layout>
			<Header/>
			<div className="Login">
				<div className="Login-container">
					<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
					<form action="/" className="form" ref={form}>
						<label htmlFor="email" className="label">Email address</label>
						<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
						<label htmlFor="password" className="label">Password</label>
						<input type="password" name="password" placeholder="*********" className="input input-password" />
						<button 
							type="submit"
							className="primary-button login-button"
							onClick={handleSubmit}>
								Log in
							</button>
						<a href="/">Forgot my password</a>
					</form>
					<button className="secondary-button signup-button">
						Sign up
					</button>
				</div>
			</div>
		</Layout>
	);
}

export default Login;