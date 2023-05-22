let gameName;
const websiteTitle = 'Vekto\'s Game Reviews';

const setGameName = game => console.log(gameName = game);

const setReviewTextBasedOnSelectedGame = () => {
    document.getElementById("testReviewText").innerHTML = "asdlajslkdjsalkdjlk";
    if(typeof gameName === "undefined")
        document.title = 'Coś poszło nie tak';
    else
        document.title = `${gameName} review - ${websiteTitle}`;
}


