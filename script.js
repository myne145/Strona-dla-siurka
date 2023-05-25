// let gameName;
const tytulstrony = 'Vekto\'s Game Reviews';

const Zmiennazwegryitekstu = () => {
    const nazwagry = new URLSearchParams(window.location.search).get('data');
    let tytulgry;
    switch(nazwagry) {
        case 'mc_1.20':
            tytulgry = 'Minecraft Update 1.19';
            document.getElementById('tekstopinii').innerHTML = '<strong>W obliczu wydania wersji 1.19 Minecrafta fani ponownie zabrali głos. Krytyka The Wild Update nie skupia się na samej zawartości; pod ostrzałem jest komunikacja z deweloperami.</strong>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Wczoraj do Minecrafta oficjalnie trafił The Wild Update. Wielokrotnie pisaliśmy o tym, jak bardzo jego zawartość nie zadowoliła graczy, choć jak się okazało, wina nie do końca leży w samej aktualizacji. Społeczność wini komunikację z deweloperem, a właściwie jej brak.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Gracze zaakceptowali to, że The Wild Update nie będzie przełomowy pod względem zawartości. Mimo wszystko część z komentujących opis aktualizacji jest zadowolona, że kolejna wersja Minecrafta w końcu wylądowała. Choć nadal trzeba pamiętać, że Minecraftowi w edycji 1.19 wciąż daleko do perfekcji.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <strong>Mimo wszystko uważam, że ta aktualizacja jest świetna. Większość złych opinii o tej aktualizacji nie dotyczy jej zawartości, ale rzeczy zewnętrznych, takich jak obietnice deweloperów. Update nadal ma problemy: echo shards są niepotrzebne, kozie rogi to rozczarowanie, biorąc pod uwagę, że były opóźnione dwa razy (były w betach 1.17 Bedrock i robiły prawie to samo), i nadal uważam, że Allaye potrzebują takiego przedmiotu, jak butelka do ich przechowywania. Ale ogólnie rzecz biorąc, jest fajnie i przyjemnie. W rzeczywistości jest to bardziej Exploration Part 2, niż Caves & Cliffs Part 3 – napisał Harrooga.</strong>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <strong>Minecraft 1.19 ma swoje gorsze momenty</strong>\n' +
                '            <br>\n' +
                '\n' +
                '            W tej kwestii najczęściej wywoływane do tablicy są przedmioty, które mają wyłącznie jedno zastosowanie, np. wspomniane wcześniej echo shards, kozi róg czy fragmenty dysku muzycznego, które pozwalają utworzyć nową płytę.\n' +
                '\n' +
                '            Kontrowersyjna jest również sprawa łupów, które zdobyć możemy w Ancient City. Według społeczności zawartość nie jest wystarczająco interesująca, aby odwiedzić tę lokację więcej niż raz. Podobnie sprawa ma się z biomem Deep Dark – on również nie jest tak dobry, jak oczekiwali gracze.\n' +
                '\n' +
                '            Skargi te można prosto podsumować jednym zdaniem: w Minecrafcie 1.19 brakuje unikalności.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <strong>Gdyby nie obietnice dotyczące czy to wyczekiwanych świetlików, czy też biomu brzozowego, bardzo możliwe, że The Wild Update zostałby zupełnie inaczej odebrany.</strong>\n' +
                '            <br>\n' +
                '            Pojawiały się również wspominki o obiecanej niegdyś archeologii, na którą gracze wciąż czekają. ExpertInBeingAScrub w swojej dość długiej i jak ją sam opisał, brutalnej opinii na temat Minecrafta 1.19, wspomniał również o jednym aspekcie, który do tej pory nie był poruszany – strona z feedbackiem. Mojang bierze opinie głównie ze strony z opiniami i dzięki nim wprowadził wiele nowych funkcji. Dlaczego więc strona jest tak zła? Większość postów jest usuwana bez wyraźnego powodu, a nowe posty są zagłuszane przez bardziej popularne, ale starsze. Myślę, że strona z opiniami wymaga gruntownej przebudowy i powinna być częściej przywoływana. Na przykład podczas MC Live, gdzie więcej osób mogłoby dowiedzieć się o stronie. Wtedy większa część społeczności będzie mogła wyrazić swoje opinie i sugestie na temat Minecrafta. Czyżby zatem The Wild Update zamiast przyczynić się do ulepszania świata Minecrafta, miał poskutkować polepszeniem komunikacji pomiędzy społecznością a deweloperami? Patrząc na liczbę komentarzy przywołujących ten temat wydaje się to bardzo możliwe.\n' +
                '       ';
            document.getElementById('zdjeciegry').src = 'mc1.19.jpg';
            break;
        case 'tloup1':
            tytulgry = 'The Last Of Us Part I';
            document.getElementById('tekstopinii').innerHTML = '<strong>The Last of Us Part I</strong> to zdecydowanie jedna z najlepszych, najbardziej wciągających i najlepiej dopracowanych gier w historii naszej branży. Oczywiście, gdy mamy na myśli wersję konsolową. Pierwotnie wydana w 2013 roku na PlayStation 3, doczekała się solidnego remake\'u na PS5, by po kilku miesiącach wylądować na PC. W niniejszym tekście skoncentruję się wyłącznie na aspektach technicznych, pokazując jak działa i co oferuje wersja przeznaczona na "blaszaki". Ocena, którą znajdziecie na samym dole, dotyczy wyłącznie jakości konwersji i nie odnosi się w żaden sposób do rozgrywki, fabuły, klimatu i ogólnej oceny samej gry.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Jeżeli chcecie zapoznać się z pełną recenzją tego tytułu, odsyłam Was do tekstu Wojtka, który ogrywał edycję przeznaczoną na PS5. Ja testowałem TLOU1 na PC od dnia premiery (28 marca) i chociaż nie minęło wiele czasu, to deweloperzy wydali już kilka istotnych aktualizacji, które całkiem odmieniły działanie tego tytułu. Gram na bardzo mocnym komputerze, ale możecie mi wierzyć, że pierwszego dnia liczba mikroprzycięć i zacinek znacznie przekraczała jakiekolwiek dopuszczalne normy. Korzystam z PC marki G4M3R by X-Kom w edycji Elite złożonego z procesora Intel Core i9-13900K (podkręconego do 6,0 GHz), 64GB RAM, karty graficznej GeForce RTX 4090 i monitora 4K od Iiyama. Liczyłem, że przy wsparciu DLSS 2 w trybie jakości (niestety, TLOU1 nie wspiera trzeciej wersji tej techniki) zdołam osiągnąć w 4K co najmniej 100 klatek na sekundę. Na szczęście, jest jeszcze lepiej. </p>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Spotkałem się z wieloma opiniami w internecie, jak niektórzy czekali po kilkadziesiąt minut na "niesławne" buforowanie shaderów na samym starcie. Na wspomnianym wyżej komputerze trwało to dokładnie 9 minut. Muszę przyznać, że już od pierwszych sekund po odpaleniu tej gry na maksymalnych ustawieniach jakości obrazu, moja szczęka powędrowała do samej ziemi. Takiej liczby szczegółów do tej pory na PC nie widziałem i nadal uważam, że najładniejsze gry na komputerach dostarczają wewnętrzne studia Sony, nasz rodzimy CDP i Rockstar Games ze swoim Red Dead Redemption 2. The Last of Us Part I wygląda absolutnie zjawiskowo. Wszelkie odbicia i refleksy świetlne to nowa jakość, podobnie zresztą jak modele postaci, ich mimika, animacje czy emocje, które wyrażają w niezwykle naturalny sposób. Poniżej znajdziecie galerię zdjęć ze wszystkimi ustawieniami graficznymi, a także z opcjami dostępności i sterowania, jakie zaimplementowano w tej wersji gry. Liczba suwaków jest olbrzymia i na dobrą sprawę można sobie dowolnie dostosować TLOU pod naszą specyfikację sprzętową.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Na wspomnianym wyżej komputerze z wykorzystaniem DLSS 2 w trybie jakości w rozdzielczości 4K jest średnio ok. 120 klatek z okazjonalnymi spadkami w okolice 95-100 (po ostatnich aktualizacjach). Przez pierwsze trzy godziny zabawy trafiłem na jedną długą przycinkę, która trwała kilka sekund i bardzo rzadkie mikroprzycięcia. Najnowszy patch o numerze 1.0.1.7 pozwolił jednak na całkowite ich wyeliminowanie, a gra działa jeszcze lepiej. Widać to zresztą po stale rosnącej wartości procentowej ocen na Steam. Poniżej znajdziecie galerię zdjęć, która niestety nie oddaje najlepiej tego, co widać na ekranie monitora. Wersja na PC wspiera dźwięk 3D i obsługuje kontroler DualSense z pełnym zestawem wibracji i adaptacyjnych triggerów (ale tylko przy podłączeniu kablem USB). Ma także szereg dodatkowych ustawień dostępności dla osób niepełnosprawnych i znakomite wsparcie dla klawiatury i myszki. Celowanie na "gryzoniu" stało się teraz niezwykle precyzyjne i komfortowe, a kolejne headshoty sypią się aż miło. Przy tak wysokim poziomie brutalności i jakości samych animacji, mogę powiedzieć, że aż miło się ogląda te kolejne zabójstwa - jakkolwiek dziwnie to nie zabrzmiało.\n' +
                '       ';
            document.getElementById('zdjeciegry').src = 'tlou1.jpg';
            break;
        case 'hogwartslegacy':
            tytulgry = 'Hogwarts Legacy';
            document.getElementById('tekstopinii').innerHTML = '<strong>\n' +
                '                Świat czarodziejów J.K. Rowling to jedno z najlepszych IP, które od lat nie otrzymuje odpowiedniej uwagi. Nie możemy przeczytać nowych książek, nie oglądamy filmów, a wielu marzy o serialach, ale tę zdecydowanie za długą ciszę przerwało Avalanche Software, które... nie zawiodło. Nie wierzyłem, że po latach spełnią się moje marzenia o zostaniu uczniem Hogwartu – Wy też chcieliście przemykać po salach i czerpać garściami z wiedzy profesorów? To przeczytajcie naszą recenzję Hogwarts Legacy.\n' +
                '            </strong>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            W ostatnich miesiącach pojawiły się informacje na temat potencjalnego rozwoju uniwersum J.K. Rowling przez nowe opowieści realizowane przez Warner Bros. Discovery, ale jednocześnie powrócili dementorzy niosący wieści na temat autorki całego świata. Nie chcę wchodzić w szczegóły, nie zamierzam myśleć o niepotrzebnych wypowiedzianych lub napisanych słowach, bo Hogwarts Legacy to produkcja, którą przez wiele długich lat rozwijało Avalanche Software i deweloperzy zasłużyli, by skupić się na ich twórczości. Gra czerpie garściami z książek, pobudza wiele przyjemnych wspomnień, ale opowiada własną historię i w tej recenzji zamierzam skupić się właśnie na tej przygodzie.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Akcja recenzowanego Hogwarts Legacy rozgrywa się w XIX wieku, czyli na wiele lat przed wydarzeniami z książek J.K. Rowling, więc podczas przygody nie spotykamy znanych bohaterów. Gracz ma okazję stworzyć postać, która na samym początku gry musi wyruszyć do Szkoły Magii i Czarodziejstwa w Hogwarcie, by rozpocząć naukę, jednak twórcy nie zdecydowali się oddać w nasze ręce jedenastolatka. Protagonista rozpoczyna naukę od 5. roku, co pozwoliło deweloperom na przedstawienie odrobinę dojrzalszej opowieści, a jednocześnie w ciągu roku mamy okazję nauczyć się dosłownie wszystkich podstaw, które młodzi uczniowie poznają przez kilka lat.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Nie jest to codzienna sytuacja, by w progach Hogwartu pojawił się nowy i zarazem tak dorosły uczeń, więc po pierwszych perypetiach i ubraniu Tiary Przydziału, otrzymujemy w swoje ręce podręcznik. Profesorowie Szkoły Magii i Czarodziejstwa przygotowali specjalny program, by starszy adept ich wiedzy mógł jak najszybciej opanować wiedzę. Książka służy również za zbiór informacji o grze, mamy w niej wszystkie misje, możemy spojrzeć na mapę, używamy szybkiej podróży lub po prostu przebieramy się – muszę przyznać, że w tym miejscu Avalanche Software bardzo pozytywnie zaskoczyło, ponieważ deweloperzy wpadli na bardzo dobry pomysł, by nie tylko zaoferować nam starszego ucznia, a dodatkowo w ekspresowym tempie zapewniają podstawową wiedzę.\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            <br>\n' +
                '            Główny bohater jednak nie jest... zwykłym nastolatkiem, który niespodziewanie otrzymał list z Hogwartu. Już pierwsze 30 minut gry potwierdzają jedno – gracze mają okazję kontrolować wyjątkową personę, w której drzemie pewna moc. To właśnie on bez przeszkód uczy się kolejnych zaklęć, z miejsca chwyta za miotłę i pokazuje swoje umiejętności oblatując budynki szkoły, a nie ma też problemu z ujarzmieniem gryfa. Po kilku pierwszych misjach usłyszycie, jak inne dzieciaki zaczynają gadać o „nowym uczniu”, który z miejsca trafia na języki całej szkoły... brzmi znajomo? Hogwarts Legacy w naprawdę wielu miejscach czerpie garściami z dorobku J.K. Rowling wrzucając do murów zamczyska jednostkę, która niczym Harry Potter staje się tą „najbardziej rozpoznawalną”. Twórcy oczywiście nie rzucili na jego czoło tajemniczej blizny i nie zbudowali mrocznej legendy, ale bardzo szybko okazuje się, że gracze mają okazję uczestniczyć w ciekawej intrydze, która jest budowana przez około 25 godzin. Deweloperzy sięgnęli nawet po ciekawe nawiązanie do pierwszej przygody Pottera, gdy ten musiał udać się na Ulicę Pokątną, by nabyć kilka podstawowych rzeczy na pierwsze dni nauki... w Hogwarts Legacy mamy niemal identyczny wątek.\n' +
                '       ';
            document.getElementById('zdjeciegry').src = 'hogwartslegacy.jpg';
            break;
    }

    document.getElementById("tytulopinii").innerHTML = tytulgry;
    if(typeof tytulgry === "undefined")
        document.title = 'Coś poszło nie tak';
    else
        document.title = `Recenzja ${tytulgry} - ${tytulstrony}`;
    zmienzalogowanegouzytkownika();
}

const czyjesttryblogowania = () => {
    let czylogujesie;
    const typ = new URLSearchParams(window.location.search).get('type');
    if(typ === 'login')
        czylogujesie = true;
    else if(typ === 'register')
        czylogujesie = false;
    return czylogujesie;
}

const ustawloginiregister = () => {
    const czylogujesie = czyjesttryblogowania();
    if(czylogujesie === true) {
        document.getElementById('potwierdzlogin').innerHTML = "Zaloguj się";
        document.getElementById('czycheszsiearejestrowac').innerHTML = "Nie masz konta? Zarejestruj się!";
        document.getElementById('tytulokna').innerHTML = "Zaloguj się";
        document.getElementById('powtorzhaslobox').style.display = 'none';
    }
    if(czylogujesie !== true) {
        document.getElementById('potwierdzlogin').innerHTML = "Zarejestruj się";
        document.getElementById('czycheszsiearejestrowac').innerHTML = "";
        document.getElementById('tytulokna').innerHTML = "Zarejestruj się";
        document.getElementById('powtorzhaslobox').style.display = 'inline';
    }
    zmienzalogowanegouzytkownika();
}


const zmienzalogowanegouzytkownika = () => {
    const username = new URLSearchParams(window.location.search).get('username');
    const haslo = new URLSearchParams(window.location.search).get('password');
    const infoouzytkowniku = document.getElementById('infouzalogowanym');
    if (haslo === null || username === null || haslo === undefined || username === undefined) {
        infoouzytkowniku.style.visibility = 'hidden';
        document.getElementById('zalogujsienaglowek').style.left = '60%';
        document.getElementById('zarejestrujsienaglowek').style.left = '60%';
    } else {
        infoouzytkowniku.style.visibility = 'visible';
        infoouzytkowniku.innerHTML = `Zalogowano jako ${username}`;
        document.getElementById('zalogujsienaglowek').style.visibility = 'hidden';
        document.getElementById('zarejestrujsienaglowek').style.visibility = 'hidden';
        document.getElementById('gra1').setAttribute('href', `reviewpage.html?data=mc_1.201&username=${username}&password=${haslo}`);
        document.getElementById('gra2').setAttribute('href', `reviewpage.html?data=tloup1&username=${username}&password=${haslo}`);
        document.getElementById('gra3').setAttribute('href', `reviewpage.html?data=hogwartslegacy&username=${username}&password=${haslo}`);
    }

}

const ustawdaneuzytkowikapozalogownaiu = () => {
    const username = document.getElementById('loginBox').value;
    const haslo = document.getElementById('passwordBox').value;
    const infouzytkownika = document.getElementById('infouzalogowanym');
    if (haslo === '' || username === '' || username.length > 10) {
        infouzytkownika.style.visibility = 'hidden';
        document.getElementById('zalogujsienaglowek').style.left = '60%';
        document.getElementById('zarejestrujsienaglowek').style.left = '60%';
        document.getElementById('zalogujsienaglowek').style.visibility = 'visible';
        document.getElementById('zarejestrujsienaglowek').style.visibility = 'visible';
        alert("Niepoprawne hasło lub użytkownik. Nazwa użytkownika nie może przekraczać 10 znaków.")
    } else {
        infouzytkownika.style.visibility = 'visible';
        infouzytkownika.innerHTML = `Zalogowano jako ${username}`;
        document.getElementById('zalogujsienaglowek').style.visibility = 'hidden';
        document.getElementById('zarejestrujsienaglowek').style.visibility = 'hidden';
    }
    window.location.href = `index.html?username=${username}&password=${haslo}`;
}


