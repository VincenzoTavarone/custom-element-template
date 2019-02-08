# CustomElementTemplate

Template per la creazione dei custom element in angular

## Inizializzazione del progetto

1. Si clona il progetto (o si scarica come zip)
2. Si rimuovono i riferimenti a git cancellando la cartella .git
3. Si installano le librerie richieste utilizzando npm

## Creazione del custom element

Si procede con la creazione di un componente
```
ng g c <nome_componente>
```
Nel file `<nome_componente>.component.ts` si modifica il decoratore `@Component` aggiungendo
```
encapsulation : ViewEncapsulation.Emulated
```
Nel file `app.module.ts` va importato il componente che si vuole rendere custom element e va modificato il modulo come indicato nei commenti presenti nel file.

Nel file `package.json` va modificato il nome del file di destinazione
```
return gulp.src([
        './dist/*/main.*.js',
    ]).pipe(concat('rename_me.js')) <-- da rinominare
    .pipe(gulp.dest('./dist-prod'))
```
## Build del custom element

Per effettuare la build va eseguito il comando `npm run build:element`. Il file risultante sarà presente nella cartella `dist-production`
