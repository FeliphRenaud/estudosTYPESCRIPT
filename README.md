Olá!

Se você está aqui, é porque encontrou meu arquivo direcionado à introdução aos estudos de TypeScript.

Este arquivo servirá como guia para a execução dos pequenos projetos acima e como um guia para mim e para outros que venham a encontrar e querer compartilhar ensinamentos.

Toda vez que produzimos algo em TypeScript, precisamos compilar para JavaScript para que os navegadores entendam o que estamos produzindo.

Primeiro Passo
Você deve criar a pasta do seu projeto TypeScript.

A organização e a distribuição dos arquivos no projeto devem seguir as suas boas práticas.

Configuração Inicial
No console da sua IDE, você deve digitar:

tsc --init
Você perceberá que um arquivo foi criado:
tsconfig.json

Dentro desse arquivo, há opções que podem ser habilitadas ou desabilitadas quando você rodar o compilador. Essas opções são separadas por seções:

Modules:
Você deve descomentar a seção:
rootDir: './src'.

Emit:
Você deve descomentar:

outDir: './dist'
"noEmitOnError": true
(Isto impede que o compilador aceite caso tenha um erro de digitação).

Type Checking:
Descomentar:

"noImplicitAny": true
(Impede que o compilador aceite type-any)
"noUnusedLocals":true
(Alerta para partes do codigo declaradas dentro de funções, mas que nunca são utilizadas )
"noUnusedParameters":true
"noImplicitRetunrs":true
