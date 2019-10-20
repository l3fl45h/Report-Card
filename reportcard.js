var math, lgmath, eng, lgeng, sci, lgsci, hist, lghist, econ, lgecon, lit, lglit, music, lgmusic, pe, lgpe;
            
function save(){
    var name = document.getElementById("sname").value;
    var idnum = document.getElementById("idnum").value;

    alert("Saving file for "+name+"-"+idnum);
}

function emailclient() {
    window.open("email.html");
}

function lgrade(){
    math = parseInt(document.getElementById("math1").value) + parseInt(document.getElementById("math2").value) + parseInt(document.getElementById("math3").value);
    eng = parseInt(document.getElementById("eng1").value) + parseInt(document.getElementById("eng2").value) + parseInt(document.getElementById("eng3").value);
    sci = parseInt(document.getElementById("sci1").value) + parseInt(document.getElementById("sci2").value) + parseInt(document.getElementById("sci3").value);
    hist = parseInt(document.getElementById("hist1").value) + parseInt(document.getElementById("hist2").value) + parseInt(document.getElementById("hist3").value);
    econ = parseInt(document.getElementById("econ1").value) + parseInt(document.getElementById("econ2").value) + parseInt(document.getElementById("econ3").value);
    lit = parseInt(document.getElementById("lit1").value) + parseInt(document.getElementById("lit2").value) + parseInt(document.getElementById("lit3").value);
    music = parseInt(document.getElementById("music1").value) + parseInt(document.getElementById("music2").value) + parseInt(document.getElementById("music3").value);
    pe = parseInt(document.getElementById("pe1").value) + parseInt(document.getElementById("pe2").value) + parseInt(document.getElementById("pe3").value);

    lgmath = math/3;
    lgeng = eng/3;
    lgsci = sci/3;
    lghist = hist/3;
    lgecon = econ/3;
    lglit = lit/3;
    lgmusic = music/3;
    lgpe = pe/3;

    if(lgmath<50)
        document.getElementById("lgmath").value = "D";
    if(lgmath>49 && lgmath<60)
        document.getElementById("lgmath").value = "C";
    if(lgmath>59 && lgmath<70)
        document.getElementById("lgmath").value = "C+";
    if(lgmath>69 && lgmath<80)
        document.getElementById("lgmath").value = "B";
    if(lgmath>79 && lgmath<90)
        document.getElementById("lgmath").value = "B+";
    if(lgmath>89 && lgmath<101)
        document.getElementById("lgmath").value = "A";
    
    if(lgeng<50)
        document.getElementById("lgeng").value = "D";
    if(lgeng>49 && lgeng<60)
        document.getElementById("lgeng").value = "C";
    if(lgeng>59 && lgeng<70)
        document.getElementById("lgeng").value = "C+";
    if(lgeng>69 && lgeng<80)
        document.getElementById("lgeng").value = "B";
    if(lgeng>79 && lgeng<90)
        document.getElementById("lgeng").value = "B+";
    if(lgeng>89 && lgeng<101)
        document.getElementById("lgeng").value = "A";

    if(lgsci<50)
        document.getElementById("lgsci").value = "D";
    if(lgsci>49 && lgsci<60)
        document.getElementById("lgsci").value = "C";
    if(lgsci>59 && lgsci<70)
        document.getElementById("lgsci").value = "C+";
    if(lgsci>69 && lgsci<80)
        document.getElementById("lgsci").value = "B";
    if(lgsci>79 && lgsci<90)
        document.getElementById("lgsci").value = "B+";
    if(lgsci>89 && lgsci<101)
        document.getElementById("lgsci").value = "A";

    if(lghist<50)
        document.getElementById("lghist").value = "D";
    if(lghist>49 && lghist<60)
        document.getElementById("lghist").value = "C";
    if(lghist>59 && lghist<70)
        document.getElementById("lghist").value = "C+";
    if(lghist>69 && lghist<80)
        document.getElementById("lghist").value = "B";
    if(lghist>79 && lghist<90)
        document.getElementById("lghist").value = "B+";
    if(lghist>89 && lghist<101)
        document.getElementById("lghist").value = "A";

    if(lgecon<50)
        document.getElementById("lgecon").value = "D";
    if(lgecon>49 && lgecon<60)
        document.getElementById("lgecon").value = "C";
    if(lgecon>59 && lgecon<70)
        document.getElementById("lgecon").value = "C+";
    if(lgecon>69 && lgecon<80)
        document.getElementById("lgecon").value = "B";
    if(lgecon>79 && lgecon<90)
        document.getElementById("lgecon").value = "B+";
    if(lgecon>89 && lgecon<101)
        document.getElementById("lgecon").value = "A";

    if(lglit<50)
        document.getElementById("lglit").value = "D";
    if(lglit>49 && lglit<60)
        document.getElementById("lglit").value = "C";
    if(lglit>59 && lglit<70)
        document.getElementById("lglit").value = "C+";
    if(lglit>69 && lglit<80)
        document.getElementById("lglit").value = "B";
    if(lglit>79 && lglit<90)
        document.getElementById("lglit").value = "B+";
    if(lglit>89 && lglit<101)
        document.getElementById("lglit").value = "A";

    if(lgmusic<50)
        document.getElementById("lgmusic").value = "D";
    if(lgmusic>49 && lgmusic<60)
        document.getElementById("lgmusic").value = "C";
    if(lgmusic>59 && lgmusic<70)
        document.getElementById("lgmusic").value = "C+";
    if(lgmusic>69 && lgmusic<80)
        document.getElementById("lgmusic").value = "B";
    if(lgmusic>79 && lgmusic<90)
        document.getElementById("lgmusic").value = "B+";
    if(lgmusic>89 && lgmusic<101)
        document.getElementById("lgmusic").value = "A";

    if(lgpe<50)
        document.getElementById("lgpe").value = "D";
    if(lgpe>49 && lgpe<60)
        document.getElementById("lgpe").value = "C";
    if(lgpe>59 && lgpe<70)
        document.getElementById("lgpe").value = "C+";
    if(lgpe>69 && lgpe<80)
        document.getElementById("lgpe").value = "B";
    if(lgpe>79 && lgpe<90)
        document.getElementById("lgpe").value = "B+";
    if(lgpe>89 && lgpe<101)
        document.getElementById("lgpe").value = "A";

    }