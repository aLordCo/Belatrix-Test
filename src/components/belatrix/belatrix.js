import React from 'react';

import Buttons from '../buttons/buttons';
import Tables from '../tables/tables';
import adjusData from '../../tools/adjustData';

const data = [
    '01 Lima /  / ',
    '01 Lima / 50 Lima / ',
    '01 Lima / 51 Barranca / ',
    '01 Lima / 50 Lima / 202 La Molina',
    '01 Lima / 50 Lima / 203 San Isidro',
    '02 Arequipa /  / ',
    '02 Arequipa / 63 Arequipa / ',
    '02 Arequipa / 64 Caylloma / ',
    '02 Arequipa / 63 Arequipa / 267 Cercado',
];

const newData = adjusData(data);

class Belatrix extends React.Component {
    constructor() {
        super();
        this.state = {
            showData: 'departments'
        }
    }
    onclick(nameButton){
        this.setState({
            showData: nameButton
        })
    }
    render(){
        return(
            <div>
                <Buttons 
                    buttons={[ 'departments', 'provinces', 'districts' ]}
                    onClickButton={this.onclick.bind(this)}
                    activeButton={this.state.showData}
                />
                <Tables data={newData[this.state.showData]} title={this.state.showData} />
            </div>
        )
    }
 }

export default Belatrix;