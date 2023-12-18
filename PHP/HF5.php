<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Házi Feladat 5</title>
</head>
<body>
    <style>
        input[type="submit"]{
            cursor: pointer;
        }
    </style>
<!---Készítsen egy olyan osztályt, amely alkalmas egy felhasználó azonosítójának,
 jelszavának és teljes nevének tárolására! Az osztályban legyen olyan metódus, amely eldönti, 
 hogy a paraméterként megadott azonosító és jelszó megegyezik-e az objektumban tárolt adatokkal!
Készítsen egy tömböt felhasználók tárolására és adjon hozzá legalább 3 felhasználót a fenti 
osztály példányosításával!
Készítsen egy bejelentkező űrlapot! Tartalmazzon felhasználó nevet és jelszót!
Az űrlap az adatait ugyanerre az oldalra küldje el!
Az oldal a kapott bejelentkezési adatokkal döntse el a tömb alapján, hogy sikeres volt-e bejelentkezés, 
azaz az adott felhasználó benne van a tömbben! Sikeres esetén írja ki a felhasználó teljes nevével, hogy
például "Üdvözlöm Mekk Elek", sikertelen bejelentkezéskor hibaüzenetet írjon ki!-->
    <form method="post">
        <fieldset> 
            <legend>Bejelentkezés</legend>
            <label for="beId">Azonosító: </label>
            <input type="text" id="beId" name="beId">
            <label for="beJelszo">Jelszó: </label>
            <input type="text" id="beJelszo" name="beJelszo">
            <input type="submit" name="submit" value="Bejelentkezés">
        </fieldset>
    </form>
    <?php 
    class Felhasznalo{
        public $id;
        public $jelszo;
        public $telNev;

        public function __construct($id, $jelszo, $telNev){
                $this->id = $id;
                $this->jelszo = $jelszo;
                $this->telNev = $telNev;
        }

        public function teljesNev(){ //Lekérjük a bejelentkező felhasználó teljes nevét
            return $this->telNev;
        } 
        public function Szerepel($beId, $beJelszo){ //Megkeressük a felhasználót a adatbázisban
            return ($this->id == $beId && $this->jelszo == $beJelszo);
        }
    }
    
        $felhasznalok = array( //Felhasználók
            new Felhasznalo("Dominik","Dominik", "Albert Dominik"),
            new Felhasznalo("Goku", "Goku", "Son Goku"),
            new Felhasznalo("Morde", "Morde", "Morde Kaiser" )
        );

        class Sikertelen extends Exception{//Származtatott kivétel osztály 
            protected $message = "Sikertelen Bejelentkezés! A felhasználó nincs bent az adatbázisban!";
        }

    if(isset($_POST["submit"])){//Űrlap küldése
      $beId = $_POST["beId"];
      $beJelszo = $_POST["beJelszo"];  //Bejelentkezési paraméterek 
      $siker = false;
      $teljesNev = "";

      if($beId != "" || $beJelszo != ""){
        foreach($felhasznalok as $felhaszalo){
            if($felhaszalo->Szerepel($beId, $beJelszo)){
                $teljesNev = $felhaszalo->teljesNev();
                $siker = true; 
                break;
            }
        }
      }
      try{
        if(!$siker){
           throw new Sikertelen();//Ha nem talál egyezőt dob egy kivételt
        }else{
            echo "<p>Üdvözllöm $teljesNev !</p>";
        }
      }catch(Sikertelen $e){//Hiba lekezelése
        echo "<p>Hiba: {$e->getMessage()} Kód: {$e->getCode()} Fájl: {$e->getFile()} Sor: {$e->getLine()}</p>";
      }
    }

    ?>
</body>
</html>