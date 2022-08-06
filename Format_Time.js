class FormatTime {

    static dateYear = () =>{
        return new Date().getFullYear() + " Ano";
    }
    static dateMonth = () => {
        return new Date().getMonth() + 1 + " Mês";
    }
    static dateDay = () => {
        return new Date().getDate() + " = Dia";
    }
    static dateHour = () => {
        return new Date().getHours() + " Horas";
    }
    static dateMinute = () => {
        return new Date().getMinutes() + " Min";
    }
    static dateSecond = () => {
        return new Date().getSeconds() + " Segundos";
    }
    static dateMilesecond = () => {
        return new Date().getMilliseconds() + " MileSegundo";
    }
  }

  console.log(FormatTime.dateYear()) // 2022
  console.log(FormatTime.dateMonth()) // 8 Month
  console.log(FormatTime.dateDay()) // 6 day
  console.log(FormatTime.dateHour()) // 9 hour
  console.log(FormatTime.dateMinute()) // 52 min
  console.log(FormatTime.dateSecond()) // 45 Second
  console.log(FormatTime.dateMilesecond()) // 445 Milesecond
