module.exports = {
	experiences: [
		{
			enteprise: "Koya",
			poste: "Développeuse Web FullStack JS - Stage",
			date: "octobre 2020 - à ce jour",
		},
		{
			enteprise: "Bien Vivre à Bondy",
			poste: "Intégration web",
			date: "novembre 2019 - janvier 2020",
		},
	],
	projects: [
		{
			title: "Moovice",
			img: "/projects/moovice.gif",
			description:
				"Utilisation de l'API The Moovie DB <br/>\
            Permet de voir les films (populaires et sortis de la semaine) <br/>\
            Permet de voir les séries télés (en cours de diffusions, à voir ce soir à la télé) <br/>\
            Recherce de films, séries ou acteurs via la barre de recherches <br/>\
            Possibilité de mettre une série, un film ou acteur dans ses favoris",
			technos: [
				{ techno: "React", class: "react" },
				{ techno: "Redux", class: "redux" },
				{ techno: "Sass", class: "sass" },
				{ techno: "Axios" },
			],
			repo: "https://github.com/julie-desvaux/Moovice_Hooks_Redux",
			link: "https://moovice.julie-desvaux.com/",
		},
		{
			title: "React Clone Twitch",
			img: "/projects/react_clone_twitch.gif",
			description:
				"Clone de certaines fonctionnalités de Twitch <br/>\
				Searchbar pour rechercher un streamer <br/>\
				Possibilité de regarder un streamer, de chatter via React Twitch Embed Video",
			technos: [{ techno: "React", class: "react" }, { techno: "CSS3", class: "css" }, { techno: "Api Twitch" }],
		},
		{
			title: "Tchat",
			img: "/projects/tchat_socket_io.png",
			description:
				"Possibilité de chatter sur un salon général<br/>\
				Possibilité de parler en privé <br/>\
				Pseudo unique obligatoire",
			technos: [{ techno: "Node", class: "node" }, { techno: "Express.js" }, { techno: "Socket.io" }],
			repo: "https://github.com/julie-desvaux/tchat-socket.io",
			link: "https://chat.julie-desvaux.com/",
		},
		{
			title: "Jeux JS",
			img: "/projects/jeux.png",
			description: "Site de mini jeux développés en Javascript lors du confinement 2020",
			technos: [
				{ techno: "HTML5", class: "html" },
				{ techno: "CSS3", class: "css" },
				{ techno: "JS", class: "js" },
			],
		},
	],
	educations: [
		{
			title: 'Formation </br>\
			"Développeur Fullstack"',
			organism: "Konexio",
			date: "Mai 2020 - Oct 2020",
			technos: [
				{ techno: "HTML5", class: "html" },
				{ techno: "CSS3", class: "css" },
				{ techno: "JS", class: "js" },
				{ techno: "jQuery" },
				{ techno: "React", class: "react" },
				{ techno: "React Native" },
				{ techno: "Node", class: "node" },
				{ techno: "MongoDB" },
			],
			attestation: "rncp.pdf",
		},
		{
			title: 'Formation  </br>\
			"Développeur Web Java"',
			organism: "3W Academy",
			date: "Oct 2019 - Jan 2020",
			technos: [
				{ techno: "HTML5", class: "html" },
				{ techno: "CSS3", class: "css" },
				{ techno: "JS", class: "js" },
				{ techno: "Java" },
				{ techno: "Hibernate" },
				{ techno: "JSTL" },
			],
			attestation: "AttestionFinFormationJava.pdf",
		},
		{
			title: "Niveau BTS Négociation et Relation Clients en alternance",
			organism: "Lycée Paul Eluard - St-Denis",
			date: "2005 - 2007",
			technos: [{ techno: "Démarcharge" }, { techno: "Fidélisation de la clientèle" }],
			attestation: "",
		},
	],
	mooc: [
		{
			title: "React",
			organism: "Dyma",
			date: "Avril 2021",
			description:
				"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.",
			technos: [{ techno: "React" }, { techno: "Axios" }],
			attestation: "",
		},
		{
			title: "React",
			organism: "Dyma",
			date: "Avril 2021",
			description:
				"Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta.",
			technos: [{ techno: "React" }, { techno: "Axios" }],
			attestation: "",
		},
	],
	benevolats: [
		{
			enteprise: "Croix-Rouge française (AL Bondy-Villemomble)",
			poste: "Formatrice Prévention et Secours Civique de niveau 1 (PSC1)",
			date: "avril 2016 - à ce jour",
			description: [
				"Accueil d’un public varié (enfants, adultes, diversité culturelles)",
				"Mise en place d’une formation sur la base d’un programme",
				"Animation de la formation et évaluation des participants",
			],
		},
		{
			enteprise: "Croix-Rouge française (AL Bondy-Villemomble)",
			poste: "Equipière Secouriste (PSE2)",
			date: "aout 2015 - à ce jour",
			description: [
				"Août 2015 : PSE1 (Premiers Secours en Equipe de niveau 1)",
				"Avril 2018 : PSE2 (Premiers Secours en Equipe de niveau 2)",
				"Evaluation en équipe de la situation et choix d’un plan d’action d'assistance et de secours",
				"Mise en oeuvre collectives des actions de secours",
			],
		},
		{
			enteprise: "Croix-Rouge française (AL Bondy-Villemomble)",
			poste: "Responsable Locale de la Communication",
			date: "mars 2015 - à ce jour",
			description: [
				"Responsable Local de la Communication et du Développement des Ressources à l'unité locale de Bondy-Villemomble (93)",
				"Gestion de la page Facebook de Bondy-Villemomble (93)",
				"Création et Gestion de la page Instagram de Bondy-Villemomble (93)",
			],
		},
	],
};
