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

const isInLoginMode = () => {
    let isLogin;
    const requestedFormType = new URLSearchParams(window.location.search).get('type');
    if(requestedFormType === 'login')
        isLogin = true;
    else if(requestedFormType === 'register')
        isLogin = false;
    else {
        //TODO: handle invalid values (or maybe not fuck it)
    }
    return isLogin;
}

const setLoginOrRegisterForm = () => {
    const isLogin = isInLoginMode();
    if(isLogin === true) {
        document.getElementById('loginConfirm').innerHTML = "Zaloguj się";
        document.getElementById('doUWantToRegister').innerHTML = "Nie masz konta? Zarejestruj się!";
        document.getElementById('loginTitle').innerHTML = "Zaloguj się";
        document.getElementById('repeatPasswordBox').style.display = 'none';
    }
    if(isLogin !== true) {
        document.getElementById('loginConfirm').innerHTML = "Zarejestruj się";
        document.getElementById('doUWantToRegister').innerHTML = "";
        document.getElementById('loginTitle').innerHTML = "Zarejestruj się";
        document.getElementById('repeatPasswordBox').style.display = 'inline';
    }
}


const updateLoggedInAccount = () => {
    const isLogin = isInLoginMode();
    //TODO password checks
    if(isLogin === true) {

    }
}

const displayLoggedInAccount = () => {
    const username = new URLSearchParams(window.location.search).get('login');
    const node = document.createElement("li");
    node.appendChild("Test");
    // document.getElementById('solidInFrontOfBg').appendChild(node)
}


