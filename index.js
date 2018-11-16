'use strict';

      const rootElement = document.getElementById('root');


      const Btn = props => <button>Get new ones now</button>
      const BtnElement = props => <button className={props.className}>{props.children}</button>

      const element = (
        <div id="container">
          <div className="topDiv header">
              <span>
                  <img className="logo" src="./image/logo.svg" />
              </span>
              <BtnElement className="btn">
                  Try it free
              </BtnElement>
          </div>
          
          <div className="topDiv captionDivHold">
            <p className="captionHold">
                <p className="caption">Build The Community Your Fans Will Love</p>

                <p className="captionText">Huddle re-imagines the way we build communities. You have a voice,<br /> but so does 
                your audience. Create connections with your <br />users as you engage in genuine discussion.</p> 
            </p>
            <BtnElement className="btn bigbtn">
                Get Started For Free
            </BtnElement>
          </div>
          <div className="topDiv"><img className="mockup" src="./image/mockup.svg" /></div>
          <div className="topDiv showNumbers">
            <div>
              <img src="./image/icon-communities.svg" />
              <div>
                  <p className="boldNumbers">1.4k+</p>
                  <p>Communities Formed</p>
              </div>
            </div>
            <div>
              <img src="./image/icon-messages.svg" />
              <div>
                  <p className="boldNumbers">2.7m+</p>
                  <p>Messages Sent</p>
              </div>
            </div>
          </div>
          <div className="topIllustrateBackground1"></div>
          <div className="topDiv illustration illustrationBackground">
              <div className="innerDiv">
                  <p className="boldSix">Grow Together</p>
                  <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
                  Think of the insightful conversations you miss out on with a feedback form.</p>
              </div>
              <div className="innerDiv">
                  <img className="illustrateImage" src="./image/illustration-grow-together.svg" />
              </div>
          </div>
          <div className="bottomIllustrateBackground1"></div>

          <div className="topDiv illustration">
            <div className="innerDiv">
                  <img className="illustrateImage" src="./image/illustration-flowing-conversation.svg" />
            </div>
            <div className="innerDiv">
                <p className="boldSix">Flowing Conversations</p>
                <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
                just-in-time loading for a more natural flow.</p>
            </div>
          </div>

          <div className="topIllustrateBackground2"></div>
          <div className="topDiv illustration illustrationBackground">
            <div className="innerDiv">
                  <p className="boldSix">Your Users</p>
                  <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
                  once signed in to your app, your users can start chatting immediately.</p>
            </div>
            <div className="innerDiv">
                  <img className="illustrateImage" src="./image/illustration-your-users.svg" />
            </div>
          </div>
          <div className="bottomIllustrateBackground2"></div>

          <div className="topDiv beforeFooter">
              <p className="boldSix">Ready To Build Your Community?</p>
              <BtnElement className="btn bigbtn">Get Started For Free</BtnElement>
          </div>

          <div className="topDiv topFooter"></div>
          <div className="topDiv footerDiv">
              <span>
                  <p className="huddle">
                      <img src="./image/icon-messages.svg" />Huddle
                  </p>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Mauris nulla quam, <br />hendrerit lacinia 
                      vestibulum a, ultrices quis sem.
                  </p>
                  <p>
                      <img scr="./image/icon-phone.svg" />Phone: +1-543-123-4567
                  </p>
                  <p>
                      <img scr="./image/icon-email.svg" />example@huddle.com
                  </p>

                  <div className="icons">
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </div>
              </span>

              <span>
                  <p className="boldSix">
                      Newsletter
                  </p>

                  <p>
                      To recieve tips on how to grow your community, <br /> sign up to our weekly newsletter. We’ll never 
                      send<br /> you spam or pass on your email address
                  </p>
                  <div>
                      <form>
                          <input type="text" /><BtnElement className="btnSubscribe">Subscribe</BtnElement>
                      </form>
                      
                  </div>
              </span>
          </div>

          <footer className="footer topDiv">
              <p class="attribution">
              This page started life as a challenge on <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> 🎉
              </p>
          </footer>

              
        </div> 
      );

      ReactDOM.render(element,rootElement);