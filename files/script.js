let $ = document
let body = document.body
// <bg list -->
let set = $.getElementById('settings')
let setbtn = $.getElementById('set-btn')
let closeset = $.getElementById('close')
let bgsec = $.getElementById('bg-sec')
let bgbtn = $.getElementById('bgbtn')
let setlist = $.getElementById('set-list')
let st = $.getElementById('settitle')
let abtn = $.getElementById('about-btn')
let about = $.getElementById('about')
let appi = $.getElementById('appinfo')
let apb = $.getElementById('appbtn')


let Open = () => {
    set.style = 'height: 390px;'
}


let Close = () => {
    set.style = 'height: 0;'
    bgsec.style = 'display: none;'
    setlist.style = 'display: block; transition-delay: 300ms;'
    st.innerHTML = 'تنظیمات'
    about.style = 'display: none;'
    appi.style = 'display: none;'
    dailyb.style = 'display: none;'
}


let Bgs = () => {
    bgsec.style = 'display: block;'
    setlist.style = 'display: none;'
    st.innerHTML = 'تغییر والپیپر'
    set.style = 'height: 590px;'
}


let About = () => {
    about.style = 'display: block;'
    setlist.style = 'display: none;'
    st.innerHTML = 'راهنما'
    set.style = 'height: 590px;'
}

let Appi = () => {
    appi.style = 'display: block;'
    setlist.style = 'display: none;'
    st.innerHTML = 'درباره برنامه'
}



setbtn.addEventListener('click' ,Open)
closeset.addEventListener('click' ,Close)
bgbtn.addEventListener('click' ,Bgs)
abtn.addEventListener('click' ,About)
apb.addEventListener('click' ,Appi)
// bg list >

// <bg set -->
let bg1 = $.getElementById('bg-1')
let bg2 = $.getElementById('bg-2')
let bg3 = $.getElementById('bg-3')
let bg4 = $.getElementById('bg-4')
let bg5 = $.getElementById('bg-5')
let bg6 = $.getElementById('bg-6')
let bg7 = $.getElementById('bg-7')
let bg8 = $.getElementById('bg-8')
let bg9 = $.getElementById('bg-9')
let bg10 = $.getElementById('bg-10')
let bg11 = $.getElementById('bg-11')
let bg12 = $.getElementById('bg-12')
let B1 = () => {body.style.backgroundImage = 'url("./wallpaper/alena-aenami-rooflinesgirl-1k-2.jpg")';}
let B2 = () => {body.style.backgroundImage = 'url("./wallpaper/astronut.png")';}
let B3 = () => {body.style.backgroundImage = 'url("./wallpaper/cyberppunk-wall-footer.jpg")';}
let B4 = () => {body.style.backgroundImage = 'url("./wallpaper/cyberpunk2077.png")';}
let B5 = () => {body.style.backgroundImage = 'url("./wallpaper/rdr2-2.jpg")';}
let B6 = () => {body.style.backgroundImage = 'url("./wallpaper/edgerunners.webp")';}
let B7 = () => {body.style.backgroundImage = 'url("./wallpaper/rdr2.jpg")';}
let B8 = () => {body.style.backgroundImage = 'url("./wallpaper/ghost1.jpg")';}
let B9 = () => {body.style.backgroundImage = 'url("./wallpaper/ghost2.jpg")';}
let B10 = () => {body.style.backgroundImage = 'url("./wallpaper/cyberpunk-2077-phantom-liberty-bundle-bx.jpg")';}
let B11 = () => {body.style.backgroundImage = 'url("./wallpaper/samurai-cyberpunk-2077-u6.jpg")';}
let B12 = () => {body.style.backgroundImage = 'url("./wallpaper/cyberpunk-2077-samurai.jpg")';}
bg1.addEventListener('click' ,B1)
bg2.addEventListener('click' ,B2)
bg3.addEventListener('click' ,B3)
bg4.addEventListener('click' ,B4)
bg5.addEventListener('click' ,B5)
bg6.addEventListener('click' ,B6)
bg7.addEventListener('click' ,B7)
bg8.addEventListener('click' ,B8)
bg9.addEventListener('click' ,B9)
bg10.addEventListener('click' ,B10)
bg11.addEventListener('click' ,B11)
bg12.addEventListener('click' ,B12)
// --bg set>

// time calc -->

// row1 -->
let r1c = $.getElementById('r1c')
let r1d = $.getElementById('r1d')
let r1ms = $.getElementById('r1ms')
let r1hs = $.getElementById('r1hs')
let r1me = $.getElementById('r1me')
let r1he = $.getElementById('r1he')
let r1p = $.getElementById('r1p')
let cb1 = $.getElementById('calc-btn')
let pb1 = $.getElementById('final')
let b1 = $.getElementById('b1')
let tt1 = $.getElementById('tt1')


var d1 = 0
var c1 = 0
var h1 = 0 


let T1 = () => {
    h1 = ((r1he.value * 60) - (r1hs.value * 60)) + (r1me.value - r1ms.value)
    console.log(h1)
}

let Cons1 = () => {
    if (r1c.value === 'ps4') {
        c1 = 670
    } else { 
        c1 = 840   
    }
}

let Ds1 = () => {
    if (r1d.value === 'con2') {
        d1 = 167
    } else if (r1d.value === 'con3') {
        d1 = 334
    } else if (r1d.value === 'con4') {
        d1 = 501
    } else {
        d1 = 0
    }
}


let TotT1 = () => {
    tt1.innerHTML = ((r1he.value * 60) - (r1hs.value * 60)) + (r1me.value - r1ms.value) + ' دقیقه'
}


let Show1 = () => {
    Ds1()
    Cons1()
    T1()
    TotT1()
    pb1.innerHTML = ((c1 + d1) * h1) + Number(b1.value) +'تومان'
    if (h1 < 0) {
        pb1.innerHTML = 'ساعت اشتباه'
        pb1.style = 'color: red; border: none; margin-top: 0; width: 100px;'
    } else{ 
        pb1.style = 'color: rgb(168, 255, 168); border: none; margin-top: 0; width: 70px;'
    }
}



cb1.addEventListener('click' ,Show1)








let r2c = $.getElementById('r2c')
let r2d = $.getElementById('r2d')
let r2ms = $.getElementById('r2ms')
let r2hs = $.getElementById('r2hs')
let r2me = $.getElementById('r2me')
let r2he = $.getElementById('r2he')
let r2p = $.getElementById('r2p')
let cb2 = $.getElementById('calc-btn2')
let pb2 = $.getElementById('final2')
let b2 = $.getElementById('b2')
let tt2 = $.getElementById('tt2')


var d2 = 0
var c2 = 0
var h2 = 0

let T2 = () => {
    h2 = ((r2he.value * 60) - (r2hs.value * 60)) + (r2me.value - r2ms.value)
    console.log(h2)
}

let Cons2 = () => {
    if (r2c.value === 'ps4') {
        c2 = 670
    } else { 
        c2 = 840
    }
}

let Ds2 = () => {
    if (r2d.value === 'con2') {
        d2 = 167
    } else if (r2d.value === 'con3') {
        d2 = 334
    } else if (r2d.value === 'con4') {
        d2 = 501
    } else {
        d2 = 0
    }
}

let TotT2 = () => {
    tt2.innerHTML = ((r2he.value * 60) - (r2hs.value * 60)) + (r2me.value - r2ms.value) +   '  دقیقه '
}

let Show2 = () => {
    Ds2()
    Cons2()
    T2()
    TotT2()
    pb2.innerHTML = ((c2 + d2) * h2)+ Number(b2.value) + 'تومان'
    if (h1 < 0) {
        pb2.innerHTML = 'ساعت اشتباه'
        pb2.style = 'color: red; border: none; margin-top: 0; width: 100px;'
    } else{ 
        pb2.style = 'color: rgb(168, 255, 168); border: none; margin-top: 0; width: 70px;'
    }
}



cb2.addEventListener('click' ,Show2)





let r3c = $.getElementById('r3c')
let r3d = $.getElementById('r3d')
let r3ms = $.getElementById('r3ms')
let r3hs = $.getElementById('r3hs')
let r3me = $.getElementById('r3me')
let r3he = $.getElementById('r3he')
let r3p = $.getElementById('r3p')
let cb3 = $.getElementById('calc-btn3')
let pb3 = $.getElementById('final3')
let b3 = $.getElementById('b3')
let tt3 = $.getElementById('tt3')


var d3 = 0
var c3 = 0
var h3 = 0

let T3 = () => {
    h3 = ((r3he.value * 60) - (r3hs.value * 60)) + (r3me.value - r3ms.value)
    console.log(h3)
}

let Cons3 = () => {
    if (r3c.value === 'ps4') {
        c3 = 670
    } else { 
        c3 = 840
    }
}

let Ds3 = () => {
    if (r3d.value === 'con2') {
        d3 = 167
    } else if (r3d.value === 'con3') {
        d3 = 334
    } else if (r3d.value === 'con4') {
        d3 = 501
    } else {
        d3 = 0
    }
}

let TotT3 = () => {
    tt3.innerHTML = ((r3he.value * 60) - (r3hs.value * 60)) + (r3me.value - r3ms.value) +   '  دقیقه '
}


let Show3 = () => {
    Ds3()
    Cons3()
    T3()
    TotT3()
    pb3.innerHTML = ((c3 + d3) * h3)+ Number(b3.value) + 'تومان'
    if (h3 < 0) {
        pb3.innerHTML = 'ساعت اشتباه'
        pb3.style = 'color: red; border: none; margin-top: 0; width: 100px;'
    } else{ 
        pb3.style = 'color: rgb(168, 255, 168); border: none; margin-top: 0; width: 70px;'
    }
}



cb3.addEventListener('click' ,Show3)





let r4c = $.getElementById('r4c')
let r4d = $.getElementById('r4d')
let r4ms = $.getElementById('r4ms')
let r4hs = $.getElementById('r4hs')
let r4me = $.getElementById('r4me')
let r4he = $.getElementById('r4he')
let r4p = $.getElementById('r4p')
let cb4 = $.getElementById('calc-btn4')
let pb4 = $.getElementById('final4')
let b4 = $.getElementById('b4')
let tt4 = $.getElementById('tt4')


var d4 = 0
var c4 = 0
var h4 = 0

let T4 = () => {
    h4 = ((r4he.value * 60) - (r4hs.value * 60)) + (r4me.value - r4ms.value)
    console.log(h4)
}

let Cons4 = () => {
    if (r4c.value === 'ps4') {
        c4 = 670
    } else { 
        c4 = 840
    }
}

let Ds4 = () => {
    if (r4d.value === 'con2') {
        d4 = 167
    } else if (r4d.value === 'con3') {
        d4 = 334    
    } else if (r4d.value === 'con4') {
        d4 = 500
    } else {
        d4 = 0
    }
}

let TotT4 = () => {
    tt4.innerHTML = ((r4he.value * 60) - (r4hs.value * 60)) + (r4me.value - r4ms.value) +   '  دقیقه '
}

let Show4 = () => {
    Ds4()
    Cons4()
    T4()
    TotT4()
    pb4.innerHTML = ((c4 + d4) * h4)+ Number(b4.value) + 'تومان'
    if (h4 < 0) {
        pb4.innerHTML = 'ساعت اشتباه'
        pb4.style = 'color: red; border: none; margin-top: 0; width: 100px;'
    } else{ 
        pb4.style = 'color: rgb(168, 255, 168); border: none; margin-top: 0; width: 70px;'
    }
}



cb4.addEventListener('click' ,Show4)




// تسویه حساب و حساب روزانه -->
let t1 = $.getElementById('t1')

let AddB1 = () => {
    pb1.innerHTML = '--'
    r1hs.value = ''
    r1he.value = ''
    r1ms.value = ''
    r1me.value = ''
    b1.value = ''
}



t1.addEventListener('click' ,AddB1)



let t2 = $.getElementById('t2')

let AddB2 = () => {
    pb2.innerHTML = '--'
    r2hs.value = ''
    r2he.value = ''
    r2ms.value = ''
    r2me.value = ''
    b2.value = ''
}



t2.addEventListener('click' ,AddB2)




let t3 = $.getElementById('t3')

let AddB3 = () => {
    pb3.innerHTML = '--'
    r3hs.value = ''
    r3he.value = ''
    r3ms.value = ''
    r3me.value = ''
    b3.value = ''
}



t3.addEventListener('click' ,AddB3)



let t4 = $.getElementById('t4')

let AddB4 = () => {
    pb4.innerHTML = '--'
    r4hs.value = ''
    r4he.value = ''
    r4ms.value = ''
    r4me.value = ''
    b4.value = ''
}



t4.addEventListener('click' ,AddB4)














