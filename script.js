function pogodiBroj() {
  /* Pomoću Math.random generiramo random broj između 0 i 1 (s decimalama, jer tako radi ta funkcija).
   * Pomnožili smo to sa 11 da bi smo dobili brojeve između 1 i 10.
   * Koristimo Math.floor da bi smo zaokruzili decimalu na donji integer (npr. 1.2 u 1). Iz tog razloga smo množili sa 11 a ne sa 10 da bi dobili brojeve od 1 do 10.
   * Taj random generirani broj spremamo u varijablu randomBroj */
  let randomBroj = Math.floor(Math.random() * 10 + 1);
  // U varijablu brojPokusaja ćemo spremati broj pokušaja pogađanja. Zapoćinjemo s 1 i nakon svakog pokušaja ćemo povećati broj za 1 (brojPokusaja++)
  let brojPokusaja = 1;
  // Varijabla u koju spremamo odgovor korisnika
  let pogadjanje;

  // do while loop koji će ponavljati sve što je u njoj, sve dok se uvjet ne ispuni
  do {
    pogadjanje = prompt("Pokušaj pogoditi broj između 1 i 10");
    //  Ako je pogadjanje veće od randomBroja, javljamo korisniku s alertom da mu treba manji broj i povećavamo broj pokusaja za 1
    if (pogadjanje > randomBroj) {
      alert("Krivo, broj koji tražiš je manji od ovoga");
      brojPokusaja++;
      //  Ako je pogadjanje manje od randomBroja, javljamo korisniku s alertom da mu treba veći broj i povećavamo broj pokusaja za 1
    } else if (pogadjanje < randomBroj) {
      alert("Krivo, broj koji tražiš je veći od ovoga");
      brojPokusaja++;
      // Pomoću isNaN funkcije provjeravamo je li korisnikov unos broj (ako je varijabla broj, dobit ćemo false i ovo će se preskočiti). U slučaju da je korisnik unesao nešto što nije broj, javljamo mu kroz alert da igra prihvaća samo brojke
    } else if (isNaN(pogadjanje)) {
      alert("ERROR! Igra prihvaća samo brojke.");
    }
    // uvjet za ponavljanje loopa -> loop se ponavlja sve dok varijable pogadjanje i randomBroj nisu jednake
  } while (pogadjanje != randomBroj);
  // Budući da smo izašli iz loopa to znači da je korisnik pogodio točan broj, te mu javljamo i broj pokušaja koristeći template literal backtickse da pomoću njih prikažemo trenutno stanje varijable "brojPokusaja"
  alert(`Bravo! Pogodio si točan broj u ${brojPokusaja} pokusaja`);
}
