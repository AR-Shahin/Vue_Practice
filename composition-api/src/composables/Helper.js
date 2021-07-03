import * as moment from "moment/moment";
const Helper = ()=> {
  // Format time
  const formatTime = (e) => moment(e).format('MMMM Do YYYY, h:mm:ss a');

  const print = (e) => console.log(e)

  return {
    formatTime,print
  }
}

export default Helper
