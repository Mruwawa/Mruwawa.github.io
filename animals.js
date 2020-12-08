class Animal {
    constructor(name, info, picture, gallery) {
        this.name = name;
        this.info = info;
        this.picture = picture;
        this.gallery = gallery;
    }

    fillDisplayPanel = (parentElSelector) => {
        this.animalEl = document.createElement("div");
        this.animalEl.classList.add("animal");
        this.animalEl.innerHTML = `<h1>${this.name}</h1>`;
        this.animalEl.style.backgroundImage = `url(${this.picture})`;
        this.animalEl.addEventListener("click", () => {
            this.displayInfo(".description-box");
        })
        document.querySelector(parentElSelector).appendChild(this.animalEl);

    }

    displayInfo = (infoElSelector) => {
        
        document.querySelector(infoElSelector).innerHTML = `
        <span class="close-description">✕</span>
        <h1 class="title">${this.name}</h1>
        <div class="gallery">
            
        </div>
        <p class="description">${this.info}</p>
        `;
        this.gallery.forEach((picture)=>{
            const img = document.createElement("img");
            img.src = picture;
            img.addEventListener("click", ()=>{
                document.querySelector(infoElSelector).innerHTML = `
                <span class="close-description">✕</span>
                <img class="full-picture" src="${picture}">
                `;
                document.querySelector(".close-description").addEventListener("click",()=>{
                    this.displayInfo(infoElSelector);
                });
            });
            
            document.querySelector(".gallery").appendChild(img);
            
        });
        document.querySelector(".close-description").addEventListener("click",()=>{
            document.querySelector(".overlay").style.display = "none";
        });
        document.querySelector(".overlay").style.display = "flex";
    }
}
const animals = [
    // new Animal("Żyrafy", "The giraffe (Giraffa) is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies. However, the existence of up to eight extant giraffe species has been described, based upon research into the mitochondrial and nuclear DNA, as well as morphological measurements of Giraffa. Seven other species are extinct, prehistoric species known from fossils.", "https://fajnepodroze.pl/wp-content/uploads/2020/02/zyrafa-w-calej-okazalosci-scaled.jpg", 
    // [
    //     "https://fajnepodroze.pl/wp-content/uploads/2020/02/zyrafa-w-calej-okazalosci-scaled.jpg",
    //     "https://s3.viva.pl/styl-zycia/-505941-GALLERY_BIG.jpg",
    //     "https://bafka.ovh/wp-content/uploads/%C5%BCyrafa-1.jpg",
    //     "https://d-art.ppstatic.pl/kadry/k/r/19/89/5b8436da492bc_o_medium.jpg",
    //     "https://rzucijedz.pl/images/2019/11/25/jak-spia-zyrafy_large.jpg",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Giraffe_in_Selous_Game_Reserve_%289%29_%2829049301195%29%2C_crop.jpg/1200px-Giraffe_in_Selous_Game_Reserve_%289%29_%2829049301195%29%2C_crop.jpg"
    // ]),
    // new Animal("Papugi", 'Parrots, also known as psittacines /ˈsɪtəsaɪnz/,[1][2] are birds of the roughly 398 species[3] in 92 genera comprising the order Psittaciformes /ˈsɪtəsɪfɔːrmiːz/, found mostly in tropical and subtropical regions. The order is subdivided into three superfamilies: the Psittacoidea ("true" parrots), the Cacatuoidea (cockatoos), and the Strigopoidea (New Zealand parrots). One-third of all parrot species are threatened by extinction, with higher aggregate extinction risk (IUCN Red List Index) than any other comparable bird group.[4] Parrots have a generally pantropical distribution with several species inhabiting temperate regions in the Southern Hemisphere, as well. The greatest diversity of parrots is in South America and Australasia.', "https://i.pinimg.com/originals/39/9b/d7/399bd75f5c3ede2fa95f61786e52c886.jpg", 
    // [
    //     "https://i.pinimg.com/originals/39/9b/d7/399bd75f5c3ede2fa95f61786e52c886.jpg",
    //     "https://s10.tvp.pl/images2/0/a/7/uid_0a723786dcc9d25b9032eb6324764d551532171658401_width_907_play_0_pos_0_gs_0_height_515_naukowcy-potwierdzili-ze-do-ptakow-o-najwiekszej-wzglednej-wielkosci-mozgu-naleza-krukowate-i-papugi-fot-pixabay.jpg",
    //     "https://ecsmedia.pl/c/egzotyczne-papugi-co-warto-wiedziec-o-tych-ptakach-jak-hodowac-je-w-domu-artilce.horizontal.large-img54763463.jpg",
    //     "https://www.telekarma.pl/userfiles/images/aktualnosci/zdj%C4%99cia%20do%20aktualno%C5%9Bci/dieta-papug-falistych(1).jpg",
    //     "https://zwierzoklub.pl/blog/uploads/Papugi1.jpg",
    //     "https://fajnepodroze.pl/wp-content/uploads/2020/02/papugi-kakadu.jpg"
    // ]),
    // new Animal("Lwy", "The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane. With a typical head-to-body length of 184–208 cm (72–82 in) they are larger than females at 160–184 cm (63–72 in). It is a social species, forming groups called prides. A lion pride consists of a few adult males, related females and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, the species typically does not.", "https://24.media.tumblr.com/5f638bb6d036aab1a63e62d519233c4c/tumblr_mgukqt4Y7t1rtitxmo1_500.jpg", 
    // [
    //     "https://24.media.tumblr.com/5f638bb6d036aab1a63e62d519233c4c/tumblr_mgukqt4Y7t1rtitxmo1_500.jpg",
    //     "https://upload.wikimedia.org/wikipedia/commons/a/ae/African_Lion_Panthera_leo_Male_Pittsburgh_2800px.jpg",
    //     "https://i.ytimg.com/vi/Rew5xI4h188/maxresdefault.jpg",
    //     "https://i.wpimg.pl/956x720/d.wpimg.pl/1526036265-1962543265/lew.jpg",
    //     "https://paczka-wiedzy.pl/wp-content/uploads/2017/12/lew.jpg"
    // ]),
    // new Animal("Niedźwiedzie polarne", 'The polar bear (Ursus maritimus) is a hypercarnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses. It is the largest extant bear species, as well as the largest extant predatory carnivore.[5][6] A boar (adult male) weighs around 350–700 kg (770–1,540 lb),[7] while a sow (adult female) is about half that size. Although it is the sister species of the brown bear,[8] it has evolved to occupy a narrower ecological niche, with many body characteristics adapted for cold temperatures, for moving across snow, ice and open water, and for hunting seals, which make up most of its diet.[9] Although most polar bears are born on land, they spend most of their time on the sea ice. Their scientific name means "maritime bear" and derives from this fact. Polar bears hunt their preferred food of seals from the edge of sea ice, often living off fat reserves when no sea ice is present. Because of their dependence on the sea ice, polar bears are classified as marine mammals.[10]', "https://40.media.tumblr.com/d23db9009c4ed8f8b8866bfe6f6d895a/tumblr_n886egEuS61rf0cako1_500.jpg", 
    // [
    //     "https://40.media.tumblr.com/d23db9009c4ed8f8b8866bfe6f6d895a/tumblr_n886egEuS61rf0cako1_500.jpg",
    //     "https://lh3.googleusercontent.com/proxy/oAu6C4LfCdXnFcPzqGJHiCHuqEZwPQ4BpA7TtXYo6oik7fN3Lzs4kHIXklkbwWN6bE0LsBNDFxvXJpw2WxcWtIfBVTWgmS9oMmEsMlssJ5rog-Zk0RTcmT5g7cL4pvbAie5OEogyZYEWYx4Q1OCMf3pvJoZV0TCBCDbAGMYuO3HLOtojmlCKTwfEfCughf4-0ywsTEdVxCFXsA",
    //     "https://sl.sbs.com.au/public/image/file/94f6d254-e851-4079-a60a-fa9ddd6def8f",
    //     "https://cdn.cnn.com/cnnnext/dam/assets/200720030735-01-polar-bear-svalbard-0709-large-169.jpg",
    //     "https://static.scientificamerican.com/sciam/cache/file/F061884D-0E33-4B9D-84CDB8B26ECB80A8_source.jpg?w=590&h=800&4ABD1D65-CB15-405E-AC093265EC8354E2",
    //     "https://www.pbs.org/wgbh/nova/media/images/tagged_bear.width-2000.jpg"
    // ]),
    new Animal("Orczyk", "Najgorszy nauczyciel zamieszkujący dzikie tereny ZST w Radomiu","orczykowski.jpg" , [
        "orczykowski.jpg","https://images.youracclaim.com/images/20b04f75-d8b1-4378-8d90-a8dfa296b13a/blob.png",
        "https://d-art.ppstatic.pl/kadry/k/r/1/d6/1a/5607fa61f25eb_o_large.jpg",
        "https://sphoto.nasza-klasa.pl/5967969/4/square/90af522bb4.jpeg?v=1",
        "https://cdn.discordapp.com/attachments/401334667707416576/785850802559385600/received_255210312080257.webp",
        "https://cdn.discordapp.com/attachments/401334667707416576/785850803877314570/received_765102364006073.webp"
    ]),
    new Animal("Rudy", "Szanowny pan prezes ZST", "https://kometa.edu.pl/uploads/user/a6f088c6ac02fa54ffc342d2f709738a.jpeg?v2.8", [
        "https://kometa.edu.pl/uploads/user/a6f088c6ac02fa54ffc342d2f709738a.jpeg?v2.8",
        "https://pbs.twimg.com/media/DKp3N9rXoAM1ak0.jpg",
        "https://zebrra.tv/wp-content/uploads/2018/09/2018-09-26-WYSZUKANI-RUDNICKI.jpg",
        "https://radioplus.com.pl/images/rudn.jpg",
        "https://cdn.discordapp.com/attachments/401334667707416576/785850802811830292/received_197236147848269.webp"
    ]),
    new Animal("Czerwonka", "Visio expert", "https://cdn.discordapp.com/attachments/401334667707416576/785850803243319296/received_791722044590227.webp", 
    [
        "https://cdn.discordapp.com/attachments/401334667707416576/785850803243319296/received_791722044590227.webp",
        "https://cdn.discordapp.com/attachments/401334667707416576/785850803427737610/received_2175711055868761.webp"
    ]),
    new Animal("Skrok", "Niemiecki informatyk Marek Skrok","https://cdn.discordapp.com/attachments/401334667707416576/785850804757725254/received_694588197855933.webp", 
    [
        "https://cdn.discordapp.com/attachments/401334667707416576/785850804757725254/received_694588197855933.webp",
        "https://cdn.discordapp.com/attachments/401334667707416576/785850804199227402/received_654416088468585.webp",
        "https://cdn.discordapp.com/attachments/401334667707416576/785850801742544926/received_1031734173970076.jpeg"
    ])
];

animals.forEach((animal) => {
    animal.fillDisplayPanel(".animals");
});

document.querySelector(".overlay").addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
        document.querySelector(".overlay").style.display = "none";
    }
});