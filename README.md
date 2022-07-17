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

## 03. O componente LikeWidget

Criação de um componente composto por um botão de curtida e uma contagem de curtidas.
Implementada a acessibilidade desse componente fazendo o ícone de curtida ser selecionável através do _tabindex="0"_ e lido como um botão através de _role="button"_. O atributo _aria-describedby_ conecta o botão de curtir com o texto de quantidade de curtidas através do _id_, para que o leitor de tela leia o conteúdo de _aria-label_ quando o foco estiver no botão de curtir. O atributo _aria-live_ indica ao leitor de tela para reler o conteúdo daquele elemento sempre que houver alterações. O atributo _aria-atomic_ indica se deve ser relido todo o conteúdo relacionado, ou só o que for indicado como relevante.

## 04. Testando componentes

Visto a utilidade da _API TestBed_ para configuração do ambiente necessário para os teste unitários de componentes e serviços. Ela funciona como um módulo, importando, declarando e provendo componentes, serviços e outros módulos que serão usados nos testes que serão executados. Ela é responsável por gerenciar a criação de instâncias e injeções de dependência.
Comentado sobre as abordagens _Test first_ e _Test later_, e como trabalhar com _TestBed_ em cada uma. Visto que em abordagem _Test first_ é interessante declarar explicitamente os componente e serviços utilizados em _TestBed_. E que em abordagem _Test later_ é interessante importar direto o módulo relacionado ao que será testado para não se preocupar com dependências.
Visto sobre _ComponentFixture_, tipo de instância retornada pela _TestBed_ ao solicitar a criação de um componente, ao invés de ser retornada uma instância direta. Funciona como uma espécie de envelope em cima da instância criada do componente, com a função de prover maneiras de controlar o ciclo de vida daquele componente, para auxiliar em _debugging_ e testes.
Sobre testes envolvendo propriedades _@Input_, importante se atentar com o ciclo de vida do componente, e aí sim entra a instância de _ComponentFixture_ em jogo. Pra garantir que a unidade de teste rode o método _ngOnInit_, após a atribuição de um valor à uma proriedade _@Input_, é necessário chamar o método _ComponentFixture.detectChanges_. Mesmo que o arquivo de testes gerado automaticamente pelo _Angular CLI_ já venha com uma chamada à esse método, logo após a atribuição da instância do componente à uma propriedade geral dos testes unitários, é interessante a remoção da chamada à _ComponentFixture.detectChanges_ de métodos _beforeEach_, para ter melhor controle do ciclo de vida da instância do componente dentro de cada método _it_ (unidade de teste).
Sobre testes envolvendo propriedades _@Output_, existem duas abordagens, uma é utilizando _Async Assertions_ e outra utilizando _Spy_. Em _Async Assertions_ é trabalhado com uma função recebida como parâmetro ao método de execução da unidade de teste. Esse método, comumente nomeado como _done_ deve ser chamado aonde convier considerar o teste como concluído, no caso de uma propriedade _@Output_, em uma subscrição à ela, onde podemos fazer asserções em relação ao seu retorno e executar a função _done_ em seguida para dizer que naquele ponto da pra considerar a conclusão do teste. Já com _Spy_, utiliza a função _spyOn_ para espionar a execução do método alvo, nos permitindo identificar através de _expect > toHaveBeenCalled_ se houve a execução de tal método.

## 05. Turbinando o ambiente de testes

Abordado sobre algumas configurações interessantes a respeito do arquivo de configuração do _Karma_ e do comando _ng test_.
Primeiro sobre teste em múltiplos navegadores. Pra isso é importante ter o navegador instalado na máquina local, baixar como dependência de desenvolvimento o pacote que o karma utiliza para executar o navegador alvo (_'karma\_\<navegador-alvo>\_launcher'_), adicionar no arquivo de configuração do _Karma_ o executor nos plugins requeridos e adicionar o nome do navegador a lista de _browsers_ à serem testados por padrão.
Mas não é conveniente testar todos os navegadores sempre que os testes forem executados durante o desenvolvimento. Então é recomendado deixar apenas um navegador principal na lista de _browsers_ do arquivo de _karma.conf.js_ e criar um _script_ customizado no arquivo _package.json_, para a execução de teste em todos os navegadores. Nesse _script_ será passado o parâmetro _-\-browsers_ seguido da lista de navegadores. _Scripts_ customizados podem ser executados através do comando _'npm \<nome-do-script>'_. 
Para execução de testes em ambientes de integração continua foi comentado sobre a opção de execução _Headless_ suportada por alguns navegadores e o parâmetro _-\-watch=false_ para não travar o terminal ao final da execução. Executar navegadores em estado _Headless_ significa executá-los sem interface gráfica.
Visto como configurar executores de navegador customizados, informando o navegador utilizado como base e as flags e parâmetros informados na execução.
Para ambientes de integração continua é interessante emitir um relatório de execução dos teste em um formato _xml_ específico. Para a emissão desse relatório foi importado o pacote _'karma-junit-reporter', adicionado a lista de _plugins_ do arquivo _karma.conf.js_ e criado um _script_ de execução informado o parâmetro _-\-reports junit_.
Para ter uma visibilidade da cobertura dos testes da aplicação foi criado um _script_ de execução informando os parâmetros _-\-source-map=true_ e _-\-code-coverage=true_. Executando esse _script_ temos na saída um resumo dos percentuais de cobertura dos testes. Também é gerada uma pasta _coverage_ na raiz do projeto onde é possível encontrar um relatório completo da cobertura dos testes em _html_.
