import React from "react";

import data from "../../data";

const CardXP = ({ xp, index }) => (
	<li className="text-left">
		<div className="timeline-badge absolute bg-gray-300 w-12 text-xl text-blue text-center leading-loose rounded-full py-1">
			<span className="fas fa-briefcase"></span>
		</div>
		<div className={index % 2 === 0 ? "timeline-panel-container" : "timeline-panel-container-inverted"}>
			<div className="timeline-panel relative p-5 border border-gray-300 rounded-md shadow-xl bg-blue text-white">
				<div className="mb-5">
					<h3 className="mt-1.5">{xp.enteprise}</h3>
					<h4>{xp.poste}</h4>
					<p className="text-gray-400">
						<small className="fas fa-hourglass-half"></small> {xp.date}
					</p>
				</div>
				<div>
					<p>
						Développement de l'application web de Koya : participation à la conception, test et maintien des
						nouvelles features du site (gamification, aspect communautaire, etc.){" "}
					</p>
					<p>Projet en méthode Agile</p>
					<h5>Compétences</h5>
					<ul>
						<li className="relative mb-4">
							Environnement technologique :
							<ul>
								<li>Back : Node.js</li>
								<li>Front : React.js, Javascript, CSS (SASS), Webpack</li>
								<li>BDD : MongoDB</li>
								<li>Infra : Docker, CI avec Git, GitLab</li>
							</ul>
						</li>
						<li>Autonomie et sens du travail en équipe</li>
						<li>Polyvalence, organisation, capacité d’adaptation</li>
						<li>Gestion des priorités et des délais</li>
						<li>Force de proposition, créativité</li>
						<li>Passion, curiosité</li>
						<li>Sérieux, rigueur</li>
					</ul>
					<p>
						<a className="text-lightBlue hover:text-gray-300" href="http://www.koya-app.fr" target="_blank">
							Voir le site
						</a>
					</p>
				</div>
			</div>
		</div>
	</li>
);

function Experiences() {
	return (
		<section id="xp" className="pt-16 px-3 text-center mb-4">
			<div className="w-full md:w-9/12 m-auto">
				<div className="blue-divider w-24 h-1 bg-blue mx-auto"></div>
				<h2 className="my-2 uppercase text-blue text-3xl md:text-4xl">Expériences Professionnelles</h2>
				<ul className="mt-16 py-7 px-2.5 relative timeline">
					{data.experiences.map((xp, index) => (
						<CardXP xp={xp} index={index} />
					))}
					{/* <li>
					<div className="timeline-badge">
						<span className="fas fa-briefcase"></span>
					</div>
					<div className="timeline-panel-container">
						<div className="timeline-panel blue">
							<div className="timeline-heading">
								<h3>KOYA, Full remote</h3>
								<h4>Développeuse Web FullStack JS - Stage</h4>
								<p className="text-gray-400">
									<small className="fas fa-hourglass-half"></small> octobre 2020 - à ce jour
								</p>
							</div>
							<div className="timeline-body">
								<p>
									Développement de l'application web de Koya : participation à la conception, test et
									maintien des nouvelles features du site (gamification, aspect communautaire, etc.){" "}
								</p>
								<p>Projet en méthode Agile</p>
								<h5>Compétences</h5>
								<ul>
									<li>
										Environnement technologique :
										<ul>
											<li>Back : Node.js</li>
											<li>Front : React.js, Javascript, CSS (SASS), Webpack</li>
											<li>BDD : MongoDB</li>
											<li>Infra : Docker, CI avec Git, GitLab</li>
										</ul>
									</li>
									<li>Autonomie et sens du travail en équipe</li>
									<li>Polyvalence, organisation, capacité d’adaptation</li>
									<li>Gestion des priorités et des délais</li>
									<li>Force de proposition, créativité</li>
									<li>Passion, curiosité</li>
									<li>Sérieux, rigueur</li>
								</ul>
								<p>
									<a className="timeline-link" href="http://www.koya-app.fr" target="_blank">
										Voir le site
									</a>
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className="timeline-badge">
						<span className="fas fa-briefcase"></span>
					</div>
					<div className="timeline-panel-container-inverted">
						<div className="timeline-panel blue">
							<div className="timeline-heading">
								<h3>BIEN VIVRE A BONDY</h3>
								<h4>Intégration web</h4>
								<p className="text-muted">
									<small className="fas fa-hourglass-half"></small> novembre 2019 - janvier 2020
								</p>
							</div>
							<div className="timeline-body">
								<p>
									Création du site, en mode responsive, dans le respect de la charte graphique et des
									directives du directeur des publications
								</p>
								<p>Développement du site au fur et à mesure des demandes des clients</p>
								<p>
									<a className="timeline-link" href="http://www.bienvivreabondy.org" target="_blank">
										Voir le site
									</a>
								</p>
							</div>
						</div>
					</div>{" "}
					timeline-panel
				</li>
				<li>
					<div className="timeline-badge">
						<span className="fas fa-briefcase"></span>
					</div>
					<div className="timeline-panel-container">
						<div className="timeline-panel blue">
							<div className="timeline-heading">
								<h3>GEODIS CALBERSON IDF, Gennevilliers</h3>
								<h4>Chargée de Missions Méthode & Projet</h4>
								<p className="text-muted">
									<small className="fas fa-hourglass-half"></small> 2014 - 2019
								</p>
							</div>
							<div className="timeline-body">
								<p>
									Développement d’outils informatique pour faciliter le travail d'autres services de
									l’entreprise :
								</p>
								<ul>
									<li>Recueil du besoin auprès des différents services de l'entreprise</li>
									<li>Conception d'une solution</li>
									<li>Développement d’outils informatique sous VisualBasic pour Excel</li>
									<li>Test et validation technique des outils développés</li>
									<li>Maintien condition opérationnelle</li>
									<li>
										Amélioration des outils par itération en fonction des retours et besoins
										utilisateurs
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className="timeline-badge">
						<span className="fas fa-briefcase"></span>
					</div>
					<div className="timeline-panel-container-inverted">
						<div className="timeline-panel blue">
							<div className="timeline-heading">
								<h3>GEODIS CALBERSON IDF, Gennevilliers</h3>
								<h4>Chargée de Qualité</h4>
								<p className="text-muted">
									<small className="fas fa-hourglass-half"></small> 2010 - 2014
								</p>
							</div>
							<div className="timeline-body">
								<p>
									Analyse quotidienne des KPI et communication des résultats au sein de l’entreprise
								</p>
								<p>Diffusion mensuelle et hebdomadaire des statistiques nationales</p>
								<p>
									Analyse des anomalies Import /Export et mise en place de plans d’action pour
									amélioration le service
								</p>
							</div>
						</div>
					</div>{" "}
					timeline-panel
				</li>
				<li>
					<div className="timeline-badge">
						<span className="fas fa-briefcase"></span>
					</div>
					<div className="timeline-panel-container">
						<div className="timeline-panel blue">
							<div className="timeline-heading">
								<h3>GEODIS CALBERSON IDF, Gennevilliers</h3>
								<h4>Chargée de Clientèle BtoB</h4>
								<p className="text-muted">
									<small className="fas fa-hourglass-half"></small> 2008 - 2010
								</p>
							</div>
							<div className="timeline-body">
								<p>Suivi des livraisons et enlèvements pour un client Grand Compte (FedEx)</p>
								<p>
									Intervention dans le processus d'acheminement des marchandises pour respecter les
									engagements commerciaux
								</p>
								<p>Reporting des anomalies de livraisons hebdomadaires et mensuels au client (FedEX)</p>
							</div>
						</div>
					</div>
				</li> */}
				</ul>
			</div>
		</section>
	);
}

export default Experiences;
