# Angular-P06-Testes-01

Aplicação para estudo de Angular.

Projeto desenvolvido ao longo de curso realizado, com a motivação de práticar o desenvolvimento de testes em projetos Angular.

## 01. Ferramental de testes do Angular

Visto sobre o Jasmine, framework de testes usado por padrão pelo Angular para a criação de testes.
Visto sobre o Karma, framework utilizado pelo Angular para executar os testes criados através do Jasmine.
Abordado sobre a estrutura mínima para declaração de testes. Tudo começa com uma chamada à função _describe_ que recebe o nome do elemento que será testado, seja ele um componente ou um serviço, e recebe uma _arrow function_ com toda a estrutura de execução de testes para aquele elemento. O elemento principal dentro da estrutura de execução de testes é a função _it_, representando uma unidade de teste, que recebe uma descrição do que é esperado para aquela unidade e uma _arrow function_ condendo a execução da unidade de teste. Comentado sobre o _template_ convencional de descrição do que é esperado pela unidade de teste, o '... should ... when ...'.
Como testar as expectativas de retornos de execuções através do _expect_.
Comentado também sobre alguns pontos de atenção com relação a melhor utilização de nomes de artefatos e funções na descrição do que será testado, para garantir a integridade dos nomes devido a possíveis refatorações.  

## 02. Lapidando nossos testes

Comentado sobre a importância de testes precisos, legíveis e fáceis de manter e como eles ajudam na refatoração do código.
A utilização da função beforeEach para preparar o cenário de teste antes da execução de cada unidade.
Testando o lançamento de exceções através de _expect > toThrow_.
Contextualizando o cenário de teste através de _expect > withContext_, podendo informar valores utilizados na execução por exemplo.
Comentado sobre as diferenças entre as funções _toBe_, _ToBeTrue_ e _ToBeTruthy_ quando utilizados para comparar valores booleanos literais ou não literais.
