# e-Nic - Documentação

#### Requisitos obrigatórios

- [**Yarn**](https://classic.yarnpkg.com/en/docs) na versão **1.22.21**
- [**Node**](https://nodejs.org/en) na versão **20.10.0**

## Instalando as ferramentas

#### 1. Instale a última versão do NVM

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

#### 2. Instale o Node e Yarn

```sh
nvm i 20.10.0 && npm i -g yarn@1.22.21
```

## Guia de instalação de dependências e pacotes

#### Instalação de dependências comuns

```sh
yarn add [pacote]
```

> **💡 Dica**: para instalar dependências apenas para desenvolvimento, utilize a flag **`--dev`** ou simplesmente a forma reduzida **`-D`**

#### Instalação de dependências exclusivas do Expo

```sh
npx expo install [pacote]
```

## Inicializando o modo de desenvolvimento

#### 1. Instale as dependências da aplicação

```sh
yarn install
```

#### 2. Execute a prévia da aplicação com Expo

```sh
npx expo
```
