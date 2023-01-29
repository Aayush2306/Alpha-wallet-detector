const freeKey = "EK-cgMkq-f79VYYW-u1JY5";
const freeKey2 = "EK-pfZvx-FosL1Um-w77mG";
const freeKey3= "EK-22krG-VXcvgYY-jyyuo"
const freeKey4= "EK-6wZSf-zBCHfyy-ESj99"
const freekey5= "EK-af3uZ-LcuHf73-d1WJu"
const freekey6="EK-8RsfJ-ckCnNW5-ddbmS"
const address = "0x2e311fAeb44d4781f932eEd293ED59Fd629D1ba5"
let addy = ""
let h1 = document.getElementById("heading")
let num = 0
let sum =0
let specialAlpha = 0
let gigaChad = 0
const searchAudio =  new Audio('./search.mp3');
const audio30 = new Audio("./30.mp3")
const audio50 = new Audio("./50.mp3")
const audio70 = new Audio("./70.mp3")
const insiderAudio = new Audio("./insider.mp3")
let percentage = "";
let reaLP =""


async function getapi(url) {
    
    const response = await fetch(url);

    var data = await response.json();

    const maal = data.holders;

    //console.log(maal)
   let asliMaal = maal.map(obj => obj.address) 
    const aasliMaal = asliMaal.shift()
    //console.log(asliMaal)
  asliMaal.forEach((obj,i) => {
    

    async function getTx(freeKey) {

      const url = `https://api.ethplorer.io/getAddressInfo/${obj}?apiKey=${freeKey}&showETHTotals=false`

            const res = await fetch(url)
 
            var data = await res.json();
            totalTx = data.countTxs
            if(totalTx>1 && totalTx< 10) {
               sum = sum+ 1 
               addy= `https://etherscan.io/address/${data.address}`
               console.log(addy)
            }
             if (totalTx>1 && totalTx<6) {
              specialAlpha = specialAlpha + 1
              addy= `https://etherscan.io/address/${data.address}`
              console.log(addy,"Alpha")
             } 
             if(totalTx>1 && totalTx < 4) {
              gigaChad = gigaChad +1
              addy= `https://etherscan.io/address/${data.address}`
              console.log(addy,"Chad")
             }
  
           
           h1.innerHTML = `New Wallet = ${sum} Out of ${asliMaal.length} there are ${specialAlpha} Special wallets and ${gigaChad}chad  wallets`
           percentage = (sum/asliMaal.length)*100
           return percentage


    
    }
    if(i<9) {
        getTx(freeKey)
    }

     if(i>=10&& i<20) {
         getTx(freeKey2)
         
     }
     
      if(i>=20 && i<30) {
        getTx(freeKey3)
      }

      if(i>=30 && i<40) {
         getTx(freeKey4)
      }

      if(i>=40 && i<50) {
        getTx(freekey5);
      }

      if(i>=50 && i<58) {
        getTx(freekey6)
      }

      if(i == asliMaal.length-1) {
        getTx(freekey6).then((res)=> {
           if(res < 30) {
            audio30.play()
           }
           if(res > 30 && res < 50) {
            audio50.play()
           } 

           if(res > 50 && res < 70) {
            audio70.play()
           } 

           if(res>70) {
            insiderAudio.play()
           }

         })
      }
  })
}

//getapi(apiUrl)


const grab = document.getElementById("ca")
const btn = document.getElementsByClassName("btn")


btn[0].addEventListener("click", ()=> {
  let ca = grab.value
  const apiUrl = `https://api.ethplorer.io/getTopTokenHolders/${ca}?apiKey=${freeKey}&limit=60`;
  //console.log(apiUrl)
  getapi(apiUrl);
  searchAudio.play()

});
