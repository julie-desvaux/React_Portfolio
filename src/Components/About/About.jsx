import React from "react";
import Typewriter from "typewriter-effect";
import { saveAs } from "file-saver";

function About() {
	const saveFile = () => {
		saveAs("/docs/CV_Julie_Desvaux.pdf", "CV_Julie_Desvaux.pdf");
	};

	return (
		<section id="about" className="bg-blue px-5 py-4 md:py-8 text-white text-center">
			<div className="w-full md:w-9/12 m-auto">
				<div className="h-screen pt-8 flex justify-center items-center flex-col">
					<div className="w-3/4 md:w-1/4 mx-auto py-4">
						<img src="/images/me.webp" alt="Julie Desvaux" className="rounded-full mx-auto w-full h-full" />
					</div>
					<h1 className="uppercase mt-2 md:mt-5 tracking-wide">Julie Desvaux</h1>
					<h2 className="uppercase mb-5">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.changeDelay(20)
									.typeString('<span class="mern">Dev Full-Stack MERN</span>')
									.pause(1500)
									.deleteChars(19)
									.typeString('<span class="js"> Javascript !</span>')
									.pause(1000)
									.deleteChars(12)
									.typeString('<span class="react">React !</span>')
									.pause(1000)
									.deleteChars(7)
									.typeString('<span class="node"> Node !</span>')
									.pause(1000)
									.deleteChars(6)
									.typeString('<span class="mongo"> MongoDB !</span>')
									.pause(1000)
									.deleteChars(10)
									.typeString('<span class="mern"> Dev Web Full-Stack MERN</span>')
									.start();
							}}
						/>
					</h2>
					<button
						className="mt-5 md:mt-4 px-5 py-5 uppercase bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue py-2 px-4 rounded inline-flex items-center"
						onClick={saveFile}
					>
						<svg
							className="fill-current w-4 h-4 mr-2"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
						</svg>
						<span>Télécharger CV</span>
					</button>
				</div>
				<div className="py-6 md:py-8 px-2 md:px-16 text-left section-to-print">
					<p className="pb-4">
						A la recherche de nouvelles opportunités pour avril 2022 je porte un intérêt particulier aux
						projets ayant un impact social et/ou environnemental positif.
					</p>
					<p className="pb-4">
						#HTML #CSS #Bootstrap #Sass <br />
						#Javascript #React #jQuery <br />
						#Node.js #Express.js #Java #Java EE #Hibernate <br />
						#MongoDB #MySQL #PostgreSQL
						<br />
						#Docker <br />
						#Git <br />
					</p>
					<p className="pb-4">
						Mes projets personnels : <br />
						GitHub : https://github.com/julie-desvaux <br />
						et GitLab : https://gitlab.com/julie-desvaux <br />
					</p>
					<p className="pb-4">Quelques mots sur mon parcours</p>
					<p className="pb-4">
						Formée par près de 20 ans d’expériences professionnelles, notamment 10 ans chez Geodis Calberson
						(transport de colis) et 6 de bénévolat à la Croix-Rouge Française, j’ai entrepris en 2019 de me
						reconvertir en tant que développeuse web.
					</p>
					<p className="pb-4">
						J’ai suivi deux formations « bootcamp » de respectivement 3 mois avec 3W Acedemy et 4,5 mois de
						cours avec Konexio, une association qui œuvre pour l’inclusion socioprofessionnelle via le
						numérique.
					</p>
					<p className="pb-4">
						Après un stage de 6 mois chez Koya, une startup qui a pour mission d’accompagner les
						particuliers dans leur transition écologique, je suis devenue freelance chez Koya. En tant que
						développeuse principale, je contribue au projet de la conception au déploiement, en passant par
						le développement du site vitrine, d’un dashboard, du back-office, ou encore une refonte de la
						base de données et encadrement d'un stagiaire.
					</p>
					<p className="pb-4">Et si nous avons en commun …</p>
					<ol className="pb-4 pl-4">
						<li className="list-decimal">
							La vision de l’organisation du travail dans une entreprise passe par … <br />
							… la culture du travail en équipe et de l’intelligence collective <br />
							… un fonctionnement qui fait la part belle à la confiance et à l’autonomie <br />… un
							intérêt pour les « nouvelles » méthodes de travail : UX, Agile, Télétravail
						</li>
						<li className="list-decimal">
							La certitude que la réussite d’un projet digital passe par …. <br />
							… une attention particulière à la propreté et à la performance du code <br />
							… un équilibre entre le soin du détail et la tenue des délais <br />… la conscience que
							l’expérience utilisateur est essentiel
						</li>
						<li className="list-decimal">
							La conscience que quelqu’un issus d’une reconversion … <br />
							… a des compétences transverses issues de ces précédentes expériences <br />
							… sait s’adapter <br />… a la volonté et la faculté d’apprendre rapidement
						</li>
					</ol>
					<p className="pb-4">… Alors pourquoi ne pas travailler ensemble ?</p>
					<p className="pb-4">
						Après 10 ans dans le secteur de la logistique où j'ai appris à développer des outils
						informatiques d'analyses sous VisualBasic, j'ai découvert que le développement me
						passionnais.J'ai donc décidé de continuer ma carrière dans cette voie et ai suivi une formation
						à la 3W Academy sur JAVA JEE.
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
			</div>
		</section>
	);
}

export default About;
