<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Házi feladat 4</title>
</head>
<body>
<!--Készítsen egy osztály, amely zárt intervallumokat tud kezelni!
Tartalmazza az intervallum bal (kisebb) és jobb (nagyobb) végpontját (számok)!
Tartalmazzon egy "toString" metódust, amely visszaadja az intervallumot szöveges formában (pl: [10,20] )!
Az osztály konstruktora kérje paraméterként az intervallum két végpontját!
Készítsen egy metódust, amely eldönti, hogy a paraméterként megadott szám beleesik az intervallumba,
 vagy nem (igaz/hamisat adjon vissza)!
Példányosítsa az osztályt és írja ki az intervallumot a toString metódussal egy bekezdésbe!
Egy számról döntse el, hogy benne van-e az intervallumban!
Kezelje le azt a hibát, ha nem kap elég paramétert a konstruktor (kettő) és a tartalmazást vizsgáló függvény (egy), 
írjon ki ennek megfelelő hibaüzenetet! (Ekkor egy ArgumentCountError típusú beépített kivételt fog dobni)
A konstruktor figyeljen arra, hogy az első paraméter (bal végpont) nem lehet nagyobb, mint a második paraméter 
(jobb végpont)! Ellenkező esetben dobjon egy ennek megfelelő kivételt! Ehhez hozzon létre egy saját kivételosztályt!
A példányosításkor kezelje le ezt a hibát is!
Ha a példányosítás nem sikerült, akkor a hiba okát írja ki egy saját log fájlba! (Ha egy konstruktor egy kivételt
dob, akkor az objektum nem jön létre)-->
 <?php
     class Intervallum{
        public $bal;
        public $jobb;

        public function __construct($bal, $jobb){
            if($bal > $jobb){
                throw new balNagyobb();
            }
            $this->bal = $bal;
            $this->jobb = $jobb;
        }
        public function toString(){
            return "[$this->bal, $this->jobb]";
        }
        public function benneVan($szam){
            if($this->bal < $szam && $szam < $this->jobb){
                echo "<p>A(z) $szam benne van.";
                return true;
            }else{
                echo "<p>A(z) $szam nincs benne.";
                return false;
            }
        }
     }

    function hibaKezelo($hibaUzenet, $hibaTipus, $fajl, $sor){
        $hiba = "$hibaUzenet ($hibaTipus): $fajl ($sor)";
        error_log("Hibakezelés: $hiba\n",3,"error.log");// kiírja egy állományba
     }
     set_error_handler("hibaKezelo",E_ALL);// Beállítjuk, hogy az összes errora működjön

     class balNagyobb extends Exception{
        protected $message = "Az objektum nem jött létre, mert a bal végpont nagyobb,mint a jobb végpont!";
     }
    try{ 
        $inter =  new Intervallum(10, 20);
        echo "<p>A kiválasztott intervallum: ".$inter->toString()."</p>";
        $inter->benneVan(17);
     }catch(balNagyobb $e){   //Ha egy konstruktor egy kivételt is dob, akkor az objektum nem jön létre
        echo "<p>Hiba: {$e->getMessage()} {$e->getCode()} {$e->getFile()} {$e->getLine()}</p>";
     }catch(ArgumentCountError $e){
        echo "<p>Hiba: {$e->getMessage()} {$e->getCode()} {$e->getFile()} {$e->getLine()}</p>";
     }
    
 ?>
</body>
</html>
