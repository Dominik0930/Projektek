$("#idoLista").hide();
$("#idoGomb").on({
    click: function(){
        $("#palyaLista").slideUp(500);
        $("#idoLista").slideToggle(500);
    }
});

$("#palyaLista").hide();
$("#palyaValaszto").click(function(){
    $("#idoLista").slideUp(500);
    $("#palyaLista").slideToggle(500);
});
    let idoGomb = document.getElementById("idoGomb");
    let palyaValaszto = document.getElementById("palyaValaszto");                                

    document.getElementById("idoLista").addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
    idoGomb.innerText = e.target.innerText;
    $("#idoLista").slideUp(500);
        }
    });


    document.getElementById("palyaLista").addEventListener("click",function(e){
        if(e.target.tagName == "LI"){
        palyaValaszto.innerText = e.target.innerText;
        $("#palyaLista").slideUp(500);
        }
    })


let oSzimbolum = document.getElementById("oSzimbolum");
let oSzin = document.getElementById("oSzin");
oSzin.addEventListener("input", () => {
    oSzimbolum.style.color = oSzin.value;
});

const oSzinTarolo = document.getElementById("oSzinTarolo");

oSzinTarolo.addEventListener('click', event => {
    oSzin.value = oSzinTarolo.style.backgroundColor;
    oSzin.click();
});

oSzin.addEventListener('input', () => {
    let ocolor = oSzin.value;
    oSzinTarolo.style.backgroundColor = ocolor;
});

let xSzimbolum = document.getElementById("xSzimbolum");
let xSzin = document.getElementById("xSzin");
xSzin.addEventListener("input", () => {
    xSzimbolum.style.color = xSzin.value;
   
});

const xSzinTarolo = document.getElementById("xSzinTarolo");

xSzinTarolo.addEventListener('click', event => {
    xSzin.value = xSzinTarolo.style.backgroundColor;
    xSzin.click();
});

xSzin.addEventListener('input', () => {
    let xcolor = xSzin.value;
    xSzinTarolo.style.backgroundColor = xcolor;
});
    let kezdoLabelX = document.getElementById("kezdoLabelX");
    let kezdoLabelO = document.getElementById("kezdoLabelO");
    let kezdX = document.getElementById("kezdX");
    let kezdO = document.getElementById("kezdO");


    if(window.innerHeight != 0){
         kezdX.checked = true;
    }
    
    kezdX.addEventListener("click", function(){
        if(kezdX.checked === true){ 
            kezdO.checked = false;
            kezdoLabelO.innerText = "";
            kezdoLabelX.innerText = "Kezd";
            
        }else{
            kezdO.checked = true;
            kezdoLabelO.innerText = "Kezd";
            kezdoLabelX.innerText = "";
        }
    }); 
    
    kezdO.addEventListener("click",function(){
        if(kezdO.checked === true){
            kezdoLabelO.innerText = "Kezd";
            kezdoLabelX.innerText = "";
            kezdX.checked = false;
            
        }else{
            kezdX.checked = true;
            kezdoLabelO.innerText = ""
            kezdoLabelX.innerText = "Kezd";
        }
    });
 //-----------------------------------Játékok---------------------------------------------

 
    document.getElementById("startGomb").addEventListener("click",function(){ 
        let xNev = document.getElementById("xNev").value;
        let oNev = document.getElementById("oNev").value;

        let jatekIdo = document.getElementById("idoGomb").innerText;
        let xSzinMent = document.getElementById("xSzimbolum").style.color;
        let oSzinMent = document.getElementById("oSzimbolum").style.color;
        let palyaMeret = palyaValaszto.innerText;

        let vegsoEllenorzes = false;
        let x = {nev: xNev, szimb: "X",szin: xSzinMent, kezd: kezdX.checked};
        let o = {nev: oNev, szimb: "O",szin: oSzinMent, kezd: kezdO.checked};

        //Név ellenőrzése
	   if(xNev != oNev){
            if(xNev === ""){
                window.alert("X játékosnak nincs neve!");
            }else{
                x.nev = xNev;
            }
            if(oNev === ""){
                window.alert("O játékosnak nincs neve!");
            }else{
                o.nev = oNev;
            }
        }else{
            window.alert("Kérlek adj meg két különböző nevet!");
        }
	
		

        //Játékidő Ellenőrzése
        if(jatekIdo === "Idő"){
            window.alert("Nem adtál meg játékidőt!");
        }else{
           let idoKijelzo = document.querySelectorAll(".idoKijelzo");
           
           idoKijelzo.forEach(idoKijelzo => { //kezdö értéket ad 
            idoKijelzo.innerText = jatekIdo;
           })
        }

        //Kezdő Játékos ellenőrzése 
        let jelenlegiJatekos;
        if(kezdX.checked === true && kezdO.checked === false){
            //Beállítjuk az eldöntendő kérdésre a választ
          jelenlegiJatekos = x.szimb;
        }else{
          jelenlegiJatekos = o.szimb;
        }

        
        //-----------Pálya Méret Ellenőrzés és Inicializálás-----------------------------------------------------
        switch(palyaMeret){
            case "Pálya":
                window.alert("Nem adtál meg pályát!");
                break;
        
            case "3x3":
                function Game3x3(){
                    palyaMeret = 9;
                    palya.style.gridTemplateColumns = "repeat(3,auto)";
                    for(let i = 0; i < palyaMeret; i++){
                        let div = document.createElement("div");
                        div.className = "cella";
                        let cellIndex = i;
                        div.setAttribute("cellIndex",cellIndex);
                        palya.appendChild(div);
                    }
                const cellak = document.querySelectorAll(".cella");
                const visszajelzes = document.querySelector("#visszajelzes");
                const ujraindit = document.querySelector("#ujraindit");
                let xIdo = document.getElementById("xIdo");
                let oIdo = document.getElementById("oIdo");
                let idoKijelzo = document.querySelectorAll(".idoKijelzo");
                let xEredmeny = document.getElementById("Xeredmeny");
                let oEredmeny = document.getElementById("Oeredmeny");
                let nyerteX = "0";
                let nyerteO = "0";
                let timerX;
                let timerO;
                let ures = Array(palyaMeret).fill(""); //letrehoz 9 ureset
                let fut = false; //ez az ertek jelzi azt hogy fut e a jatek kezdetben ezt false ra allitjuk majd a lenti fugg. kezeli
                const nyert = [
                [0,1,2],//sorok vizsgalata
                [3,4,5],
                [6,7,8],
                [0,3,6],//oszlopok vizsgalata
                [1,4,7],
                [2,5,8],
                [0,4,8], //atlokvizsgalata
                [2,4,6],
                ];
                 
                jatekIndit(); //meghivjuk a fugg.
                
                function idozitokTorol(){
                    clearInterval(timerX); //Torli az idöt és vissza adja az eredeti értéket;
                    clearInterval(timerO); 
                    idoKijelzo.forEach(idoKijelzo => {  //Vissza állítja az eredeti értéket
                        idoKijelzo.innerText = jatekIdo;
                    })
                }
                function jatekIndit(){
                    cellak.forEach(cella => cella.addEventListener("click", cellaUres))
                    document.getElementById("ujraindit").addEventListener("click", jatekUjraindit); //ha a gombra kattint elinditja a jatekUjraindit fugg.
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    fut = true; 
                    
                }
                
                function cellaUres(){
                    const cellIndex = this.getAttribute("cellIndex");
                    
                if(ures[cellIndex] != "" || !fut)//ha nem ures vagy nem fut akkor nem csinal semmit ellenkezo esetben frissit
                {
                    return;
                }
                
                cellaFrissit(this, cellIndex); //lefut a beiras
                kiNyert();
                }
                
                function cellaFrissit(cella, index){ //ha ures az index akkor beleirja a jelenlegi jatekos jelet
                    ures[index] = jelenlegiJatekos;
                    cella.textContent = jelenlegiJatekos;
                    cellak.forEach(cellak => {
                        if (cella.innerText == x.szimb){
                            cella.style.color = x.szin;
                        } else{
                            cella.style.color = o.szin;
                        }
                    })
                    
                }
                
                function valtoztatJatekos(){
                    jelenlegiJatekos = (jelenlegiJatekos == x.szimb) ? o.szimb : x.szimb; //megvizsgalja hogy a jatekos X e ha igen akkor O ra allitja default X
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    Ido();
                }
                function Ido(){
                    
                        if(jelenlegiJatekos === x.szimb){
                            
                            clearInterval(timerO)
                            let idoX = parseInt(xIdo.innerText);
                            timerX = setInterval(function(){
                                if(idoX != 0){
                                    idoX--;
                                    xIdo.innerText = idoX;
                                    
                                }else{
                                    nyerteO++;
                                    oEredmeny.innerText = nyerteO;
                                    visszajelzes.textContent = "O-nyert!Gratulálunk!";
									
                                    jatekUjraindit();
									window.alert("Lejárt az időd! 0-nyert!");
                                }
                            },1000)
                        }else{
                    
                            clearInterval(timerX);
                            let idoO = parseInt(oIdo.innerText);
                            timerO = setInterval(function(){
                                if(idoO != 0){
                                    idoO--;
                                    oIdo.innerText = idoO;
                                }else{
                                    nyerteX++;
                                    xEredmeny.innerText = nyerteX;
                                    visszajelzes.textContent= "X-nyert!Gratulálunk!";
                                    jatekUjraindit();
									window.alert("Lejárt az időd! X-nyert!");
                                        }
                                    },1000)
                                }
                            
                        }
                
                function kiNyert(){
                    let nyerteValaki = false;
                    
                    for(let i= 0; i< nyert.length; i++){ //vegigmegy a nyert konstanson 
                        const nyerte = nyert[i];
                        const cellaegy = ures[nyerte[0]];
                        const cellaketto = ures[nyerte[1]];
                        const cellaharom = ures[nyerte[2]];
                        
                        if(cellaegy == "" || cellaketto == "" || cellaharom == ""){ //vizsgálja hogy van e ures mezo
                            continue;
                        }
                        if(cellaegy == cellaketto && cellaketto == cellaharom ){ //vizsgalja hogy van e harom megegyezo elem ha igen akkor atallitja a nyertet igazra es kilep			
                            nyerteValaki = true;
                            break;
                        }	
                    }
                    
                    if(nyerteValaki){	
                                //ha nyertevalaki igaz kiirja a nyertest majd leallitjuk a jatekot
                        if(jelenlegiJatekos == x.szimb){
                            nyerteX++;
                            xEredmeny.innerText = nyerteX;
                        }
                        else if(jelenlegiJatekos == o.szimb){
                            nyerteO++;
                            oEredmeny.innerText = nyerteO;
                        }
                        jatekUjraindit();
                        visszajelzes.innerText = jelenlegiJatekos + "-nyert!Gratulálok!";
                        //fut = false;
                        
                                        
                    }
                    else if(!ures.includes("")){ //includes-al megvizsgáljuk hogy van e ures hely ha nincs akkor dontetlent ir ki
                        visszajelzes.textContent = `Dontetlen!`
                        
                        jatekUjraindit();
                       // fut = false;
                    }
                    else{
                        valtoztatJatekos(); //ha a fenti feltetelek nem teljesulnek akkor jatekost valtunk es folytatodik a jatek
                    }
                }
                
                function jatekUjraindit(){
                    //jelenlegiJatekos = "X"; //beallitja a kezdőjatekost
                    ures = Array(palyaMeret).fill(""); //letrehoz 9 ureset
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    cellak.forEach(cella => cella.textContent = ""); //reseteli a cellakat
                    idozitokTorol();
                    fut = true;	
                }
                 }
                 Game3x3();
                break;
            case "5x5":
                function Game5x5(){
                palyaMeret = 25;
                palya.style.gridTemplateColumns = "repeat(5,auto)";
                
                for(let i = 0; i < palyaMeret; i++){
                    let div = document.createElement("div");
                    div.className = "cella";
                    div.style.width = "60px";
                    div.style.height = "60px";
                    div.style.fontSize = "60px";
                    let cellIndex = i;
                    div.setAttribute("cellIndex",cellIndex);
                    palya.appendChild(div);
                }
                const cellak = document.querySelectorAll(".cella");
                const visszajelzes = document.querySelector("#visszajelzes");
                const ujraindit = document.querySelector("#ujraindit");
                const jatekMezo = document.getElementById("jatekMezo");
                let xIdo = document.getElementById("xIdo");
                let oIdo = document.getElementById("oIdo");
                let idoKijelzo = document.querySelectorAll(".idoKijelzo");
                let xEredmeny = document.getElementById("Xeredmeny");
                let oEredmeny = document.getElementById("Oeredmeny");
                let nyerteX = "0";
                let nyerteO = "0";
                let timerX;
                let timerO;
                let ures = Array(palyaMeret).fill(""); //letrehoz 25 ureset
                let fut = false; //ez az ertek jelzi azt hogy fut e a jatek kezdetben ezt false ra allitjuk majd a lenti fugg. kezeli
                const nyert = [
                    [0,1,2,3],[1,2,3,4],//sorok vizsgalata
                    [5,6,7,8],[6,7,8,9],
                    [10,11,12,13],[11,12,13,14],
                    [15,16,17,18],[16,17,18,19],
                    [20,21,22,23],[21,22,23,24],
                    [0,5,10,15],[5,10,15,20],//oszlopok
                    [1,6,11,16],[6,11,16,21],
                    [2,7,12,17],[7,12,17,22],
                    [3,8,13,18],[8,13,18,23],
                    [4,9,14,19],[9,14,19,24],
                    [0,6,12,18],[6,12,18,24],//foatlo
                    [5,11,17,23],
                    [1,7,13,19],
                    [20,16,12,8],[16,12,8,4],//foatlo
                    [21,17,13,9],
                    [15,11,7,3],
                ];
                
                jatekIndit(); //meghivjuk a fugg.
                
                function idozitokTorol(){
                    clearInterval(timerX); //Torli az idöt és vissza adja az eredeti értéket;
                    clearInterval(timerO); 
                    idoKijelzo.forEach(idoKijelzo => {  //Vissza állítja az eredeti értéket
                        idoKijelzo.innerText = jatekIdo;
                    })
                }
                function jatekIndit(){
                    cellak.forEach(cella => cella.addEventListener("click", cellaUres))
                    document.getElementById("ujraindit").addEventListener("click", jatekUjraindit); //ha a gombra kattint elinditja a jatekUjraindit fugg.
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    fut = true; 
                    
                }
                
                function cellaUres(){
                    const cellIndex = this.getAttribute("cellIndex");
                    
                if(ures[cellIndex] != "" || !fut)//ha nem ures vagy nem fut akkor nem csinal semmit ellenkezo esetben frissit
                {
                    return;
                }
                
                cellaFrissit(this, cellIndex); //lefut a beiras
                kiNyert();
                }
                
                function cellaFrissit(cella, index){ //ha ures az index akkor beleirja a jelenlegi jatekos jelet
                    ures[index] = jelenlegiJatekos;
                    cella.textContent = jelenlegiJatekos;
                    cellak.forEach(cellak => {
                        if (cella.innerText == x.szimb){
                            cella.style.color = x.szin;
                        } else{
                            cella.style.color = o.szin;
                        }
                    })
                }
                
                function valtoztatJatekos(){
                    jelenlegiJatekos = (jelenlegiJatekos == x.szimb) ? o.szimb : x.szimb; //megvizsgalja hogy a jatekos X e ha igen akkor O ra allitja default X
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    Ido();
                }
                function Ido(){
                    
                        if(jelenlegiJatekos === x.szimb){
                            
                            clearInterval(timerO)
                            let idoX = parseInt(xIdo.innerText);
                            timerX = setInterval(function(){
                                if(idoX != 0){
                                    idoX--;
                                    xIdo.innerText = idoX;
                                    
                                }else{
                                    nyerteO++;
                                    oEredmeny.innerText = nyerteO;
                                    visszajelzes.textContent = "O-nyert!Gratulálunk!";
                                    jatekUjraindit();
									window.alert("Lejárt az időd! 0-nyert!");
                                }
                            },1000)
                        }else{
                    
                            clearInterval(timerX);
                            let idoO = parseInt(oIdo.innerText);
                            timerO = setInterval(function(){
                                if(idoO != 0){
                                    idoO--;
                                    oIdo.innerText = idoO;
                                }else{
                                    nyerteX++;
                                    xEredmeny.innerText = nyerteX;
                                    visszajelzes.textContent= "X-nyert!Gratulálunk!";
                                    jatekUjraindit();
									window.alert("Lejárt az időd! X-nyert!");
                                        }
                                    },1000)
                                }
                            
                        }
                function kiNyert(){
                    let nyerteValaki = false;
	
                    for(let i= 0; i<nyert.length; i++){ //vegigmegy a nyert konstanson 
                        const nyerte = nyert[i];
                        const cellaegy = ures[nyerte[0]];
                        const cellaketto = ures[nyerte[1]];
                        const cellaharom = ures[nyerte[2]];
                        const cellanegy = ures[nyerte[3]];

                        
                        if(cellaegy == "" || cellaketto == "" || cellaharom == "" || cellanegy == ""){ //vizsgálja hogy van e ures mezo
                            continue;
                        }
                    if(cellaegy == cellaketto && cellaketto == cellaharom && cellaharom == cellanegy){ //vizsgalja hogy van e harom megegyezo elem ha igen akkor atallitja a nyertet igazra es kilep
                            nyerteValaki = true;
                            break;
                        }
                    }
                    if(nyerteValaki){	
                                //ha nyertevalaki igaz kiirja a nyertest majd leallitjuk a jatekot
                        if(jelenlegiJatekos == x.szimb){
                            nyerteX++;
                            xEredmeny.innerText = nyerteX;
                        }
                        else if(jelenlegiJatekos == o.szimb){
                            nyerteO++;
                            oEredmeny.innerText = nyerteO;
                        }
                        jatekUjraindit();
                        visszajelzes.innerText = jelenlegiJatekos + "-nyert!Gratulálok!";
                        //fut = false;
                        
                                        
                    }
                    else if(!ures.includes("")){ //includes-al megvizsgáljuk hogy van e ures hely ha nincs akkor dontetlent ir ki
                        visszajelzes.textContent = `Dontetlen!`
                        
                        jatekUjraindit();
                        //fut = false;
                    }
                    else{
                        valtoztatJatekos(); //ha a fenti feltetelek nem teljesulnek akkor jatekost valtunk es folytatodik a jatek
                    }
                }
                
                function jatekUjraindit(){
                    //jelenlegiJatekos = "X"; //beallitja a kezdőjatekost
                    ures = Array(palyaMeret).fill(""); //letrehoz 25 ureset
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    cellak.forEach(cella => cella.textContent = ""); //reseteli a cellakat
                    idozitokTorol();
                    fut = true;	
                }
                }
                Game5x5();
                break;
        
            case "10x10":
                function Game10x10(){
                palyaMeret = 100;
                palya.style.gridTemplateColumns = "repeat(10,auto)";
                for(let i = 0; i < palyaMeret; i++){
                    let div = document.createElement("div");
                    div.className = "cella";
                    div.style.width = "30px";
                    div.style.height = "30px";
                    div.style.fontSize = "30px";
                    let cellIndex = i;
                    div.setAttribute("cellIndex",cellIndex);
                    palya.appendChild(div);
                }           
                const cellak = document.querySelectorAll(".cella");
                const visszajelzes = document.querySelector("#visszajelzes");
                const ujraindit = document.querySelector("#ujraindit");
                const jatekMezo = document.getElementById("jatekMezo");
                let xIdo = document.getElementById("xIdo");
                let oIdo = document.getElementById("oIdo");
                let idoKijelzo = document.querySelectorAll(".idoKijelzo");
                let xEredmeny = document.getElementById("Xeredmeny");
                let oEredmeny = document.getElementById("Oeredmeny");
                let nyerteX = "0";
                let nyerteO = "0";
                let timerX;
                let timerO;
                let ures = Array(palyaMeret).fill(""); //letrehoz 100 ureset
                let fut = false; //ez az ertek jelzi azt hogy fut e a jatek kezdetben ezt false ra allitjuk majd a lenti fugg. kezeli
                const nyert = [
                    [0,1,2,3,4],[1,2,3,4,5],[2,3,4,5,6],[3,4,5,6,7],[4,5,6,7,8],[5,6,7,8,9],//sorok vizsgalata
                    [10,11,12,13,14],[11,12,13,14,15],[12,13,14,15,16],[13,14,15,16,17],[14,15,16,17,18],[15,16,17,18,19],
                    [20,21,22,23,24],[21,22,23,24,25],[22,23,24,25,26],[23,24,25,26,27],[24,25,26,27,28],[25,26,27,28,29],
                    [30,31,32,33,34],[31,32,33,34,35],[32,33,34,35,36],[33,34,35,36,37],[34,35,36,37,38],[35,36,37,38,39],
                    [40,41,42,43,44],[41,42,43,44,45],[42,43,44,45,46],[43,44,45,46,47],[44,45,46,47,48],[45,46,47,48,49],
                    [50,51,52,53,54],[51,52,53,54,55],[52,53,54,55,56],[53,54,55,56,57],[54,55,56,57,58],[55,56,57,58,59],
                    [60,61,62,63,64],[61,62,63,64,65],[62,63,64,65,66],[63,64,65,66,67],[64,65,66,67,68],[65,66,67,68,69],
                    [70,71,72,73,74],[71,72,73,74,75],[72,73,74,75,76],[73,74,75,76,77],[74,75,76,77,78],[75,76,77,78,79],
                    [80,81,82,83,84],[81,82,83,84,85],[82,83,84,85,86],[83,84,85,86,87],[84,85,86,87,88],[85,86,87,88,89],
                    [90,91,92,93,94],[91,92,93,94,95],[92,93,94,95,96],[93,94,95,96,97],[94,95,96,97,98],[95,96,97,98,99],
                    //OSZLOPOK
                    [0,10,20,30,40],[10,20,30,40,50],[20,30,40,50,60],[30,40,50,60,70],[40,50,60,70,80],[50,60,70,80,90],
                    [1,11,21,31,41],[11,21,31,41,51],[21,31,41,51,61],[31,41,51,61,71],[41,51,61,71,81],[51,61,71,81,91],
                    [2,12,22,32,42],[12,22,32,42,52],[22,32,42,52,62],[32,42,52,62,72],[42,52,62,72,82],[52,62,72,82,92],
                    [3,13,23,33,43],[13,23,33,43,53],[23,33,43,53,63],[33,43,53,63,73],[43,53,63,73,83],[53,63,73,83,93],
                    [4,14,24,34,44],[14,24,34,44,54],[24,34,44,54,64],[34,44,54,64,74],[44,54,64,74,84],[54,64,74,84,94],
                    [5,15,25,35,45],[15,25,35,45,55],[25,35,45,55,65],[35,45,55,65,75],[45,55,65,75,85],[55,65,75,85,95],
                    [6,16,26,36,46],[16,26,36,46,56],[26,36,46,56,66],[36,46,56,66,76],[46,56,66,76,86],[56,66,76,86,96],
                    [7,17,27,37,47],[17,27,37,47,57],[27,37,47,57,67],[37,47,57,67,77],[47,57,67,77,87],[57,67,77,87,97],
                    [8,18,28,38,48],[18,28,38,48,58],[28,38,48,58,68],[38,48,58,68,78],[48,58,68,78,88],[58,68,78,88,98],
                    [9,19,29,39,49],[19,29,39,49,59],[29,39,49,59,69],[39,49,59,69,79],[49,59,69,79,89],[59,69,79,89,99],
                                     
                    [0,11,22,33,44],[11,22,33,44,55],[22,33,44,55,66],[33,44,55,66,77],[44,55,66,77,88],[55,66,77,88,99],
                    [10,21,32,43,54],[21,32,43,54,65],[32,43,54,65,76],[43,54,65,76,87],[54,65,76,87,98],
                    [20,31,42,53,64],[31,42,53,64,75],[42,53,64,75,86],[53,64,75,86,97],
                    [30,41,52,63,74],[41,52,63,74,85],[52,63,74,85,96],
                    [40,51,62,73,84],[51,62,73,84,95],
                    [50,61,72,83,94],

                    [1,12,23,34,45],[12,23,34,45,56],[23,34,45,56,67],[34,45,56,67,78],[45,56,67,78,89],
                    [2,13,24,35,46],[13,24,35,46,57],[24,35,46,57,68],[35,46,57,68,79],
                    [3,14,25,36,47],[14,25,36,47,58],[25,36,47,58,69],
                    [4,15,26,37,48],[15,26,37,48,59],
                    [5,16,27,38,49],
                    
                    [90,81,72,63,54],[81,72,63,54,45],[72,63,54,45,36],[63,54,45,36,27],[54,45,36,27,18],[45,36,27,18,9],
                    [80,71,62,53,44],[71,62,53,44,35],[62,53,44,35,26],[53,44,35,26,17],[44,35,26,17,8],
                    [70,61,52,43,34],[61,52,43,34,25],[52,43,34,25,16],[43,34,25,16,7],
                    [60,51,42,33,24],[51,42,33,24,15],[42,33,24,15,6],
                    [50,41,32,23,14],[41,32,23,14,5],
                    [40,31,22,13,4],
                                       
                    [91,82,73,64,55],[82,73,64,55,46],[73,64,55,46,37],[64,55,46,37,28],[55,46,37,28,19],
                    [92,83,74,65,56],[83,74,65,56,47],[74,65,56,47,38],[65,56,47,38,29],
                    [93,84,75,66,57],[84,75,66,57,48],[75,66,57,48,39],
                    [94,85,76,67,58],[85,76,67,58,49],
                    [95,86,77,68,59],
                    ]
                
                jatekIndit(); //meghivjuk a fugg.
                
                function idozitokTorol(){
                    clearInterval(timerX); //Torli az idöt és vissza adja az eredeti értéket;
                    clearInterval(timerO); 
                    idoKijelzo.forEach(idoKijelzo => {  //Vissza állítja az eredeti értéket
                        idoKijelzo.innerText = jatekIdo;
                    })
                }
                function jatekIndit(){
                    cellak.forEach(cella => cella.addEventListener("click", cellaUres))
                    document.getElementById("ujraindit").addEventListener("click", jatekUjraindit); //ha a gombra kattint elinditja a jatekUjraindit fugg.
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    fut = true; 
                }
                
                function cellaUres(){
                    const cellIndex = this.getAttribute("cellIndex");
                    
                if(ures[cellIndex] != "" || !fut)//ha nem ures vagy nem fut akkor nem csinal semmit ellenkezo esetben frissit
                {
                    return;
                }
                
                cellaFrissit(this, cellIndex); //lefut a beiras
                kiNyert();
                }
                
                function cellaFrissit(cella, index){ //ha ures az index akkor beleirja a jelenlegi jatekos jelet
                    ures[index] = jelenlegiJatekos;
                    cella.innerText = jelenlegiJatekos; 
                    cellak.forEach(cellak => {
                        if (cella.innerText == x.szimb){
                            cella.style.color = x.szin;
                        } else{
                            cella.style.color = o.szin;
                        }
                    })
                    
                }
                
                function valtoztatJatekos(){
                    jelenlegiJatekos = (jelenlegiJatekos == x.szimb) ? o.szimb : x.szimb; //megvizsgalja hogy a jatekos X e ha igen akkor O ra allitja default X
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    Ido();
                }
                function Ido(){
                
                    if(jelenlegiJatekos === x.szimb){
                        
                        clearInterval(timerO)
                        let idoX = parseInt(xIdo.innerText);
                        timerX = setInterval(function(){
                            if(idoX != 0){
                                idoX--;
                                xIdo.innerText = idoX;
                                
                            }else{
                                nyerteO++;
                                oEredmeny.innerText = nyerteO;
                                visszajelzes.textContent = "O-nyert!Gratulálunk!";
                                jatekUjraindit();
								window.alert("Lejárt az időd! 0-nyert!");
                            }
                        },1000)
                    }else{
                
                        clearInterval(timerX);
                        let idoO = parseInt(oIdo.innerText);
                        timerO = setInterval(function(){
                            if(idoO != 0){
                                idoO--;
                                oIdo.innerText = idoO;
                            }else{
                                nyerteX++;
                                xEredmeny.innerText = nyerteX;
                                visszajelzes.textContent= "X-nyert!Gratulálunk!";
                                jatekUjraindit();
								window.alert("Lejárt az időd! X-nyert!");
                                    }
                                },1000)
                            }
                        
                    }
                function kiNyert(){
                    let nyerteValaki = false;
	
                    for(let i= 0; i<nyert.length; i++){ //vegigmegy a nyert konstanson 
                        const nyerte = nyert[i];
                        const cellaegy = ures[nyerte[0]];
                        const cellaketto = ures[nyerte[1]];
                        const cellaharom = ures[nyerte[2]];
                        const cellanegy = ures[nyerte[3]];
                        const cellaot = ures[nyerte[4]];

                        
                        if(cellaegy == "" || cellaketto == "" || cellaharom == "" || cellanegy == "" || cellaot == ""){ //vizsgálja hogy van e ures mezo
                            continue;
                        }
                    if(cellaegy == cellaketto && cellaketto == cellaharom && cellaharom == cellanegy){ //vizsgalja hogy van e harom megegyezo elem ha igen akkor atallitja a nyertet igazra es kilep
                            nyerteValaki = true;
                            break;
                        }
                    }
                    if(nyerteValaki){	
                                //ha nyertevalaki igaz kiirja a nyertest majd leallitjuk a jatekot
                        if(jelenlegiJatekos == x.szimb){
                            nyerteX++;
                            xEredmeny.innerText = nyerteX;
                        }
                        else if(jelenlegiJatekos == o.szimb){
                            nyerteO++;
                            oEredmeny.innerText = nyerteO;
                        }
                        jatekUjraindit();
                        
                        visszajelzes.innerText = jelenlegiJatekos + "-nyert!Gratulálok!";
                       // fut = false;
                        
                                        
                    }
                    else if(!ures.includes("")){ //includes-al megvizsgáljuk hogy van e ures hely ha nincs akkor dontetlent ir ki
                        visszajelzes.textContent = `Dontetlen!`
                        
                        jatekUjraindit();
                        //fut = false;
                    }
                    else{
                        valtoztatJatekos(); //ha a fenti feltetelek nem teljesulnek akkor jatekost valtunk es folytatodik a jatek
                    }
                }
                
                function jatekUjraindit(){
                    //jelenlegiJatekos = "X"; //beallitja a kezdőjatekost
                    ures = Array(palyaMeret).fill(""); //letrehoz 100 ureset
                    visszajelzes.textContent = `${jelenlegiJatekos} kovetkezik`;
                    cellak.forEach(cella => cella.textContent = ""); //reseteli a cellakat
                    idozitokTorol();
                    fut = true;	
                }
     
                }
                Game10x10();
                break;
             }

        //---------------------Végső Ellenőrzés---------------------------------------------------------
        if (xNev != oNev && oNev != "" && xNev != "" && jatekIdo !== "Idő" && palyaMeret !== "Pálya") {
            vegsoEllenorzes = true;
        }
        if(vegsoEllenorzes){
            let XszimbolumPalya = document.getElementById("XszimbolumPalya");
            XszimbolumPalya.style.color = x.szin;

            let OszimbolumPalya = document.getElementById("OszimbolumPalya")
            OszimbolumPalya.style.color = o.szin;

            document.getElementById("xNevPalya").innerText = x.nev;
            document.getElementById("oNevPalya").innerText = o.nev;

           let visszajelzes = document.getElementById("visszajelzes");
            if(jelenlegiJatekos){
                visszajelzes.innerText = `${jelenlegiJatekos} következik`;
            }

            $("#cim").hide();
            $("#kulsoKon").hide();
            $("#jatekTarolo").show();
        }
    });

//--------------------------Gomb Funkciók------------------------------------------------------------
    const start = document.getElementById("jatek");
    let cimSzoveg = document.getElementById("cimSzoveg");
    $("#kulsoKon").hide();
    $("#jatekTarolo").hide();

    start.addEventListener("click",function(){
        $("#kulsoKon").show();    //-----------Játékosok beállítása
        $("#menu").hide();
    }); 
    
    document.getElementById("visszaGomb").addEventListener("click", function(){
        $("#kulsoKon").hide();                      //-------------------Vissza a menübe
        $("#menu").show();
    });

    document.getElementById("visszaSzimbolum").addEventListener("click",function(){//----Töröl mindent azt elözp pályából
        $("#cim").show();   
        $("#jatekTarolo").hide();
        $("#kulsoKon").show();

        while(palya.firstChild){
        palya.removeChild(palya.firstChild);
      }
      palyaMeret = null;
      clearInterval(timerX);
      clearInterval(timerO);
      fut = false;

      let eredmeny = document.querySelectorAll(".eredmeny");
      eredmeny.forEach(eredmeny => {//--Törli az eredményt
        eredmeny.innerText = "";
      });
      idoKijelzo.forEach(idoKijelzo => { //--Törli az idő értékeket mind a két oldalon
        idoKijelzo.innerText = "";
       })
      
    });
    //------------------------------Hangok--------------------------------------------------------------
    const gombHang = new Audio();//--------Alkalmazuk a gombhangokat
    gombHang.src = "gombHang.mp3";

    const gombok = document.querySelectorAll(".gombok"); 
    for(let i = 0; i < gombok.length; i++){   
        gombok[i].onmousedown = function(){
            gombHang.play();
        }
    }