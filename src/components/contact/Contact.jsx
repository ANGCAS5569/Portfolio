import "./contact.scss"
import {useState} from "react";

export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className="contact" id="contact">
     <div className="left">
       <div className="iframeContainer">
          <iframe src="https://giphy.com/embed/f0TvnEmF5yPLO" width="377" height="600" frameBorder="0" class="giphy-embed" title="look" allowFullScreen></iframe>
     </div>
      </div>
     <div className="right">
       <h2>Contact.</h2>
       <form onSubmit={handleSubmit} action="https://formspree.io/f/xbjwpwvz" method="POST">
         <input type="email" placeholder="Email" />
         <textarea placeholder="Message"></textarea>
         <button type="submit">Send</button>
         {message && <span>Thank you for your message! I will reply as soon as possible.</span>}
       </form>
     </div>
    </div>
  )
}
