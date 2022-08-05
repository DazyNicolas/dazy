import React from 'react'
import emailjs from 'emailjs-com'
const InputFild = () => {


    function sendEmail (e){
        e.preventDefault();
    
        emailjs.sendForm('service_qtt1uq7', 'template_8szb9a1', e.target, 'pwvqK1DKdsuzG6cEZ').then(res=>{
            console.log(res)
        }).catch(err=>console.log(err));
    }
  return (
    <div className='rigth-contact'>
    <h2>Envoyer un message</h2>
    
    <div className='formulaire'>
        <form onSubmit={sendEmail}>
            <div className='group-input'>
                <label>Nom : </label>
                
                <input type="text" name="name" />
               
            </div>
            <div className='group-input'>
                <label> Email : </label>
               
                <input type="email" name="user_email" />
               
            </div>
            <div className='group-input'>
                <label>Message :</label>
                
                <textarea  name="message" />
                
            </div>
       
        
        <input className='btn-send' type="submit" value="Envoyer" />
        </form>
    </div>
</div>
  )
}

export default InputFild