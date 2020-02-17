const results = {
  data: [
    {
      name: "cafe central",
      image:
        "https://www.falstaff.at/fileadmin/news_import/cafecentral-panorama_388.jpg",
      types: ["tradition", "royal"],
      aboutText:
        "Seit 1876 versprüht dieses Wiener Kaffeehaus im Palais Ferstel eine ganz eigene Atmosphäre. Der prunkvolle Innenhof im venezianischen Stil, die hervorragende Patisserie und die angenehme Klaviermusik machen jeden Besuch zu einem Erlebnis. Neben verschiedensten Kaffeespezialitäten genießen die Gäste des Cafés vor allem die köstlichen Klassiker der Wiener Küche, wie Tafelspitz, Wiener Schnitzel und Kaiserschmarrn.",
      // todo add more properties to each kaffee
      link: "https://www.cafecentral.wien/"
    },
    {
      name: "cafe korb",
      image:
        "https://cafekorb.at/site/assets/files/1223/110-korb.600x0.jpg?v=5d203650",
      types: ["tradition"],
      aboutText:
        "Seit 1904 begrüßt ebenfalls in der Nähe des Stephansplatzes das Café Korb seine Gäste. Hier gibt es den ganzen Tag lang Frühstück, aber auch ein großartiges Wiener Schnitzel. Das Café Korb ist berühmt für seine Artlounge. Mehrere Künstler haben diesen speziellen Raum gestaltet. Die Artlounge bildet mitten im klassischen Kaffeehaustreiben einen künstlerischen und modernen Gegenpol. Ein weiterer Blickfang im Café Korb sind die vielen Bilder aus dem Leben der Besitzerin, der schillernden Schauspielerin und Performance Künstlerin Susanne Widl.",
      link: "https://cafekorb.at/"
    },
    {
      name: "cafe sacher",
      image: "https://www.city-walks.info/Wien/bilder/Cafe-Sacher-Eingang.JPG",
      types: ["tradition", "known", "royal"],
      aboutText:
        "Das Sacher Eck erstreckt sich über zwei Etagen und sorgt für ein großzügiges Raumgefühl während Sie ein Stück Original Sacher-Torte oder andere Sacher-Köstlichkeiten genießen. Im neu gestalteten ersten Stockwerk können Besucher des Sacher Ecks auf gemütlichen Sofas oder in einladenden Séparées mit einem beeindruckenden Blick auf die Wiener Staatsoper entspannen. Die Sacher Confiserie besticht durch majestätischen weißen Marmor und ein neues Verkaufskonzept, das sich auf visuelle und haptische Erlebnisse für die Kunden konzentriert.",
      link: "https://www.sacher.com/de/restaurants/sacher-eck-wien/"
    },
    {
      name: "cafe alt-wien",
      image:
        "https://i1.wp.com/www.kaffeealtwien.at/wp-content/uploads/2019/04/DSC_5323.jpg?fit=2048%2C1367&ssl=1",
      types: ["tradition"],
      aboutText:
        "Das Kaffee Alt Wien wurde am 14. Oktober 1922 erstmals eröffnet und 1936 von Leopold Hawelka und dessen Frau Josefine einen Tag nach ihrer Hochzeit übernommen. Bis 1939 führten sie das Kaffee Alt Wien, übersiedelten dann in die Dorotheergasse und übernahmen dort das Café Ludwig, das heute als Café Hawelka bekannt ist. In den 1980er Jahren entwickelte sich das Lokal zu einem Nachtcafé.",
      link: "https://www.kaffeealtwien.at/"
    },
    {
      name: "cafe mik",
      image:
        "https://www.eriknorden.com/content/2-illustration/8-Kaffee-Charaktere/kaffemik-01.gif",
      types: ["modern"],
      aboutText:
        "Espresso und Filterkaffee wird von den besten Röstern Europas bezogen, das Angebot wechselt regelmäßig. Wechselnde Tartes, Croissants, Pain au Chocolat und mehr.",
      link: "https://www.kaffemik.at/"
    },
    {
      name: "cafe modul",
      image: "https://kaffeemodul.at/wp-content/uploads/ND4_9363.jpg",
      types: ["modern"],
      aboutText:
        "Winziger Kaffeeladen zum Kaffeetrinken und kaufen; Espresso, Cappuccino etc., verschiedene Filterkaffeemethoden; Kaffeebohnen (direct trade) von Quijote Kaffee (Hamburg), auch hauseigene Röstungen (nomi coffee) aber auch immer wieder Gastkaffees von anderen Röstereien. Kuchen und Kekse.",
      link: "https://kaffeemodul.at/"
    },
    {
      name: "motto am fluss",
      image:
        "https://www.a-list.at/typo3temp/fl_realurl_image/motto-am-fluss-wien-donaukanal-cs0.jpg",
      types: ["modern"],
      aboutText:
        "Die Erholungsinsel mitten in der Stadt – mit großer Terrasse und einer Aussicht bis zum Wiener Kahlenberg. Frische Zubereitung und Bio-Produkte haben Priorität — auf der Karte stehen Frühstücks-Highlights, gesunde Bistro – Gerichte und Süßspeisen aus hauseigenen Patisserie. Dazu frische Smoothies, hausgemachte Limonaden und selbst gebackenes Brot.",
      link: "https://www.mottoamfluss.at/de/willkommen"
    }
  ]
};

const list = document.querySelector("#main-kaffee ul");

//results.data.forEach(cafe => {
//setupListItem(cafe);
//});

function setupListItem(cafe) {
  // const name = cafe.name;
  // const image = cafe.image;
  // ...

  const { name, image, types, aboutText, link } = cafe;

  const listItem = document.createElement("li");

  // Build header

  const placeNameHeader = document.createElement("span");
  const placeNameHeaderContent = document.createTextNode(name);
  placeNameHeader.appendChild(placeNameHeaderContent);
  // attach headeer to list item
  listItem.appendChild(placeNameHeader);

  // build about section
  const aboutTextEl = document.createElement("p");
  aboutTextEl.className = "text";
  aboutTextEl.style.display = "none";
  const aboutTextElContent = document.createTextNode(aboutText);
  aboutTextEl.appendChild(aboutTextElContent);
  // attach aboutTextEl to list item
  listItem.appendChild(aboutTextEl);

  // build link
  const infoLink = document.createElement("a");
  infoLink.href = link;
  infoLink.style.display = "none";
  infoLink.target = "_blank";

  const infoLinkContent = document.createTextNode(link);
  infoLink.appendChild(infoLinkContent);
  // attach infoLink to parent 'P' --aboutTextEl
  aboutTextEl.appendChild(infoLink);

  // build buttons
  const infoBtn = document.createElement("button");
  infoBtn.className = "info";
  const infoBtnContent = document.createTextNode("Show more");
  infoBtn.appendChild(infoBtnContent);

  const hideInfoBtn = document.createElement("button");
  hideInfoBtn.className = "no-info";
  const hideInfoBtnContent = document.createTextNode("Show less");
  hideInfoBtn.appendChild(hideInfoBtnContent);

  // attach btns to list item
  listItem.appendChild(infoBtn);
  listItem.appendChild(hideInfoBtn);

  // build image
  const imageEl = document.createElement("img");
  imageEl.src = image;
  imageEl.style.width = "320px";
  imageEl.style.height = "280px";
  // ... TODO at home, append to the list item
  listItem.appendChild(imageEl);

  // add item to "main-kaffee"--ul list
  list.appendChild(listItem);
}

const chooseOfType = type => {
  //first clear all the cafes, then filter out each cafe
  list.innerHTML = "";
  results.data
    .filter(cafe => cafe.types.includes(type))
    .forEach(cafe => {
      setupListItem(cafe);
    });
};

const removeSelection = () => {
  list.innerHTML = "";
  //results.data.forEach(cafe => {
  //setupListItem(cafe);
  //});
};

//----------------------------Select Content--------------------------

const selectionId = document.getElementById("selection");

selectionId.addEventListener("change", function() {
  if (selectionId.value !== "") {
    chooseOfType(selectionId.value);
  } else {
    removeSelection();
  }
});

//----------------------------slide images----------------------------

const images = ["tea1.jpg", "tea3.jpg", "tea5.jpg"];

num = 0;

function next() {
  let slider = document.getElementById("image");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}
setInterval(next, 2000);

//-------------------------JS---mouse event---------------------------

document.querySelector("#main-kaffee").addEventListener("click", function(e) {
  let showText = document.getElementsByClassName("text");
  const infoLink = document.getElementsByTagName("a");
  //console.log(showText);
  for (let i = 0; i < showText.length; i++) {
    if (e.target.className == "info") {
      showText[i].style.display = "block";
      infoLink[i].style.display = "block";
    } else {
      showText[i].style.display = "none";
    }
  }
});

//---------------------------JQuery Button MouseEvent------------------

// "this" keyword refers to the parent scope. Arrow functions do not have their own scope, the "this" in them, refers to the scope above.
/*$(document).ready(() => {
    $("#main-kaffee").on("click", ".info", function() {
      const text = $("#main-kaffee").find(".text");
      const link = $("#main-kaffee").find(".link");
  
      const letterSpace = "1px";
      const fontWeight = "600";
      text
        .css({
          letterSpace: letterSpace,
          fontWeight: fontWeight
        })
        .fadeIn(2000);
  
      link.fadeIn(3000);
    });
  
    $("#main-kaffee").on("click", ".no-info", function() {
      const text = $("#main-kaffee").find(".text");
      const link = $("#main-kaffee").find(".link");
      text.fadeOut(1000);
      link.fadeOut(1000);
    });
  });*/
