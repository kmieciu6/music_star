import React from 'react';
import '../scss/main.scss';
import Header from "./Header";
import Footer from "./Footer";
import star1 from '../assets/Borysewicz.jpg'
import star2 from '../assets/Panasewicz.jpg'
import star3 from '../assets/Jabłoński.jpg'
import star4 from '../assets/Kieliszkiewicz.jpg'
import star5 from '../assets/Sitarski.jpg'

const AboutUs = () => {
    return (
        <section id='aboutUs'>
            <Header/>
            <div>
                <h1>Członkowie zespołu</h1>
                <div className='stars'>
                    <div className='star'>
                        <img src={star1} alt='Jan_Borysewicz'/>
                        <h4>Jan Borysewicz – gitara, śpiew</h4>
                    </div>
                    <div className='star'>
                        <img src={star2} alt='Janusz_Panasewicz'/>
                        <h4>Janusz Panasewicz – śpiew</h4>
                    </div>
                    <div className='star'>
                        <img src={star3} alt='Kuba_Jabłoński'/>
                        <h4>Kuba Jabłoński – perkusja</h4>
                    </div>
                    <div className='star'>
                        <img src={star4} alt='Krzysztof_Kieliszkiewicz'/>
                        <h4>Krzysztof Kieliszkiewicz – gitara basowa</h4>
                    </div>
                    <div className='star'>
                        <img src={star5} alt='Michał_Sitarski'/>
                        <h4>Michał Sitarski – gitara (stały sideman)</h4>
                    </div>
                </div>

                <h1>Historia</h1>
                <p>Zespół Lady Pank to jeden z najpopularniejszych i najbardziej legendarnych polskich zespołów
                    rockowych. Powstał we Wrocławiu, we wrześniu 1981 roku, z inicjatywy gitarzysty i kompozytora,
                    Jana
                    Borysewicza związanego wcześniej z grupą Budka Suflera. Drugim z założycieli Lady Pank był
                    Andrzej
                    Mogielnicki – główny autor tekstów piosenek zespołu. Wokalistą Lady Pank jest Janusz Panasewicz.

                    Pierwszym utworem zarejestrowanym (również wokalnie) przez Jana Borysewicza była „Mała Lady
                    Punk”,
                    której tytuł stał się inspiracją dla nazwy zespołu, jednak aby nazwa nie sugerowała, że grupa
                    wykonuje muzykę punk rockową, drugi człon nazwy został zmieniony na "pank". Kolejny utwór,
                    „Minus 10
                    w Rio”, został już nagrany z Januszem Panasewiczem w roli wokalisty. Tak powstał trzon grupy,
                    która
                    z krótkimi przerwami, już od 35 lat błyszczy na polskiej scenie muzycznej. Pierwszy skład
                    zespołu
                    skrystalizował się na początku 1982 roku: Jan Borysewicz – gitara solowa; Janusz Panasewicz –
                    śpiew;
                    Paweł Mścisławski – bas; Edmund Stasiak – gitara oraz Jarosław Szlagowski – perkusja. W tym
                    składzie
                    zespół nagrał pierwszy długogrający album pt. "Lady Pank" (1983), który rozszedł się w ponad
                    milionowym nakładzie i do dziś jest jedną z najważniejszych płyt w historii polskiej muzyki
                    rozrywkowej. Kolejny album, "Ohyda" (1984), potwierdził klasę zespołu i wybitny talent
                    kompozytorski
                    twórcy jego przebojów. Pochodzące z tamtego okresu piosenki "Mniej niż zero", "Kryzysowa
                    narzeczona", "Zamki na piasku", "Vademecum Skauta", "Wciąż bardziej obcy", "Fabryka małp", "To
                    jest
                    tylko rock and roll" na stałe weszły do kanonu polskiej muzyki rozrywkowej i wychowały już dwa
                    pokolenia słuchaczy. Każdy kolejny album Lady Pank spotykał się z ogromnym zainteresowaniem
                    fanów
                    zespołu i krytyków.

                    W roku 1985 zespół wyjechał z kraju na występy zagraniczne, które w tamtych czasach były na tle
                    szarej, polskiej codzienności niezwykłym wydarzeniem. Od Wielkiej Brytanii, przez Finlandię i
                    Związek Radziecki aż po kilkutygodniowe tournee po Stanach Zjednoczonych, gdzie zespół został
                    zauważony przez amerykańskich promotorów i zaproszony do współpracy. Amerykański sen Lady Pank
                    jest
                    już owiany legendą, w USA został wydany album "Drop Everything" (odpowiednik debiutanckiej płyty
                    "Lady Pank" z 1983 roku nagrany po angielsku), lecz w efekcie zespół podjął decyzję o powrocie i
                    kontynuowaniu działalności w kraju.

                    W 1986 roku ukazał się album "LP 3", a tuż po nim "O dwóch takich, co ukradli księżyc" będący
                    ścieżką dźwiękową filmu rysunkowego o tym samym tytule nagrany przez Jana Borysewicza
                    wspomaganego
                    wokalnie przez Janusza Panasewicza. Premierze filmu towarzyszył cykl koncertów pt. „Jacek i
                    Placek,
                    czyli Lady Pank w poszukiwaniu krainy leniuchów”. Z tego okresu pochodzi jeden z największych
                    hitów
                    zespołu, "Marchewkowe pole", do dziś wykonywany przez Lady Pank na koncertach. Zarówno film, jak
                    i
                    płyta odniosły taki sukces, że w 1988 roku została wydana jej druga część. Tu można powiedzieć o
                    pewnego rodzaju ironii, kiedy zespół rockowy znany ze swojej kontrowersyjności nagrywa piosenki
                    do
                    filmu dla dzieci. Jednak Lady Pank był zespołem, który już wówczas łączył dwa pokolenia –
                    rodziców i
                    dzieci.


                    W czerwcu 1986 roku zespół został decyzją władz zawieszony na rok za skandal, jaki wywołał
                    podczas
                    jednego z koncertów we Wrocławiu. Krótki kryzys nie wpłynął jednak na kondycję muzyczną
                    Borysewicza,
                    który już dwa lata później skomponował trzy wielkie przeboje, do dziś regularnie prezentowane
                    przez
                    stacje radiowe: "Tacy sami" i "To, co mam" i najsłynniejszy z nich - "Zostawcie Titanica".
                    Wszystkie
                    ukazały się na bardzo popularnej wówczas płycie "Tacy sami". W tym samym roku, podczas kolejnej
                    trasy koncertowej w USA, doszło jednak do rozpadu grupy. Jana Borysewicza i Janusza Panasewicza
                    opuścili pozostali muzycy i dopiero w 1990 roku Jan Borysewicz powołał nowy skład z Kostkiem
                    Joriadisem, Piotrem Urbankiem i powracającym do zespołu Jarosławem Szlagowskim. W tym składzie
                    powstał szósty już album Lady Pank z kolejnym wielkim hitem "Zawsze tam, gdzie ty". Jest to do
                    dziś
                    jedna z najczęściej prezentowanych przez stacje radiowe polskich ballad. Borysewicz zaprosił do
                    współpracy nowego tekściarza, Jacka Skubikowskiego, który stworzył wszystkie teksty na ten
                    album.

                    W 1991 roku zespół ponownie zawiesił działalność (znowu podczas koncertów w USA), jednak jego
                    legenda budowała się nadal mimo braku aktywności muzycznej. Krajowe listy przebojów podbijały
                    kolejne single z płyty "Zawsze tam, gdzie ty": "Co mnie to obchodzi" i "Jak igła".

                    Z ogromnym impetem zespół Lady Pank wrócił w roku 1994 wydając naszpikowaną przebojami i nagraną
                    w
                    odświeżonym składzie płytę "Na Na". Album wydała wkraczająca wówczas na polski rynek
                    międzynarodowa
                    firma KOCH International, która zdecydowała się postawić na legendę polskiego rocka, jej nowy
                    wizerunek i dość mocny, rockowy materiał muzyczny. I wygrała. Album "Na Na" uzyskał status
                    platynowej płyty i przyniósł takie hity, jak "Na co komu dziś", "Na Na", "Młode orły" czy "Zabić
                    strach". Powołany wówczas skład zespołu [do Jana Borysewicza i Janusza Panasewicza dołączyli
                    Krzysztof Kieliszkiewicz (bas), Kuba Jabłoński (perkusja) i Andrzej Łabędzki (gitara)] z jedną
                    zmianą (w 2001 roku zespół opuścił Andrzej Łabędzki) funkcjonuje z powodzeniem do dnia
                    dzisiejszego.

                    Od tego czasu, z regularnością co dwa, trzy lata, zespół nagrywa kolejne płyty i lansuje kolejne
                    przeboje. "Znowu pada deszcz", "Słońcem opętani", "7-me niebo nienawiści", "Stacja Warszawa"
                    (największy polski przebój 2004 roku), "Strach się bać", "Wenus Mars", "Mój świat bez ciebie",
                    "Dziewczyny dzisiaj z byle kim nie tańczą" śpiewają kolejne pokolenia fanów. Poprzedni studyjny
                    album "Maraton" ukazał się w 2011 roku, a po nim zespół zaprezentował dwa albumy koncertowe:
                    "Symfonicznie" (2012) zarejestrowany wspólnie z Orkiestrą Symfoników Gdańskich i "Akustycznie"
                    (2015). Ten pierwszy jest prawdziwym ewenementem na polskim rynku, zwłaszcza jeśli chodzi o
                    płyty
                    koncertowe, ponieważ do dziś utrzymuje się na liście największych bestsellerów muzycznych OLiS.

                    Borysewicz, od lat prowadzi równolegle solową działalność muzyczną pod szyldem Jan Bo.
                    Dotychczas
                    ukazało się pięć płyty z gitarową muzyką, w jakiej specjalizuje się lider Lady Pank: "Królowa
                    ciszy"
                    (1988), "Wojna w mieście" (1992), "Moja wolność" (1996), "Miya" (2010), "Kawa i dym" (2017).
                    Ponadto
                    w 2003 roku wydał płytę z Pawłem Kukizem pod szyldem Borysewicz-Kukiz, który stał się ogromnym
                    sukcesem komercyjnym osiągając status platynowej płyty. Janusz Panasewicz również ma na swoim
                    koncie
                    dwa solowe albumy: "Włóczykij" (2008) i "Fotografie" (2014).

                    Lady Pank jest pierwszym polskim zespołem, któremu dedykowane jest oficjalne internetowe radio
                    „RMF
                    Lady Pank” dostępne w serwisie internetowym RMFon.pl.

                    W kwietniu 2016 roku, dokładnie w dniu urodzin Jana Borysewicza czyli 17 kwietnia, ukazała się
                    kolejna premierowa płyta Lady Pank pt. "Miłość i władza". Album promowały single: "Miłość" (do
                    którego powstał teledysk z udziałem znanej aktorki, Olgi Bołądź, reż. Pascal Pawliszewski),
                    "Władza"
                    (teledysk w formie "fan footage" w reż. Daniela Stanisławskiego) oraz "Trochę niepamięci" (z
                    koncertowym lyric video). Pół roku później ukazała się reedycja tej płyty wzbogacona o singiel
                    "Sterowany" (teledysk w reż. Pascala Pawliszewskiego).

                    2016 to również rok jubileuszu 35-lecia istnienia Lady Pank. Z tej okazji odbył się szereg
                    wydarzeń
                    medialnych, m.in. jubileuszowy recital zespołu podczas Polsat SuperHit Festiwal w Sopocie i
                    jubileuszowa trasa koncertowa (przedłużona na kolejny 2017 rok), w ramach której zespół zagrał
                    blisko 200 koncertów w Polsce, USA, Anglii, Irlandii, Szkocji, Holandii, Norwegii, Islandii,
                    Niemczech, Czechach.

                    W listopadzie 2017 roku ukazała się kolejna, premierowa płyta Lady Pank, "Zimowe graffiti 2"
                    będąca
                    kontynuacją albumu sprzed 21 lat, "Zimowe graffiti" (1996). Kompozytorem wszystkich utworów
                    tradycyjnie jest Jan Borysewicz, a autorem wszystkich tekstów, po raz pierwszy od dwóch dekad,
                    Janusz Panasewicz. Płytę promowały single "Otuleni" i "Rodzice" (w teledysku wystąpił znany
                    aktor
                    młodego pokolenia, Mateusz Damięcki).

                    Na rok 2018 zespół Lady Pank przygotowuje specjalny projekt pod hasłem "LP1". Z racji jubileuszu
                    35-lecia debiutanckiej, kultowej płyty pt."Lady Pank" (premiera miała miejsce 20 czerwca 1983
                    r.),
                    ukaże się jej remake, na którym legendarne przeboje "Mniej niż zero", "Kryzysowa narzeczona",
                    "Fabryka małp", "Vademecum skauta" czy "Zamki na piasku" zaśpiewają zaproszeni przez Lady Pank
                    goście. Materiał będzie wzbogacony o trzy piosenki, które powstały przed nagraniem pierwszej
                    płyty,
                    lecz ujrzały światło dzienne tylko na singlach Tonpressu: "Mała Lady Punk", "Tańcz głupia,
                    tańcz" i
                    "Minus 10 w Rio". Zespół planuje również specjalną trasę koncertową poświęconą tylko tej płycie
                    oraz
                    występ na jednym z największych polskich festiwali muzycznych.
                </p>
            </div>
            <Footer/>
        </section>
    );
}

export default AboutUs;