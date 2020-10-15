# Desafio de Android

Desafio para avaliação de habilidades.
Este projeto faz uma listagem de personagens da marvel e exibe informações detalhadas de cada um deles.


## Requisitos
### Git
Faça o download e instale o [git](https://git-scm.com/downloads) e verifique a versão:
```cmd
git --version
```
### NodeJS
Faça o download e instale o [NodeJS](https://nodejs.org/en/).
Para verificar a versão:

```cmd
npm -v
node -v
```
### Android SDK
Recomendo instalar o [android studio](https://developer.android.com/studio?hl=pt-br) para ter a versão do SDK manager com interface.
#### Windows
Adicionar "android_sdk_root" nas variáveis de ambiente com o caminho do android-sdk que está configurado no android studio
#### Linux
```cmd
$ set ANDROID_SDK_ROOT=E:\Android\sdk\
```
### Cordova
É o framework usado para gerar o APK e usar possíveis recursos nativos usando plugins.
```cmd
npm install -g cordova
```
## Instalação
Clone o repertório, e navegue até os arquivos:
```cmd
git clone https://github.com/linconrezende/desafio-marvel-heroes
cd desafio-marvel-heroes/cordova
```
Adicione a plataforma Android para inicializar o projeto e fazer o download das dependências.
```cmd
cordova platform add android
```
### Build no projeto Vue
Uma vez na raiz do projeto, navegue até a pasta vue, crie uma cópia do arquivo .env.sample para ".env" e coloque as informações da API da Marvel (será necessário fazer um cadastro de desenvolvedor):
[https://developer.marvel.com/](https://developer.marvel.com/)
Use o .env.sample como base.

Instale as dependencias
```cmd
cd vue
npm install
```
Build do projeto:
```cmd
cd vue
npm run build
```
Ou use o comando npm run serve para debugar em tempo real.
Uma vez compilado o projeto do Vue, ele irá mover os arquivos necessários para a pasta cordova/www

### Gerar APK
Para fazer o build do cordova, navegue até a pasta cordova.
```cmd
cd cordova
cordova build android --debug
```

## License
[MIT](https://choosealicense.com/licenses/mit/)