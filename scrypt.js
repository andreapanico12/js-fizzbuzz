// ===============CONSEGNA=================
// Scrivere un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// ================SVOLGIMENTO=============

// 1. Identifico una singola variabile (let) chiamata "numeroStampato" senza però definirla.
// 2. Creerò un ciclo "for" con varabile iniziale "i=1", con condizione "i<=100".
// 3. All'interno di questo ciclo andrò a creare una serie di condizioni (if) per cui l'output di "numeroStampato" cambi in relazione alle specifiche condizioni date nella consegna.
// 4. Comincerò a scrivere le mie condizioni specificando come prima l'essere divisibile per 3 e 5 poi a seguire la divisibilità per 3 ed in ultimo per 5. Questa sintassi è necessaria affinchè l'esito della divisibilità per 3 e 5 verrebbe altrimenti sovrascritto dalla prima condizione valida all'interno dell'if.
// 5. Se nessuna delle condizioni date risulterà vera allora la variabile "numeroStampato" sarà uguale alla variabile "i".

// ==============CODICE ESERCIZIO============

// Dati

let numeroStampato;

// Logica

for (let i = 1; i <= 100; i++){

  if ( i % 3 === 0 && i % 5 === 0)
    numeroStampato = `FizzBuzz`;
  else if ( i % 3 === 0 )
    numeroStampato = `Fizz`;
  else if ( i % 5 === 0)
    numeroStampato = `Buzz`;
  else
  numeroStampato = i;

  console.log(numeroStampato);
}
