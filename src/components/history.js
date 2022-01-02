import React from 'react'

function History(props) {
    return (
        <div className='op'>
            {props.operation.op + "=" + props.operation.result}
        </div>
    )
}

export default History
