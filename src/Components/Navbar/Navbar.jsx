import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useLocation } from "react-router-dom";

const navigation = [
	{ name: "A propos", href: "#about", current: true },
	{ name: "Compétences", href: "#skills", current: false },
	{ name: "Portfolio", href: "#portfolio", current: false },
	{ name: "Expériences", href: "#xp", current: false },
	{ name: "Education", href: "#education", current: false },
	{ name: "Mooc", href: "#mooc", current: false },
	{ name: "Bénévolat", href: "#benevolat", current: false },
	{ name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const location = useLocation();
	return (
		<Disclosure as="nav" className="w-full bg-blue border-b-2 border-gray-200 fixed z-50">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-12">
							<div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center lg:items-stretch">
								{/* <div className="flex-shrink-0 flex items-center">
									<img
										className="block lg:hidden h-8 w-auto"
										src="jd.png"
										alt="Logo initiale Julie Desvaux"
									/>
									<img
										className="hidden lg:block h-8 w-auto"
										src="jd.png"
										alt="Logo initiale Julie Desvaux"
									/>
								</div> */}
								<div className="hidden lg:block lg:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.href === location.hash
														? "bg-white text-blue font-bold"
														: "text-white hover:bg-navyBlue hover:text-white font-medium",
													"px-2 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
												)}
												aria-current={item.href === location.hash ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-gray-200 text-blue"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block px-3 py-2 rounded-md text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
