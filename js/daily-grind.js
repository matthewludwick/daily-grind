/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/



let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);




switch(myDay){

 	 case 0:
   		today = "Sunday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A pic of a drip coffee.",
            color:"brown",
            day:"Sunday",
            desc:`I need a drip!`

        };

 	    break;
 	

case 1:
   		today = "Monday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Monday",
            desc:`I like me some bubble tea!`

        };

 	break;



 	case 2:
   		today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`I like me some bubble tea!`

        };

 	break;

    case 3:
   		today = "Wednesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Wednesday",
            desc:`I like me some bubble tea!`

        };

        break;

        case 4:
   		today = "Thursday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A pic of a yummy bubble tea.",
            color:"pink",
            day:"Thursday",
            desc:`I like me some bubble tea!`

        };
        break;

        case 5:
   		today = "Friday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A pic of a drip coffee.",
            color:"brown",
            day:"Friday",
            desc:`I need a drip!`

        };

        break;

        case 6:
   		today = "Saturday";
        coffee = {
            name:"Drip",
            pic:"drip.jpg",
            alt:"A pic of a drip coffee.",
            color:"brown",
            day:"Saturday",
            desc:`I need a drip!`

        };

 	    break;


 	default:
    	today = "Something went wrong!";

}


console.log(coffee);

//alert(today);

//adds coffee to page
document.getElementById(coffee-cup).innerHTML = coffeeTemplate(coffee);

//change background color of HTML element
document. querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
   <h2><p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
            <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name</strong> 
            ${coffee.desc}
            </p>
</h2>
    `;

    return myReturn;
}
