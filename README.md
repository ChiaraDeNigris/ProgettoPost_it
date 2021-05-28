# Progetto App Post-it per il corso di sviluppo di servizi web

L’ app è composta da un component parent (app), da tre component child (login, nuovopost e visualizzazione) e un service che restituisce chiavi alfanumeriche.
Il component parent app contiene al suo interno:

- la definizione della classe (Post) che viene associata all’oggetto 
- la definizione della funzione per eliminare un post-it
- la definizione della funzione per creare un nuovo post-it
- la definizione della funzione per visualizzare (mediante un filtro) solo i post-it importanti 
- la definizione della funzione per mostrare tutti i post-it 
- la definizione della funzione che prende la chiave inserita in input e mostra tutti i post it ad essa associati
- la definizione della funzione che restituisce una nuova chiave per un nuovo utente, chiamando la funzione Key nel servizio.

Le funzioni vengono richiamate nell’ html del component parent. 

Il component child “Login” gestisce la registrazione e l’accesso dell’utente nell’app. A seconda che si clicchi sul tasto registrati o su quello accedi, vengono emessi due eventi: uno per restituire una nuova chiave all’utente che desidera registrarsi e uno per prendere la chiave inserita dall’utente nella input box in html. 

Il component child “Nuovopost” è responsabile della creazione di un nuovo post, composto da titolo e testo e classificato o meno come importante. Cliccando sul pulsante “ok”, viene creato un nuovo oggetto che sarà poi associato alla classe Post e memorizzato nell’array contenente tutti i post-it dell’utente.

Il component child “Visualizzazione” gestisce la visualizzazione del testo dei post-it cliccando sul loro titolo. 

Il servizio permette di ottenere delle chiavi alfanumeriche che danno modo all’utente di memorizzare tutti i suoi post-it e accedervi quando vuole mediante la sua chiave. All’interno del servizio sono definite tre funzioni: 
- una per ottenere i post-it associati ad una chiave mediante il metodo get, 
- una per eseguire un upload dei nuovi post-it e associarli alla chiave mediante il metodo post,
- una per ottenere una nuova chiave per un nuovo utente mediante il metodo post.

Il servizio si basa sull’utilizzo del metodo fetch().



[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/progettinossw)
