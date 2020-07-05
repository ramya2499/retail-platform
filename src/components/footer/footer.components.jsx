import React from 'react'
import './footer.styles.scss'



export const Footer = () => (
    < div className='footer'>
              <div className='options'>
                      
                            <div><a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus"></i></a></div>
                            <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                            <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
                        
                    
                </div>
         
           <div className="copyright">             
                <div class="col-auto ">
                    <p>© Copyright 2020 IgnitePlus</p>
                </div>
           </div>
       
   </div>
  
)

