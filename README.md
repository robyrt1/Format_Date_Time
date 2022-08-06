# Format_Date_Time

## Descrição
Você e eu sabemos bem que utilizar date e time faz parte do dia a dia de pessoas que desenvolvem programas. Não tem para onde correr, pois elas são necessárias para diferentes tipos de conteúdos e são apresentadas em formatos variados.

## Objetivo
Pensando nisso venho publicar no github como você pode formatar uma Data ou pegar um conteúdo de "Date" específico como (Ano , Mês , Dia, Hora, Min, Seg) utilizando os metodos do JavaScript.

### Date Input: Format
Primeira coisa que precisamos saber que todas as datas processadas pelo JavaScript são completas , ou seja , se criamos uma variável do tipo Date sem parâmetro adicional, o resultado será a data atual do navegador com as informações compleas : data, hora e time.

exemplo : <br>
<img src="https://user-images.githubusercontent.com/85000849/183253701-1bf25aaa-080d-4a25-9d35-baf6c38a5876.png"><br>

Então vamos utilizar o metodo toLocaleDateString, para formatar essa data.
<br>
<img src= "https://user-images.githubusercontent.com/85000849/183254162-60320ed3-46e3-4aec-ab29-da0504d36403.png"> <br>

### Time
Para pegar as informações separadas utilizamos os metodos :
 - getFullYear()
 - getMonth()
 - getDate()
 - getHours()
 - getMinutes()
 - getSeconds()
 - getMilliseconds()

#### Link_Doc
MDN - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date


