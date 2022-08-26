import React  from 'react';
import { connect } from 'react-redux';

const Video = ({state})=> {
    console.log('state',state)
        return (
            <div>
                <strong>Módulo:  {state.activeModule}</strong>
                <br/>
                <span>Aula:  {state.activeLesson}</span>
            </div>
        )
}

export default connect((state)=>({state: state.course}))(Video)