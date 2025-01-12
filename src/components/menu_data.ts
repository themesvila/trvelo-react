interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
	}, 
	{
		id: 2,
		title: "About",
		link: "/about",
	},
	{
		id: 3,
		title: "Services",
		link: "/services",
	},
	
	{
		id: 4,
		title: "Blog",
		link: "#",
		has_dropdown: true,
		sub_menus: [
			{ link: "/grid-blog", title: "Grid Blog" },
			{ link: "/standard-blog", title: "Standard Blog" },
			{ link: "/blog-details", title: "Blog Details" },
		],
	},
	{
		id: 5,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	},
];
export default menu_data;
