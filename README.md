# ![Human Centered Design](./readme-images/hcd.png)

- Student: Tristan Brattinga(500881296)
- Duur: 31 maart 2025 - 25 april 2025 
- Docent(en): Vasilis van Gemert & Marie van Driessche

## 📝 Opdrachtomschrijving

Bij het vak Human Centered Design ga ik aan de slag met het ontwerpen van een web toepassing voor een persoon met
een beperking. Het web is een geweldige plek, alleen zijn er talloze tekortkomingen voor mensen die niet dezelfde
capaciteiten hebben als de gemiddelde mens zonder beperkingen. Het is aan de frontiers van het web, mijn peers en ik,
om het web voor iedereen toegankelijk te maken. Bij deze opdracht ga ik hands-on aan de slag met een persoon met een 
beperking om te kijken waar pijn punten liggen bij deze persoon, waar ik en anderen niet bij stilstaan. Bij deze 
opdracht komen de volgende 4 Exclusive Design Principles aan bod: 

1. Study situation
2. Ignore conventions
3. Prioritise identity
4. Add nonsense

Er zijn in totaal drie personen met alle drie een verschillende beperking:

1. Darice (Mijn testpersoon), is op latere leeftijd doof geworden. Ze heeft een typ-tolk en een speak-easy apparaat.
2. Eric, zit in een elektrische rolstoel. Zijn handen staan anders.
3. Roger, heeft maculadegeneratie. Hij kan steeds slechter zien en is nu op het punt dat hij echt niet meer zonder
   screen reader kan.

Iedere week van de vier weken is er op woensdag het testmoment met jouw aangewezen testpersoon.

### 🧏 Darice 

Ik ben onderverdeeld bij de testpersoon Darice. Zij heeft te maken met doofheid op latere leeftijd. Dit betekent dat 
zijn vroeger wel degelijk geluiden heeft meegekregen en zich hierdoor bepaalde geluiden nog wel voor kan stellen. 
Voor mijn opdracht en uitvoering kan dit heel goed van pas komen. Dit betekent dat ik geluidseffecten moet 
accentueren en niet volledig visueel hoef uit te leggen. Voor Darice zijn er twee mogelijke opdrachten om uit te kiezen:

1. Darice wil graag de inhoud van podcasts kunnen volgen, inclusief alle hoorbare details zoals sfeergeluiden,
   geluidseffecten, en nuances zoals intonatie en andere eigenschappen van de stemmen. Is de persoon bijvoorbeeld boos?
   Verdrietig? Vrolijk?
2. Ze wil films kunnen volgen, ook de hoorbare details zoals geluidseffecten, (spannende) muziek, etc.

## 🔍 Week 1: Project Verkenning

Voor de aanvang van week 1 van het vak HCD ben ik ernstig ziek geworden, waardoor ik de hele week niet bij de
lessen op school aanwezig kon zijn. Ik heb mij in de eerste week ingelezen in de opdracht en gekeken naar wat de
vereisten zijn voor het succesvol voltooien van dit vak. Ik heb gekozen voor de film opdracht. Ik hou niet van podcasts 
en vond het moeilijk om hier een concept om heen te bedenken. Doordat ik niet bij de lessen aanwezig kon zijn, wist ik 
niet dat er bepaalde films waren die Darice heel leuk vindt en we daaruit konden kiezen als inspiratie. Ik heb dus zelf 
een film uitgekozen naar mijn eigen voorkeur.

### 💡 Mijn Idee

Ik heb gekozen voor een film uit mijn jeugd waar er een mooi verhouding is tussen dialoog en visuals. De film die ik heb
gekozen is **Star Wars: Revenge of the Sith**. Ik heb voor deze film en specifiek het fragment, Duel on Mustafar, 
gekozen, omdat dit een fragment is met heel veel emotionele lading en veel actie. Ik kreeg het idee om een Star-Wars 
themed player te maken die het gevoel en de sfeer van de film versterkt. Het lijkt mij ook tof om een volledig 
aanpasbare ervaring te maken voor mensen met verschillende beperkingen, met als primaire focus doven. Zo kan iedereen 
naar deze film kijken met mijn video player.

<img src="./readme-images/mustafar-meme.jpg" alt="Mustafar meme" width="500">

<caption>Bron: https://imgflip.com/i/1zzgz9 </caption>

## 👣 Week 2: Eerste Stappen

In week 2 was ik gelukkig weer in staat om bij de lessen aanwezig te zijn. Aangezien wij woensdag en donderdag het vak 
HCD krijgen en er iedere week op woensdag wordt getest, begon ik gelijk op deze woensdag met mijn eerste test. Ik had 
nog niks in code staan, omdat ik ziek ben geweest en graag eerst wilde kijken wat Darice van mijn film keuze vindt 
en het fragment. Ook wilde ik een idee vormen over de belangrijkste aandachtspunten binnen mijn film fragment.

### 💬 Feedback van Darice

- Darice kent het 'iconische' geluid van de lightsabers, omdat zij vroeger wel gehoor had en Star Wars toen wel 
  heeft gezien. Ik moet dit geluid goed proberen te visualiseren, omdat voor een doof-geboren persoon dit niet 
  'iconisch' is, omdat hij/zij het nog nooit heeft gehoord.
- De speling tussen goed en kwaad geeft veel mogelijkheden voor visuele toevoegingen en vertalingen. Denk aan de 
  kleuren blauw (goed) en rood (kwaad).

Op donderdag ben ik aan de slag gegaan met de code. Ik heb de video gedownload van YouTube met de tool Cobalt. Ik
ben toen op zoek gegaan naar ondertitelingen in het bestandsformaat `.srt`. Mijn eerste toepassing was om direct 
ondertiteling bestanden toe te voegen aan de video met de `<track>` tag. Het leek mij leuk om te kunnen switchen 
tussen Engels en Nederlands. In de les vertelde Marie mij dat dit niet genoeg is en dat er zo te weinig toevoeging 
is. Simpelweg ondertitelingen toevoegen aan de video is niet voldoende.

### 📈 Voortgangsgesprek Vasilis

Tijdens mijn eerste voortgangsgesprek met Vasilis, vertelde hij mij over een oud project van hem waarin hij ook met 
typografie werkt op het web. Dit is een mooi voorbeeld voor deze opdracht en kan ik gebruiken voor mijn eigen 
opdracht. Hierin laat hij zien hoe hij de ondertitelingen opbouwt met HTML en hier met CSS & JS, functionaliteit aan 
geeft. De logica in dit voorbeeld ga ik volgende week toepassen en verwerken binnen mijn eigen project. Verder vond 
hij het een leuke keuze voor film en is benieuwd wat ik hiermee ga doen. 

[Web Typography by Vasilis](https://github.com/cmda-minor-web/web-typography-22-23)

### 🧠 Conclusie

Ik heb een goed film fragment uitgekozen voor deze opdracht. Ik moet wel zorgen dat ik visueel duidelijk overbreng 
wat er zo iconisch is aan de lightsabers en hoe dit klinkt. Ook moet ik genoeg visuele aanwijzingen toevoegingen 
voor muziek, emotie, sfeer en effecten.

## 🤖 Week 3: Werkend Prototype

In deze week ben ik aan de slag gegaan met het bouwen van mijn 90% versie van mijn prototype. Ik wil de meeste 
functionaliteiten verwerkt hebben zodat ik in de laatste week alleen nog maar hoef te finetunen.

Ik maak gebruik van data-attributen op iedere regel ondertiteling om zo de start- en eindtijd aan te geven en deze 
makkelijk te kunnen tweaken. In mijn JavaScript kan ik deze dan uitlezen en verwerken.

```html
<p id="line-2" data-speaker="anakin" data-start="5.0" data-end="7.0" data-tone="angry">You will not take her from me!</p>
```
```javascript
// Select all the caption elements
const captions = document.querySelectorAll("#closed-captions p")

// Add a timeupdate event to the video
video.addEventListener("timeupdate", () => {
	// Create a currentTime variable for readability 
	const currentTime = video.currentTime
    // Loop over the captions
	captions.forEach(p => {
		// Parse the start and end time
		const start = parseFloat(p.dataset.start)
		const end   = parseFloat(p.dataset.end)
        // Toggle an active class to show the correct caption if the currentTime is in between the start and end time
		p.classList.toggle('active', currentTime >= start && currentTime <= end)
	})
})
```

Dit is hoe mijn video player er nu uit ziet:

<img src="./readme-images/week-3.png" alt="Week 3 prototype" width="830">

Ik heb een nogal lang fragment waar ik mee werk dus ik heb ervoor gekozen om een tijdlijn met buttons te creëren voor 
de visuele effecten die ik toepas binnen het fragment. Door middel van deze buttons kan ik gemakkelijk naar de 
verschillende effecten springen en hoe ik niet steeds handmatig naar de precieze tijd te navigeren. Dit is niet per 
se van toevoeging voor een dove gebruiker, maar het is wel een klein stukje UX voor mij (developer) en wanneer de 
focus ligt op de visuele effecten highlighten. Iedere button heeft het `data-time` attribuut wat aangeeft waar het 
effect in het fragment zich afspeelt.
```html
<nav id="effects-timeline">
            <h3>Jump to Visual Effects</h3>
            <ul>
                <li><button data-time="73">Lightsaber Clash</button></li>
                <li><button data-time="91">Kick</button></li>
                <li><button data-time="120.5">Choke</button></li>
                <li><button data-time="156">Force Push</button></li>
                <li><button data-time="173.5">Alarm</button></li>
            </ul>
        </nav>
```
```javascript
// Select all the timeline buttons
const timelineButtons = document.querySelectorAll("#effects-timeline button")

// Loop over the buttons
timelineButtons.forEach(button => {
	// Create a click event for each button
    button.addEventListener("click", () => {
		// Parse the string from the data attr to a float (e.g. 120.5) and 
        // set the currentTime of the video to that value
        video.currentTime = parseFloat(button.dataset.time)
        // PLay the video with the updated currentTime
        video.play()
    })
})
```

### 💬 Feedback van Darice

- Mijn videospeler ziet er heel goed en verzorgd uit. Ze vond de layout heel mooi.
- Darice zou graag een functionaliteit zien waarbij ze zelf de kleuren van de ondertiteling kan aanpassen. Gekleurde 
  ondertitelingen kunnen een contrast-probleem veroorzaken en dit is niet toegankelijk.
- Zij dacht dat het 'choke' effect een onderdeel van de film was. Hier was een klein misverstand over het feit dat 
  ik dit zelf heb toegevoegd. Dit geeft aan dat ik het duidelijker en visueler moet maken, dat dit een eigen 
  toevoeging is.
- Het 'alarm' effect is heel goed gedaan zegt ze. Het duurt niet te lang en geeft goed weer dat er een hard en 
  alarmerend geluid afgaat.
- Darice begreep de tijdlijn voor de visuele effecten niet helemaal, omdat ze graag gewoon de film wil kijken. Ik 
  heb haar uitgelegd dat het voor de film niet van toegevoegde waarde is, maar dat ik het heb geïntegreerd om het 
  navigeren naar de visuele effecten makkelijker te maken en deze ook wat meer te showcasen.

### 📈 Voortgangsgesprek Vasilis

Op vrijdag heb ik mijn tweede voortgangsgesprek met Vasilis gehad. Dit ging heel goed en hij was zeer te spreken 
over mijn prototype. 

Een aantal key punten uit het gesprek:
- Heel goed dat ik verschillende lettertypes heb gebruikt voor ieder personage. Dit geeft meer vorm aan de toon.
- Het gebruik van data-attributen voor de start- en eindtijden vond Vasilis een goede logica en implementatie. 
- Alle visuele effecten veel meer aandikken. Waar ik denk dat het juist te veel is, zal Darice of een ander graag 
  meer willen zien en meekrijgen. Het 'alarm' effect is hier een goed voorbeeld van. Ik denk dat het te veel is en 
  Darice en Vasilis zien dat is precies goed. 

### 🧠 Conclusie

Mijn player ziet er heel goed uit en is iedereen over te spreken. Ik doe er goed aan om verschillende lettertypes te 
gebruiken, maar ik moet uitkijken met gekleurde ondertitelingen. Darice heeft hier moeite mee en ziet liever wit op 
zwart als ze een film kijkt. Wel zei ze dat ze het leuk zou vinden om zelf de kleuren aan te kunnen passen. Dit ga 
ik zeker integreren in mijn prototype.

## 🏁 Week 4: Afronden en Fine-tunen

### 💬 Feedback van Marie

Deze week was Darice niet aanwezig, maar Marie. Ze is haar hele leven al doof. Zij is bij alle testrondes en lessen 
aanwezig geweest en vervult deze week de rol van Darice als testpersoon. Zij heeft mij de volgende punten van feedback 
gegeven:

- Marie was te spreken over mijn algehele vormgeving.
- Zij vond de implementatie voor kleuren manipulatie van de ondertitelingen een leuke toevoeging. Wel zei ze hierbij 
  dat ik moet uitkijken dat de gebruiker niet te veel moet aanpassen en instellen voordat de film gestart kan worden. 
  De gebruiker wil graag makkelijk een film kunnen kijken zonder eindeloze instellingen aan te moeten passen. 
- De player en alles daar omheen zijn heel uitgebreid, ze heeft alleen het idee dat er visuele toevoegingen missen 
  binnen mijn fragment. Ik moet dit meer uitwerken.

### 🧠 Conclusie
Ik moet toch echt nog meer de visuele effecten aandikken binnen mijn fragment. 

### Exclusive Design Principes

Ik heb de gestelde design principes vervuld: 

1. Study situation
   1. Ik heb een toepassing voor een doof persoon ontwikkeld. Visuele onderdelen zijn van extreem belang bij het maken 
   van een prototype voor deze persoon. Dit heb ik gedaan d.m.v. lettertypes, kleuren, animaties en tekst.
2. Ignore conventions
   1. Door de gebruiker zijn eigen ervaring aan te laten passen, heeft de gebruiker meer inspraak op hoe de film 
      wordt weergegeven. Hier is normaal gesproken niet veel mee te doen.
3. Prioritize identity
   1. Darice ziet ook minder met één oog, dus plaatsing van ondertiteling en kleuren contrasten zijn van belang 
      binnen haar individuele situatie. Ik heb hiermee rekening gehouden door de ondertiteling gecentreerd te houden 
      en niet te klein. Zij zei wel dat ze het liefst een sans-serif font heeft omdat dit makkelijker leest. Ik heb 
      er toch voor gekozen om Obi-Wan een serif font te geven, omdat dit een bepaalde hoogheid en belerend effect 
      geeft. Dit is dus van toevoeging op het fragment. Verder heb ik het aanpassen van de gekleurde ondertitelingen 
      toegevoegd naar aanleiding van haar feedback.
4. Add nonsense
   1. Als 'nonsense' ofwel nutteloze functionaliteit heb ik de tijdlijn knoppen toegevoegd om naar de verschillende 
      visuele effecten te kunnen springen. Dit is niet van toevoegingen voor het bekijken van de film, maar helpt 
      wel bij aan de UX wanneer de focus op animaties en visuele effecten ligt. Dit was ook een stuk makkelijker en 
      fijner voor mijzelf tijdens het ontwikkelen 😅.

### ⚙️ Verdere Ontwikkelingen

Als ik meer tijd zou hebben voor dit project zou ik de volgende functionaliteiten en aanpassingen doorvoeren:
1. Een indicator die tijdens het gevecht aangeeft wie er de overhand heeft met aan de ene kant een rode kleur en een 
   blauwe aan de andere kant. Ik zou dit zien als een 'win-meter', ofwel wie de overhand heeft als een soort 
   touwtje-trek gimmick. Dit zou ook bijdragen aan het principe: _Add nonsense_.

## 📚 Bronnen

- Karsen Jackson. (2023, January 31). Star Wars Revenge of the Sith  Anakin vs Obi Wan  4K HDR + AI 60fps [Video]. YouTube. https://www.youtube.com/watch?v=JV8InNhMdkA
- HTML: HyperText Markup Language | MDN. (2025, 10 april). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/color
- @supports - CSS: Cascading Style Sheets | MDN. (2025, 5 maart). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/@supports
- Cmda-Minor-Web. (z.d.). GitHub - cmda-minor-web/web-typography-22-23: 🎓 Web Typography · 2022-2023 · Curriculum and Syllabus. GitHub. https://github.com/cmda-minor-web/web-typography-22-23
- Star Jedi Font | Dafont.com. (z.d.). https://www.dafont.com/star-jedi.font
- Browse Fonts - Google Fonts. (z.d.). Google Fonts. https://fonts.google.com/
- SVG Wars: May the morph be with you. (GSAP3). (z.d.). CodePen. https://codepen.io/PointC/pen/mmMXQK
- cobalt. (z.d.). Cobalt. https://cobalt.tools/
- MP4 to MP3 | CloudConvert. (z.d.). https://cloudconvert.com/mp4-to-mp3
