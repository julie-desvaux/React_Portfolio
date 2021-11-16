import React from "react";
import Typewriter from "typewriter-effect";
import { saveAs } from "file-saver";

function About() {
	const saveFile = () => {
		saveAs("/docs/CV_Julie_Desvaux.pdf", "CV_Julie_Desvaux.pdf");
	};

	return (
		<section id="about" className="bg-blue px-5 py-4 md:py-8 text-white text-center">
			<div className="h-screen">
				<div className="w-3/4 md:w-1/4 mx-auto py-4">
					<img src="/me.jpg" alt="Photo de Julie Desvaux" className="rounded-full mx-auto" />
				</div>
				<h1 className="uppercase mt-2 md:mt-5 tracking-wide">Julie Desvaux</h1>
				<h2 className="uppercase mb-5">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.changeDelay(20)
								.typeString("<span>Dev Full-Stack MERN</span>")
								.pause(1500)
								.deleteChars(19)
								.typeString('<span style="color: #EFD81D;"> Javascript !</span>')
								.pause(1000)
								.deleteChars(12)
								.typeString('<span style="color: #48CEF7;">React !</span>')
								.pause(1000)
								.deleteChars(7)
								.typeString('<span style="color: #8BBF3D;"> Node !</span>')
								.pause(1000)
								.deleteChars(6)
								.typeString('<span style="color: #3D9537;"> MongoDB !</span>')
								.pause(1000)
								.deleteChars(10)
								.typeString('<span style="color: #EFD81D;"> Dev Web Full-Stack MERN</span>')
								.start();
						}}
					/>
				</h2>
				<button
					className="mt-5 md:mt-4 px-5 py-5 uppercase bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue py-2 px-4 rounded inline-flex items-center"
					onClick={saveFile}
				>
					<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
					</svg>
					<span>Télécharger CV</span>
				</button>
			</div>
			<div className="px-16 text-left">
				<p className="pb-4">
					Après 10 ans dans le secteur de la logistique où j'ai appris à développer des outils informatiques
					d'analyses sous VisualBasic, j'ai découvert que le développement me passionnais.J'ai donc décidé de
					continuer ma carrière dans cette voie et ai suivi une formation à la 3W Academy sur JAVA JEE.
				</p>
				<p className="py-4">
					J'ai ensuite effectuée une formation de développement web et web mobile chez Konexio qui s'est
					terminé le 12 octobre 2020. Depuis, je suis en stage chez Koya.
				</p>
				<p className="py-4">
					J'éprouve un intérêt particulier pour les projets liés au secteur de l'écologie, la santé et le
					domaine public
				</p>
			</div>
		</section>
	);
}

export default About;
