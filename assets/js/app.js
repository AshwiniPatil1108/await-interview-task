const cl = console.log;

const sweetAlert = (msg, iconStr)=>{
    Swal.fire({
        title:msg,
        timer:2500,
        icon:iconStr
    })
}


const hr =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is selected for first tech interview")
            }else{
                reject('Looking for new candidate')
            }
        },1500)
    })
}

const firstTech =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is selected for second tech interview")
            }else{
                reject('Candidate is very bad in basic')
            }
        },1000)
    })
}


const secondTech =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is selected for third tech interview")
            }else{
                reject('Candidate is not able to write code')
            }
        },800)
    })
}

const thirdtTech =()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false:true;
            if(!err){
                resolve("Candidate is selected for given profile")
            }else{
                reject('Candidate is not selected')
            }
        },500)
    })
}

const init =async()=>{
    try{
        let res = await hr();
        cl(res)
        let res1 = await firstTech();
        cl(res1)
        let res2= await secondTech();
        cl(res2)
        let res3 = await thirdtTech();
        cl(res3)
        sweetAlert(res3, "success")
    }catch(err){
        sweetAlert(err, "error")
    }
}

init()