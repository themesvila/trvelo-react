interface DataType {
	id: number;
    image: string;
    subtitle: string;
	title: string;
    content: string;
	btntext: string;
    btnlink: string;
}
// Hero data
const hero_data: DataType[] = [
	{
		id: 1,
        image: "/assets/img/slider/1.jpg",
        subtitle: "Best Choice for Family1",
		title: "Embark on Your Next Adventure Today !",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        btntext: "Explore More",
        btnlink: "#",
	}, 
	{
        id: 2,
        image: "/assets/img/slider/2.jpg",
        subtitle: "Best Choice for Family",
		title: "Embark on Your Next Adventure Today !",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        btntext: "Explore More",
        btnlink: "#",
	},

];
export default hero_data;
