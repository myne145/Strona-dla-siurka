// let gameName;
const websiteTitle = 'Vekto\'s Game Reviews';

const setReviewTextBasedOnSelectedGame = () => {
    const gameURLName = new URLSearchParams(window.location.search).get('data');
    let gameName;
    switch(gameURLName) {
        case 'mc_1.20':
            gameName = 'Minecraft Update 1.20';
            break;
        case 'tloup1':
            gameName = 'The Last Of Us Part I';
            break;
        case 'hogwartslegacy':
            gameName = 'Hogwarts Legacy';
            break;
    }

    document.getElementById("gameReviewTitle").innerHTML = gameName;
    if(typeof gameName === "undefined")
        document.title = 'Coś poszło nie tak';
    else
        document.title = `${gameName} review - ${websiteTitle}`;
}

const setLoginOrRegisterForm = () => {
    let isLogin;
    const requestedFormType = new URLSearchParams(window.location.search).get('type');
    if(requestedFormType === 'login')
        isLogin = true;
    else if(requestedFormType === 'register')
        isLogin = false;
    else {
        //TODO: handle invalid values (or maybe not fuck it)
    }
    if(isLogin) {
        document.getElementById('loginConfirm').innerHTML = "Zaloguj Się";
    }
}


