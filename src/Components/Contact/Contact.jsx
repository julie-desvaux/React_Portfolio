import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const isValidEmail = (email) => {
		const regex =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(String(email).toLowerCase());
	};

	const submit = (e) => {
		e.preventDefault();
		if (isValidEmail(email)) {
			if (name && lastname && email && message) {
				const templateParams = {
					name,
					lastname,
					email,
					message,
				};

				emailjs
					.send(
						process.env.REACT_APP_SERVICEID,
						process.env.REACT_APP_TEMPLATEID,
						templateParams,
						process.env.REACT_APP_USERID
					)
					.then((response) => console.log(response))
					.then((error) => console.log(error));

				setName("");
				setLastname("");
				setEmail("");
				setMessage("");
				alert("Email bien envoyé");
			} else {
				alert("Merci de remplir tous les champs");
			}
		} else {
			alert("Merci de renseigner une adresse email correcte");
		}
	};

	return (
		<section id="contact" className="pt-16 px-3 text-center pb-16">
			<div className="w-full md:w-9/12 m-auto">
				<div className="blue-divider w-24 h-1 bg-blue mx-auto"></div>
				<h2 className="my-2 uppercase text-blue text-3xl md:text-4xl">Contact</h2>
				<div className="mt-16">
					<form id="contact-me" className="w-full mx-auto max-w-3xl bg-blue shadow p-8 text-gray-700 rounded">
						<div className="flex flex-wrap mb-6">
							<div className="relative w-full appearance-none label-floating">
								<input
									className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
									id="name"
									type="text"
									placeholder="Votre nom"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<label
									htmlFor="name"
									className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
								>
									Votre nom
								</label>
							</div>
						</div>
						<div className="flex flex-wrap mb-6">
							<div className="relative w-full appearance-none label-floating">
								<input
									className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
									id="lastname"
									type="text"
									placeholder="Votre prénom"
									required
									value={lastname}
									onChange={(e) => setLastname(e.target.value)}
								/>
								<label
									htmlFor="lastname"
									className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
								>
									Votre prénom
								</label>
							</div>
						</div>
						<div className="flex flex-wrap mb-6">
							<div className="relative w-full appearance-none label-floating">
								<input
									className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
									id="email"
									type="text"
									placeholder="Votre email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label
									htmlFor="email"
									className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
								>
									Votre email
								</label>
							</div>
						</div>
						<div className="flex flex-wrap mb-6">
							<div className="relative w-full appearance-none label-floating">
								<textarea
									className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500 h-60"
									id="message"
									type="text"
									placeholder="Votre message..."
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
								<label
									htmlFor="message"
									className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
								>
									Votre message...
								</label>
							</div>
						</div>

						<div>
							<button
								className="w-full shadow bg-lightBlue hover:bg-lightBlue focus:shadow-outline focus:outline-none text-blue font-bold py-2 px-4 rounded"
								type="submit"
								onClick={(e) => submit(e)}
							>
								Envoyer
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
