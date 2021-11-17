import React from "react";

function Skills() {
	return (
		<section id="skills" className="pt-16 text-center">
			<div className="blue-divider w-24 h-1 bg-blue mx-auto"></div>
			<h2 className="my-2 uppercase text-blue">Compétences</h2>
			<div className="mt-16">
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/html5.png" alt="Logo HTML5" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/css.png" alt="Logo CSS3" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/js.png" alt="Logo Javascript" />
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/bootstrap.png" alt="Logo Bootstrap" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/sass.png" alt="Logo Sass" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/tailwind.png" alt="Logo Tailwind" />
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/react.png" alt="Logo React" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/redux.png" alt="Logo Redux" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/next.png" alt="Logo NextJS" />
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/node.png" alt="Logo Node" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/express.png" alt="Logo ExpressJS" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<div className="skills-logo">
							<img className="w-1/2 mx-auto" src="/skills/java.png" alt="Logo Java" />
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/mongo.png" alt="Logo MongoDB" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/postgresql.png" alt="Logo Postgresql" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<div className="skills-logo">
							<img className="w-1/2 mx-auto" src="/skills/my_sql.png" alt="Logo My SQL" />
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center">
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/git.png" alt="Logo Git" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/gitlab.png" alt="Logo Gitlab" />
					</div>
					<div className="mb-10 md:mb-16 md:mx-10">
						<img className="w-1/2 mx-auto" src="/skills/github.png" alt="Logo Github" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
