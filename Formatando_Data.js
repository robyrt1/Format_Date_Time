const formatDate = () => {
  let date = new Date();
  return date.toLocaleDateString("pt-BR", { dateStyle: "long" });
}; 

/**
 *  Em dateStyle pode passar : "full" , "long" e "short" 
 *  dependendo do tipo de formatação que precisar.
 * 
 *    output do short : 06/08/2022
 *    output do full : sábado, 6 de agosto de 2022
 *    output do long : 6 de agosto de 2022
 */





 const formatTime = () => {
  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const millisecond = date.getMilliseconds();
return "Ano: "+ year + "-" + " Mês: " + month + " -" + " Dia: " + day + " -" + " Hora: " + hour + "-" + " Min: " + minute + " -" + " Segundos: " + second + "-" + " Milesegundos: " + millisecond;
};

console.log(formatDate());

//console.log(`haha: ${formatTime()}`)