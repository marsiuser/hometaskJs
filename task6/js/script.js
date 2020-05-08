class Artist{
    constructor(options){
        this.name = options.name;
        this.surname = options.surname;
        this.contacts = options.contacts;
    }
}

const artistFirst = new Artist({
    name: "Eduard",
    surname: "Manet",
    contacts: "manetedik@gmail.com, +38093445656"
});


class Art extends Artist{
    constructor(options){
        super(options)
        this.namePic = options.namePic;
        this.year = options.year;
        this.executionTech = options.executionTech;
        this.size = options.size;
        if((this.name === artistFirst.name || this.name==="Eduard") && (this.surname === artistFirst.surname || this.surname ==="Manet") ){
            Art.count +=1;
        }
    }
}

Art.count = 0;

const picBreakfast = new Art({
    name: artistFirst.name,
    surname: artistFirst.surname,
    contacts: artistFirst.contacts,
    namePic: "Breakfast on the grass",
    year: 1863,
    executionTech: "oil",
    size: ' 208 × 264,5 sm'
});

const picOlympia = new Art({
    name: artistFirst.name,
    surname: artistFirst.surname,
    contacts: artistFirst.contacts,
    namePic: "Olympia",
    year: 1863,
    executionTech: "oil",
    size: '130,5 × 190 sm'
});

const picRailway = new Art({
    name: artistFirst.name,
    surname: artistFirst.surname,
    contacts: artistFirst.contacts,
    namePic: "Railway",
    year: 1869,
    executionTech: "oil",
    size: '74 см x 92 sm'
});

const picBalcony = new Art({
    name: artistFirst.name,
    surname: artistFirst.surname,
    contacts: artistFirst.contacts,
    namePic: "Balcony",
    year: 1889,
    executionTech: "oil",
    size: '71 см x 93 sm'
});

const picScream = new Art({
    name: "Edwar",
    surname: "Munch",
    contacts: artistFirst.contacts,
    namePic: "Scream",
    year: 1893,
    executionTech: "oil",
    size: ' 191 × 264,5 sm'
});

const picBlackSquare = new Art({
    name: "Kazimir",
    surname:"Malevich",
    contacts: artistFirst.contacts,
    namePic: "Black square",
    year: 1915,
    executionTech: "oil",
    size: ' 80 × 80 sm'
});

let newArtist = document.querySelector(".container-artist__name");
let newContacts = document.querySelector(".container-artist__contacts");
let newNamePic = document.querySelector(".container-artist__name__art");
let newYear = document.querySelector(".container-artist__year");

let heading = document.querySelector(".heading");
let contacts = document.querySelector(".container-info__contacts");
let countOfPic = document.querySelector(".container-info__count");
let namesOfPic = document.querySelector(".container-info__names");

function addInfo(){
    const newPic = new Art({
        name: nameNew=prompt("Enter name of artist"),
        surname: surnameNew= prompt("Enter suname of artist"),
        contacts: contactsNew = prompt("Contacts"),
        namePic: namePicNew = prompt("Enter name o the picture"),
        year: yearNew = prompt("Enter year of release"),
        executionTech: executNew = prompt("Enter execution technic") ,
        size: sizeNew = prompt("Enter size of the picture")
    });
    newArtist.innerHTML = newPic.name + " " + newPic.surname;
    newContacts.innerHTML = "Contacts : " + newPic.contacts;
    newNamePic.innerHTML ="Name of picture: " + newPic.namePic;
    newYear.innerHTML ="Year of release: " + newPic.year;
    let containerArtist = document.querySelector(".container-artist");
    containerArtist.style.display = "inline";
    if(this.nameNew === "Eduard" &&  this.surnameNew ==="Manet"){
        ++Art.count;
    }
    else{
        Art.count+=0;
    }
    countOfPic.innerHTML = "You add new picture, current number of pictures by Eduard Manet - "+ Art.count;
    console.log("You add new picture, current number of pictures  by Eduard Manet= " + Art.count);
};

document.querySelector("#addPic").onclick = addInfo;
console.log("Our artist is "+ artistFirst.name + " " + artistFirst.surname);
console.log("Contacts : " + artistFirst.contacts);
console.log("Number of paintings by Eduard Manet = "+ Art.count);
console.log("Names of paintings: " + picBreakfast.namePic + ", " + picOlympia.namePic + ", " + picRailway.namePic + ", " + picBalcony.namePic);


heading.innerHTML = "Our artist is "+ artistFirst.name + " " + artistFirst.surname;
contacts.innerHTML = "Contacts : " + artistFirst.contacts;
countOfPic.innerHTML = "Number of pictures by Eduard Manet - "+ Art.count;
namesOfPic.innerHTML ="Names of pictures: " + picBreakfast.namePic + ", " + picOlympia.namePic + ", " + picRailway.namePic + ", " + picBalcony.namePic;

const showMore = () => {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");
  let  bordr = document.querySelector(".container-info");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
    bordr.style.borderBottom = "none"
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
    bordr.style.borderBottom = "1px solid rgb(235, 235, 235)";
  }
}

