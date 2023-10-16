<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Házi Feladat 2</title>
</head>
<body>
<!----Készítsen egy osztályt input űrlap elemek létrehozásához! Kezelje az input elem 
id, name, value és label tulajdonságait! (A label az űrlapelemhez tartozó cimke, azaz label tag.)
Az osztály rendelkezzen olyan metódussal, amely legenerálja a megfelelő HTML kódot!
Származtasson az input osztályból további osztályokat egysoros szöveg, jelszó és gomb űrlapelemekhez, 
mindegyik tartalmazzon további az elemre jellemző 2-2 adatot!
Készítsen egy regisztrációs űrlapot az oldalra felhasználónév, jelszó kétszer, illetve egy 
submit gomb elemekkel! Használja az objektum adattagjait!--->
    <?php 
    class Inputok {//A submitnak nem kell label, valamint a label forja megegyezzik az input idval és névvel
        public $id;
        public $nev;
        public $value;
        public $cimke;

        public function __construct($id, $nev, $value, $cimke){
            $this->id = $id;
            $this->nev = $nev;
            $this->value = $value;
            $this->cimke = $cimke;
        }

        public function Generator(){
            return '<label for="'.$this->id.'">'.$this->cimke.'</label>' .
                   '<input type="text" id="'.$this->id.'" name="'.$this->nev.'" value="'.$this->value.'">';
        }
    }

    class Jelszo extends Inputok {
        private $radius;
        private $minlength;

        public function __construct($id, $nev, $value, $cimke, $radius, $minlength){
            parent::__construct($id, $nev, $value, $cimke);
            $this->radius = $radius;
            $this->minlength = $minlength;
        }

        public function Generator(){
            return '<label for="' . $this->id . '">' . $this->cimke . '</label>' .
                   '<input type="password" id="'.$this->id.'" name="'.$this->nev.'" value="'.$this->value.'" style="border-radius: '.$this->radius.'px;" minlength="'.$this->minlength.'">';
        }
    }

    class Felhasznalo extends Inputok{
        private $betuSzin;
        private $holder;
        
        public function __construct($id, $nev, $value, $cimke, $holder, $betuSzin){
            parent::__construct($id, $nev, $value, $cimke);
            $this->betuSzin = $betuSzin;
            $this->holder = $holder;
        }

        public function Generator() {
            return '<label for="' . $this->id . '">' . $this->cimke . '</label>' .
                   '<input type="text" id="'. $this->id.'" name="'.$this->nev.'" value="'.$this->value.'" placeholder="'.$this->holder.'" style="color:'.$this->betuSzin.';">';
        }
    }

    class Gomb extends Inputok{
        private $kurzor;         // Cimke ide nem fog kelleni, mert a gomboknak nincs cimkéje
        private $hatterSzin;
        
        public function __construct($id, $nev, $value, $kurzor, $hatterSzin){
            parent::__construct($id, $nev, $value, "");// Fatal error lenne,ha nem lenne a "", mivel 4-et vár
            $this->kurzor = $kurzor;
            $this->hatterSzin = $hatterSzin;
        }

        public function Generator(){
            return '<input type="submit" id="'.$this->id.'" name="'.$this->nev.'" value="'.$this->value.'" style="cursor:'.$this->kurzor.'; background-color:'.$this->hatterSzin.';">';
        }
    }
                    //Direkt nem írtam ide value-t mert akkor kitakarná a placeholdert
    $felhasznalo = new Felhasznalo('user', 'user', '', 'Felhasználónév:', 'Írd ide a felhasználóneved', 'blue');
    $jelszo = new Jelszo('Jelszó', 'Jelszó', 'Jelszó', 'Jelszó:', '50', '5'); //Példányosítás 
    $jelszoMegint = new Jelszo('Jelszó megint', 'Jelszó megint', 'Jelszó', 'Jelszó újra:', '50', '5');
    $gomb = new Gomb('submit', 'submit', 'Regisztráció', 'pointer', 'red');

    echo '<form>';
    echo $felhasznalo->Generator();
    echo $jelszo->Generator(); //meghívjuk az objektumokra a sajár generátor függvényüket
    echo $jelszoMegint->Generator();
    echo $gomb->Generator();
    echo '</form>';
?>
</body>
</html>