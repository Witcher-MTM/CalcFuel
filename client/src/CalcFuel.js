import React from 'react';
class CalcFuel extends React.Component{

    CalcuteFuel(){
        var fuel = document.getElementById('fuel');
        var resfuel = document.getElementById('ResFuel');
        if(fuel.value != '' && resfuel.value != ''){
            var h2 = document.getElementById('hResult');
            var resultinfo = 100/resfuel.value;
            h2.innerHTML = "Сможете проехать "+resultinfo*fuel.value+"км";
        }
    }


    render() {
        return (
            <div id='Form'>
                    <div className="CountFuel "> 
                        <h3>Кол-во топлива</h3>
                    <input type={'number'} id='fuel'></input>
                    </div>
                    <div className="countResFuel ">
                        <h3>Расход топила</h3>
                        <input type={'number'} id='ResFuel'></input>
                    </div>
                    <div id='result'>
                        <h2 id='hResult'></h2>
                    </div>
                    <button onClick={this.CalcuteFuel} type='submit'>Calculate</button>
            </div>
            
        );
    }
}

export default CalcFuel;