# Como rodar

pnpm start

# Como subir nova versão

**Criar pacote para Google Play** 

`eas build --platform android --profile production`

**Testar build para android**

`npx expo prebuild --clean && npx expo run:android`