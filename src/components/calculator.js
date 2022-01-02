import React, {useState} from 'react'
import History from './history.js'

function Calculator() {
    const [result, setResult] = useState(0)
    const [displayString, SetString] = useState("")
    const [history,setHistory] = useState([])
    const [displayZero,setDisplay] =useState(true)
    function write(e){
        if (displayZero){
            setDisplay(false)
        }
        let copyString = displayString.slice()
        copyString +=(e.target.id)
        setResult(eval(copyString))
        SetString(copyString)
        
        
    }

    function writeSym(e){
        let copyString = displayString.slice()
        let lastChar = copyString.charAt(copyString.length-1)
        if(lastChar !=="/" && lastChar !=="*" && lastChar !=="-" && lastChar !=="+"&& lastChar !==""){
            copyString +=e.target.id
            
        
            SetString(copyString)
        }
    }

    function deleteAll(){
        setResult(0)
        SetString("")
        setHistory([])
    }

    function deleteChar(){
        let copyString = displayString.slice()
        let newString=copyString.slice(0, -1)
        if (newString.length>0){
        SetString(newString)
        setResult(eval(newString))
       }else {SetString("")
       setResult(eval(0))
       setDisplay(true)
    }
    }

    function equalSign(){
        if (!displayZero){
            setDisplay(true)
        }
        if (displayString.length>0){
            let operation = {
            op : displayString,
            result : result

        };
        setHistory(prevHistory=> [...prevHistory,operation])
        setResult(0)
        SetString("")
        }
        
    }
  
    return (
        <div className='wrapper'>
            <div className='calculator'>

                <div className='display'>
                    <div className='info'>
                    <div className='history'>{history.map(item=>{
                        return <History operation ={item}/>
                    })}</div>
                    <div className='operation'>{displayString}{displayZero?0:null}</div>
                    <div  className='result'>= {result}</div></div>
                </div>
                <hr></hr>

                <div className='controls-container'>

                    <div id="AC"  onClick={deleteAll} className="item orange">AC</div>
                    <div id="Del"  onClick={deleteChar} className="item orange">Del</div>
                    <div className="item1"></div>  
                    <div id="/"  onClick={writeSym} className="item orange">/</div>
                    <div id="7" onClick={write} className="item">7</div>
                    <div id="8"  onClick={write} className="item">8</div>
                    <div id="9"  onClick={write} className="item">9</div>  
                    <div id="*"  onClick={writeSym} className="item orange">*</div>
                    <div id="4"  onClick={write} className="item">4</div>
                    <div id="5"  onClick={write} className="item">5</div>
                    <div id="6"  onClick={write} className="item">6</div>  
                    <div id="-"  onClick={writeSym} className="item orange">-</div>
                    <div id="1"  onClick={write} className="item">1</div>
                    <div id="2"  onClick={write} className="item">2</div>
                    <div id="3"  onClick={write} className="item">3</div>  
                    <div id="+"  onClick={writeSym} className="item orange">+</div>
                    <div className="item1"></div>
                    <div id="0"  onClick={write}className="item">0</div>
                    <div id="."  onClick={write}className="item">.</div>  
                    <div id="="  onClick={equalSign}className="item"><div className='orangeRound'>=</div></div>
                    
  
                </div>

            </div>

        </div>
    )
}

export default Calculator
