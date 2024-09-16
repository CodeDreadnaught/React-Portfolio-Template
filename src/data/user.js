import TicketDormImage from "../assests/ticketdorm.svg";
import BolaCashImage from "../assests/bolacash.svg";
import BacodeTenziesImage from "../assests/bacodetenzies.png";

const INFO = {
	main: {
		title: "Olumide Akinsoyinu—Frontend Engineer and Tech Enthusiast",
		name: "Olumide Akinsoyinu",
		email: "olumideakinsoyinu@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		twitter: "https://x.com/CodeDreadnaught",
		github: "https://github.com/CodeDreadnaught",
		linkedin: "https://linkedin.com/in/olumideakinsoyinu",
	},

	homepage: {
		title: "Frontend Engineer and Tech Enthusiast.",
		description:
			"I'm Olumide, a seasoned Software Engineer with a proven track record in crafting high-perfomance, user-centric and inclusive web applications utilizing cutting-edge frontend technologies.",
	},

	about: {
		title: "I'm Olumide Akinsoyinu, passionate about creating seamless and engaging digital experiences.",
		description:
			<section>
				<p>For me, writing code is more than just a series of commands and algorithms; it is about harnessing technology to create groundbreaking solutions and open new avenues for progress.</p> <p>Outside of the walls of 0s and 1s, I seek balance through various activities that invigorate my professional and personal life. I find excitement in playing table tennis, driving and exploring consumer tech. These pursuits keep me engaged and inspired, complementing my work with a fresh and innovative perspective.</p> <p>In addition to these activities I am also passionate about exploring new technologies and staying informed about industry trends. Engaging with cutting-edge advancements fuels my creativity and keeps me at the forefront of innovation.</p> <p>Professionally, my journey has been marked by a commitment to excellence and a drive for continuous improvement.</p>
			</section>,
	},

	// articles: {
	// 	title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
	// 	description:
	// 		"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	// },

	projects: [
		{
			title: "TicketDorm",
			description:
				"An e-ticketing platform that streamlines the process of purchasing and managing event tickets.",
			logo: TicketDormImage,
			linkText: "View Project",
			link: "https://ticketdorm.netlify.app",
		},

		{
			title: "Bola Cash",
			description:
				"A recycling Web application that allows users to exchange trash for cash and request pickups.",
			logo: BolaCashImage,
			linkText: "View Project",
			link: "https://bolacash.netlify.app",
		},

		{
			title: "Bacode Tenzies",
			description:
				"A web-based implementation of the Tenzies game, created using React.",
			logo: BacodeTenziesImage,
			linkText: "View Project",
			link: "https://bacodetenzies.netlify.app",
		}
	],
};

export default INFO;
