interface DataType {
	id: number;
    icon: string;
	title: string;
	content: string;

}
// Features data
const features_data: DataType[] = [
	{
		id: 1,
        icon: "ph ph-wifi-high",
		title: "Use Free Wifi", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
 
	}, 
	{
		id: 2,
        icon: "ph ph-shield-plus",
		title: "Special Security", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},
    {
		id: 3,
        icon: "ph ph-person-simple-swim",
		title: "Swimming & Fishing", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},

    {
		id: 4,
        icon: "ph ph-barbell",
		title: "Gym Center", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},       
	
	{
		id: 5,
        icon: "ph ph-bed",
		title: "Luxury Room", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	}, 	
	
	{
		id: 6,
        icon: "ph ph-tent",
		title: "Night Campaign", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},	
	
	{
		id: 7,
        icon: "ph ph-person-simple-bike",
		title: "Cycling Trips", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	}, 	
	
	{
		id: 8,
        icon: "ph ph-solar-panel",
		title: "Solar Energy System", 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	},   

];
export default features_data;
