const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi)=>{
  try{
    const emosiArray= (await promiseTheaterIXX()).concat((await promiseTheaterVGC()))
    let result = 0;
    emosiArray.filter(x => x.hasil === emosi && (result += 1) )
    return result
  }catch(err) {
    console.log(err)
  }
}


module.exports = {
  promiseOutput,
};
