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
    displayLoggedInAccountOnPageLoad();
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
    displayLoggedInAccountOnPageLoad();
}


const updateLoggedInAccount = () => {
    const isLogin = isInLoginMode();
    //TODO password checks
    if(isLogin === true) {

    }
}

const displayLoggedInAccountOnPageLoad = () => {
    const username = new URLSearchParams(window.location.search).get('username');
    const password = new URLSearchParams(window.location.search).get('password');
    const userInfoDiv = document.getElementById('loggedUserInfo');
    if (password === null || username === null || password === undefined || username === undefined) {
        userInfoDiv.style.visibility = 'hidden';
        document.getElementById('headerLogin').style.left = '40%';
        document.getElementById('headerRegister').style.left = '40%';
    } else {
        userInfoDiv.style.visibility = 'visible';
        userInfoDiv.innerHTML = `Zalogowano jako ${username}`;
        document.getElementById('headerLogin').style.visibility = 'hidden';
        document.getElementById('headerRegister').style.visibility = 'hidden';

        document.getElementById('headerContacts').setAttribute('onclick', `location.href='contacts.html?username=${username}&password=${password}'`);
        document.getElementById('game1').setAttribute('onclick', `location.href='reviewpage.html?data=mc_1.201&username=${username}&password=${password}'`);
        document.getElementById('game2').setAttribute('onclick', `location.href='reviewpage.html?data=tloup1&username=${username}&password=${password}'`);
        document.getElementById('game3').setAttribute('onclick', `location.href='reviewpage.html?data=hogwartslegacy&username=${username}&password=${password}'`);
    }

}

const displayLoggedInAccountAfterButtonClicked = () => {
    const username = document.getElementById('loginBox').value;
    const password = document.getElementById('passwordBox').value;
    const userInfoDiv = document.getElementById('loggedUserInfo');
    if (password === '' || username === '' || username.length > 10) {
        userInfoDiv.style.visibility = 'hidden';
        document.getElementById('headerLogin').style.left = '40%';
        document.getElementById('headerRegister').style.left = '40%';
        document.getElementById('headerLogin').style.visibility = 'visible';
        document.getElementById('headerRegister').style.visibility = 'visible';
        alert("Niepoprawne hasło lub użytkownik. Nazwa użytkownika nie może przekraczać 10 znaków.")
    } else {
        userInfoDiv.style.visibility = 'visible';
        userInfoDiv.innerHTML = `Zalogowano jako ${username}`;
        document.getElementById('headerLogin').style.visibility = 'hidden';
        document.getElementById('headerRegister').style.visibility = 'hidden';
    }
    window.location.href = `index.html?username=${username}&password=${password}`;
}


