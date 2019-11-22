<template>
    <div id="container">
        <div id="partNumber">
            <p>{{nameplate.materialNumber}}</p>
        </div>
        <div id="baslik">
            <div id="baslikLeft"><img src="./model.jpg" alt=""><p>{{nameplate.model}}</p></div>
            <div id="baslikMiddle">
                <div id="smoke">
                    <p>{{nameplate.teao1}}</p>
                    <p>{{nameplate.teao2}}</p>
                </div>
                <p id="serialNum" >{{nameplate.productionDate}}   {{nameplate.serialNumber}}</p>
            </div>
            <div id="baslikRight">
                <div id="standards">
                    <div id="standardLogos">
                        <img src="./CAE.png" alt="">
                        <img id="eac" src="./EAC.gif" alt="">
                    </div>
                    <p id="caeText">MOD.TE1BF0X0!</p>
                </div>
                <div id="standardIEC">
                    <p>EN12101-3</p>
                    <p>IEC 60034-1</p>
                </div>
            </div>
        </div>
        <div id="tablo">
            <div id="item1">
                <div id="row1">
                    <p>3 ~ {{nameplate.frame}}-{{nameplate.pole}}</p>
                    <p></p>
                    <p>{{nameplate.protectionClass}} INS. CL. {{nameplate.insulationClass}} &Tab; DT {{nameplate.deltaT}}K</p>
                    <p></p>
                    <p>{{nameplate.duty}}</p>
                    <p>SF {{nameplate.serviceFactor}}</p>
                    <p>{{nameplate.smokeClass}}</p>
                </div>
                <div id="row2">
                    <div class="voltage"><p class="center">V</p></div>
                    <div class="frequency"><p class="center">Hz</p></div>
                    <div class="power"><p class="center">kW</p></div>
                    <div class="speed"><p class="center">RPM</p></div>
                    <div class="current"><p class="center">A</p></div>
                    <div class="powerFactor"><p class="center">PF</p></div>
                    <div class="IECode"><p class="center">IE code</p></div>
                    <div class="eff100"><p class="center">100%</p></div>
                    <div class="eff75"><p class="center">75%</p></div>
                    <div class="eff50"><p class="center">50%</p></div>
                </div>
                <div id="row3">
                    <div class="voltage">
                        <div v-for="(v,index) in nameplate.voltage" v-bind:key="index"><p>{{v}}</p></div>
                    </div>
                    <div class="frequency">
                        <div v-for="(f,index) in nameplate.frequency" v-bind:key="index"><p>{{f}}</p></div>
                    </div>
                    <div class="power">
                        <div v-for="(f,index) in nameplate.power" v-bind:key="index"><p>{{f}}</p></div>
                    </div>
                    <div class="speed">
                        <div v-for="(row,index) in nameplate.speed" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="current">
                        <div v-for="(row,index) in nameplate.current" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="powerFactor">
                        <div v-for="(row,index) in nameplate.powerFactor" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="IECode">
                            <div ><p>{{nameplate.IECode}}</p></div>
                    </div>
                    <div class="eff100">
                        <div v-for="(row,index) in nameplate.eff100" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="eff75">
                        <div v-for="(row,index) in nameplate.eff75" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="eff50">
                        <div v-for="(row,index) in nameplate.eff50" v-bind:key="index"><p>{{row}}</p></div>
                    </div> 
                </div>
            </div>
            <div id="item2">
                <div id="bearings">
                    <div id="motorSymbol"><img src="./motorsimge.jpg" alt=""></div>
                    <div id="DEbearing"><p>  {{nameplate.deBearing}} ({{nameplate.deGreaseQTY}}g)</p></div>
                    <div id="NDEbearing"><p> {{nameplate.ndeBearing}} ({{nameplate.ndeGreaseQTY}}g)</p></div>
                    <div id="greaseType"><p>{{nameplate.grease}}</p><p>{{nameplate.greasePeriod}} h</p></div>
                </div>
                <div id="delta"><img src="./delta.jpg" alt=""></div>
                <div id="star"><img src="./star.jpg" alt=""></div>
                <div id="nema"><p>{{nameplate.nema1}}</p><p>{{nameplate.nema2}}</p></div>
                <div id="altweg"><p>Alt <b>{{nameplate.altitude}}</b> m.a.s.l.    <b>{{nameplate.weight}}</b> kg</p> </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "nameplateView",
    props: ["nameplate"],
    data: function(){
        return {};
    }
    
}
</script>

<style scoped>
#container{
        width: 800px;
        height: 310px;
        line-height: 0px;
        font-size: 11px;
        font-family:  Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 700;
        padding: 3px;
        display: grid;
        border: 2px solid black;
        border-radius: 5px;
        grid-template-areas: "partNumber baslik" 
                             "partNumber tablo" 
                             "partNumber tablo" 
                             "partNumber tablo"; 
        /* grid-gap: 1px; */
        grid-template-columns: 2fr 29fr;
        grid-template-rows: 1fr 3fr;
    }
    #partNumber{
        grid-area: partNumber;
        align-self: center;
        writing-mode: sideways-lr;
        letter-spacing: 1px;
        font-weight: 900;
        /* text-orientation: ; */
    }
    #baslik{
        height: 75px;
        grid-area: baslik;
        display: grid;
        grid-template-columns: 3fr 4fr 3fr;
    }
    #tablo{
        height: 225px;
        grid-area: tablo;
        display: grid;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-top-left-radius: 8px;
        grid-template-rows: 6fr 4fr;
    }
    #item1{
        height: 157px;
        display:grid;
        border-bottom: 1px solid black;
        grid-template-rows: 1fr 1fr 4fr;
    }
    #item2{
        height: 68px;
        display:grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 6fr 5fr 5fr 11fr;
        grid-template-areas: "bearings delta star nema"
                             "bearings delta star nema"
                             "bearings delta star altweg" 
                             "bearings delta star altweg"
    }
    #row1{
        height: 25px;
        border-bottom: 1px solid black;
        padding-left: 5px;
        /* font-size: 8px; */
            /* display : grid;
            grid-auto-flow: column;
            grid-template-columns: 1fr 4fr 2fr 6fr 4fr 1fr 5fr; */
            display: flex;
            flex-direction: row;
            justify-content: space-between
    }
    #row2{
        height: 25px;
        /* border-bottom:2px solid black; */
        display : grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(50 , 1fr);
    }
    #row3{
        height: 100px;
        display : grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(50 , 1fr);
        grid-template-rows: 1fr;
    }
    #row3 div{
        display: grid; 
    }
    #row3 .frequency , #row3 .power{
        grid-template-rows: 3fr 1fr;
    }
    #row3 .eff100,.eff75,.eff50{
        grid-template-rows: 1fr 2fr 1fr;
    }
    .voltage{
        grid-column-start: 1;
        grid-column-end: 11;
        border-right: 1px solid black;
        
    }
    .frequency{
        grid-column-start: 11;
        grid-column-end: 14;
        border-right: 1px solid black;
       
    }
    .power{
        grid-column-start: 14;
        grid-column-end: 17;
        border-right: 1px solid black;
    }
    .speed{
        grid-column-start: 17;
        grid-column-end: 21;
        border-right: 1px solid black;
    }
    .current{
        grid-column-start: 21;
        grid-column-end: 29;
        border-right: 1px solid black;
    }
    .powerFactor{
        grid-column-start: 29;
        grid-column-end: 34;
        border-right:1px solid black;
    }
    .IECode{
        grid-column-start: 34;
        grid-column-end: 39;
        border-right: 1px solid black;
    }
    .eff100{
        grid-column-start: 39;
        grid-column-end: 43;
        border-right: 1px solid black;
    }
    .eff75{
        grid-column-start: 43;
        grid-column-end: 47;
        border-right: 1px solid black;
    }
    .eff50{
        grid-column-start: 47;
        grid-column-end: 51;
    }
    .center{
        text-align: center;
    }

    
    #bearings{
        grid-area: bearings;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 3fr 2fr;
        padding-left: 10Px;
    }
    #bearings #motorSymbol{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
        align-self: center;
    }
    #bearings #motorSymbol img{
        width: 40px;
        height: 34px;
    }
    #bearings #DEbearing{
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 5;
    }
    #bearings #DEbearing p{
        margin-top: 10px;
    }
    #bearings #NDEbearing{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 5;
    }
    #bearings #greaseType{
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: end-line;
        font-size: 9px;
        margin-top: -5px;
       
    }
    #bearings #greasePeriod{
        grid-row-start: 4;
        grid-row-end: 5;
        grid-column-start: 1;
        grid-column-end: end-line;
    }

    #delta{
        grid-area: delta;
        border-left: 1px solid black;
    }
    #delta img{
        width: 142px;
        height: 68px;
    }
    #star{
        grid-area: star;
        border-left: 1px solid black;
    }
    #star img{
        width: 142px;
        height: 68px;
    }
    #nema{
        grid-area: nema;
        border-left: 1px solid black;
        display: grid;
        align-items: center;
        word-break: break-word;
        font-size: 9px;
        padding-left: 5px;
        letter-spacing: 1.5px;
    }
    #nema p{
        margin: 0px;
    }
    #altweg{
        grid-area: altweg;
        border-left: 1px solid black;
        border-top: 1px solid black;
        display: grid;
        align-items: center;
        padding-left: 5px;
    }
    #row3 div div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid black;
    }
    #baslik #baslikLeft{
        height: 75px;
        display: flex;
        padding-left: 20px;
    }
    #baslik #baslikLeft img{
        width: 75px;
        height: 60px
    }
    #baslik #baslikLeft p{
        margin-left: 10px;
    }

    #baslik #baslikMiddle{
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-width: 0;
    }
    #baslik #baslikRight{
        height: 75px;
    }

    #baslik #serialNum{
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 1px;
    }
    #baslik #smoke{
        font-size: 9px;
    }
    #standardLogos{
        margin-top: 10px;
    }
    #standardLogos img{
        width: 35px;
        height: 35px
    }
    #eac{
        margin-left: 30px;
    }
    /* #caeText{
       
    } */
    #baslikRight{
        display: flex;
        justify-content: space-between;
    }
    #standardIEC{
        align-self: end;
        
    }
    p{
        margin-top: 11px;
        margin-bottom: 11px;
    }
</style>