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

console.log(formatDate());
