import React from 'react'
import ReactDOM from 'react-dom'

const Modal = (props) => {
   return ReactDOM.createPortal(
      // change url to root on click out side modal
      <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
         {/* prevent childern element from listening to change url */}
         <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
            <div className='header'>{props.title}</div>
            <div className='content'>{props.content}</div>
            <div className='actions'>
               {props.actions}
            </div>
         </div>
      </div >, document.querySelector("#modal"))
}
export default Modal;