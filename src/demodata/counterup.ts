interface DataType {
	id: number;
    image: string;
    icon: string;
    count: string;
	title: string;

}
// Hero data
const counterup_data: DataType[] = [
	{
		id: 1,
        image: 'assets/img/counter-up/1.jpg',
        icon: "ph ph-smiley",
        count: "85973",
		title: "Satisfied Clients",  
	}, 
	{
		id: 2,
        image: 'assets/img/counter-up/2.jpg',
        icon: "ph ph-star",
        count: "9875",
		title: "Positive Review",  
	},
    {
		id: 3,
        image: 'assets/img/counter-up/3.jpg',
        icon: "ph ph-heart",
        count: "5647",
		title: "Satisfied Clients",  
	},

    {
		id: 4,
        image: 'assets/img/counter-up/4.jpg',
        icon: "ph ph-trophy",
        count: "1200",
		title: "Wining Awards",  
	},   

];
export default counterup_data;
