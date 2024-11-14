ESERCIZIO: FizzBuzz
===

## Consegna:

Scrivere un programma che stampi i numeri da 1 a 100.
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?


## Svolgimento:

1. Identifico una singola variabile (let) chiamata "numeroStampato" senza però definirla.
1. Creerò un ciclo "for" con varabile iniziale "i=1", con condizione "i<=100".
1. All'interno di questo ciclo andrò a creare una serie di condizioni (if) per cui l'output di "numeroStampato" cambi in relazione alle specifiche condizioni date nella consegna.
1. Comincerò a scrivere le mie condizioni specificando come prima l'essere divisibile per 3 e 5 poi a seguire la divisibilità per 3 ed in ultimo per 5. Questa sintassi è necessaria affinchè l'esito della divisibilità per 3 e 5 verrebbe altrimenti sovrascritto dalla prima condizione valida all'interno dell'if.
1. Se nessuna delle condizioni date risulterà vera allora la variabile "numeroStampato" sarà uguale alla variabile "i".