# Frontend keretrendszerek beadandó

## Horváth Adrienn

A beadandó alapját a Teams-en található alap képezte, az implementált változtatások a következők szerint alakultak

# App.jsx
* Egyszerű fetch segítségével beolvassa a db.json nevű fájl tartalmát
* Az így beolvasott adatokat átadja a Plants nevű konténernek

# Plants.jsx
* Feladata az összes növény tárolójának a kialakítása
* Amennyiben nem kap adatokat, tájékoztatja róla a felhasználót
* Ha kap adatokat (tehát sikeres volt az App.jsx-ben történő beolvasás) akkor meghívja a Plant konténer feltöltését

# Plant.jsx
* Különálló div-eket hoz létre minden növénynek, ami tartalmazza a címüket, a képet róluk, illetve a checkbox-ot, amivel grayscale-re lehet állítani a képeket
* A handlechange nevű metódus figyeli a checkbox-on történő változásokat, ami alapján a szürkeárnyalatos be és ki lehet kapcsolni

![image](https://user-images.githubusercontent.com/93373919/236671792-f6c41b52-08b1-4047-81a4-6f6fae391a20.png)
