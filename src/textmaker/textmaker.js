import React, { useEffect } from "react";

const Textmaker =(text)=>{
    const {Text} = text;
    const retTextArray=[];
    var pivot =0;
    console.log(Text);
    function maker(Text){
        var retText =''
        for(var i=0;i<Text.length;i++) {
            var element = Text[i];
            if(pivot===1 && element==='n'){
                retTextArray.push(retText);
                retText='';
                pivot=0;
            }
            else if(element==='/'){
                pivot=1
            }
            else if(i===Text.length-1){
                retTextArray.push(retText+element);
            }
            else{
                var pivot=0;
                retText+=element;
            }
        }
    }
    maker(Text);
    console.log(retTextArray);

    return(
        <ol>
            {retTextArray.map((line)=>(
                <div key={line}>{line}</div>
            ))}
        </ol>
    );
}

export default Textmaker;