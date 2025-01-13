interface DataType {
	id: number;
    name: string;
    designation: string;
    content: string;

}
// Testimonials data
const testimonials_data: DataType[] = [
	{
		id: 1,
        name: "Masum Billah",
		designation: "CEO of ABC LTD",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ",
	}, 	
	
	{
		id: 2,
        name: "Muntasir Billah",
		designation: "CEO of ABC LTD",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ",
	}, 	
	{
		id: 3,
        name: "Motasim Billah",
		designation: "CEO of ABC LTD",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old ",
	}

];
export default testimonials_data;
