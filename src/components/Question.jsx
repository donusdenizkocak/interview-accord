import React, { useState } from 'react'
import { arrowdown, arrowup } from '../helper/icons';
import Card from './Card'

export const Question = ({item}) => {
   const [show,setShow] = useState(false);
const {id,question,answer} =item
   const handleToggle=()=> {
    // if(show){
    //     setShow(false);
    // }else{
    //     setShow(true);
    // }
    setShow(!show)     //not operatörü
   }

  return (
    <div className='card-group'>
        
            {/* // show ? (<div className='card'>
            //     <div className='ques-answer'>
            //         <h5> {id}.{question}</h5>
            //         <button onClick={()=> setShow(false)}>
            //             {arrowup}
            //         </button>
            //     </div>
            //     <p>{answer}</p>
            // </div>
            // ):(
            // <div className='card'>
            //     <div className='ques'>
            //         <h5> {id}.{question}</h5>
            //         <button onClick={()=> setShow(true)}>
            //             {arrowdown}
            //         </button>
            //     </div>
               
            // </div>) */}

            {/* //2.YOL TOGGLE FONKSİYONU
        //     show ? (<div className='card'>
        //     <div className='ques-answer'>
        //         <h5> {id}.{question}</h5>
        //         <button onClick={handleToggle}>
        //             {arrowup}
        //         </button>
        //     </div>
        //     <p>{answer}</p>
        // </div>
        // ):(
        // <div className='card'>
        //     <div className='ques'>
        //         <h5> {id}.{question}</h5>
        //         <button onClick={handleToggle}>
        //             {arrowdown}
        //         </button>
        //     </div>
           
        // </div>) */}

         {/* //3.YOL */}
        {/* // <div className='card'>
        // <div className='ques-answer'>
        // <h5> {id}.{question}</h5>
        // <button onClick={handleToggle}>
        //     {show ?arrowdown : arrowup}
        // </button>
        //   </div>
        //    {show && <p>{ answer}</p>}
        //   </div> */}


        {/* //4.yol */}

        {show ? (
            <Card id={id} question={question} answer={answer} icon={arrowup} handleToggle={handleToggle} />
        ):(
            <Card id={id} question={question} icon={arrowdown} handleToggle={handleToggle} /> 
        )

        }
          
        

        
    </div>
  )
}
