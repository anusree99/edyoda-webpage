import React from "react"
import style from "./edyoda.module.css"
import pic from "./book2.png"
import pic1 from "./time2.png"
import pic2 from "./live2.png"
import pic3 from "./courses2.jpeg"
import pic4 from "./ads1.png"
import pic6 from "./razorpay.png"
import pic7 from "./edyoda icon.png"
const Edyoda=()=>{
    return(
        <div>
    <section id={style.webpage}>
        <article>
       <section id={style.nav}>
        <article>
            <div className={style.logo}>EDYODA</div>
            <div className={style.menu}>courses
                <select name="" id="">
                    <option value="#"></option>
                </select>
                program
                <select name="" id="">
                    <option value="#"></option>
                </select>
            </div>
            <div className={style.space}></div>
            <div className={style.search}>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={style.login}>login</div>
            <div className={style.joinnow}>
                <button>join now</button>
                </div>
        </article>
       </section>
      
       <section id={style.body}>
            <article>
                <div className={style.left}>
               <p>Access curated courses worth</p>
               <p>$ 18,500 at just <span style={{color:"blue"}}>$ 99</span> per year!</p><br />
               <h1><img src={pic}  /><span style={{color:"blue"}}>100 + </span>job relevent courses</h1><br />
               <h1><img src={pic1}  /><span style={{color:"blue"}}>2000+</span> Hours of content</h1><br />
               <h1><img src={pic2} /><span style={{color:"blue"}}>Exclusive </span>webiner access</h1><br />
               <h1><img src={pic3} />Schoolarship worth<span style={{color:"blue"}}>$94,500</span> </h1><br />
               <h1><img src={pic4}  /><span style={{color:"blue"}}>Ad free</span> learning exersise</h1><br />
                </div>
                <div className={style.right}>
                    <div className={style.charge}>
                    <div className={style.offer}>
                        <h1>
                        <button>1</button>
                        <button>2</button>
                        </h1>
                        <h1>
                        <p>signup</p>
                        <p>process</p>
                        </h1>
                        <p>Select your Subscription plan</p>
                    </div>  
                    <div className={style.plan}>
                           <h2><input type="radio" /></h2> 
                            <h1>12 months subscription</h1>
                            <p>
                            <h1>Total $99</h1>
                            <h1>$8 /mo</h1>
                            </p>
                    </div>
                     <br />
                    <div className={style.plan1}>
                   <h2> <input type="radio" /></h2>
                    <h1>12 Months Subscription</h1>
                    <p>
                    <h1>Total $179</h1>
                    <h1>$25 /mo</h1>
                    </p>
                    </div>
                    <br />
                    <div className={style.plan2}>
                   <h2> <input type="radio" /></h2>
                    <h1>6 Months Subscription</h1>
                    <p>
                    <h1>Total $179</h1>
                    <h1>$25 /mo</h1>
                    </p>
                    </div>
                    <br />
                    <div className={style.plan3}>
                   <h2> <input type="radio" /></h2>
                    <h1>3 Months Subscription</h1>
                    <p>
                    <h1>Total $179</h1>
                    <h1>$25 /mo</h1>
                    </p>
                    </div>
                   <br />
                   <hr />
                   <div className={style.plan4}>
                    <h1>Subscription free</h1>
                    <p>$18,500</p>
                    </div>
                    <div className={style.plan5}>
                     <p>
                    <h4> limited time offer</h4>
                    <h5>offer valid till march 25 march 2023</h5>
                    </p>
                    <h1>$18,500</h1>
                    </div>
                  <div className={style.total}>
                  <h1>Total (lnc.of 18% GST)</h1>
                  <h2>$149</h2>
                  </div>
                  <div className={style.payment}>
                    <div className={style.cancel}>CANCEL</div>
                    <div className={style.proceed}>PROCEED TO PAY</div>
                  </div>
                   </div>
                </div>
            </article>
       </section>

       <section id={style.space}>
       </section>

       <section id={style.color}>
        <article>
            <div>
                <h1>ICONS</h1>
               <div className={style.icons}>
               <div className={style.row1}>
                   <img src={pic6} alt="" />
                   <img src={pic2} alt="" />
                   <img src={pic1} alt="" />
               </div>
               <br />
               <div className={style.row2}>
                   <img src={pic} alt="" />
                   <img src={pic3} alt="" />
                   <img src={pic7} alt="" />
               </div>

               <br />
               
               <div className={style.row3}>
                   <img src={pic1} alt="" />
                   <img src={pic4} alt="" />
                  
                  
               </div>
               </div>
                <h2>COLORS</h2>
                <div className={style.box}>
              <div className={style.div1}> </div>
              <div className={style.div2}></div>
              <div className={style.div3}></div>
              <div className={style.div4}></div>
              </div>
              <div className={style.text}>
                <p>Text 1 <br />D9D9D9</p>
                <p>Text 2 <br />3C4843</p>
                <p>Text 3 <br />BEBEBE</p>
                <p>Text 4 <br />FFFFFF</p>
              </div>
              <div className={style.box1}>
              <div className={style.div1}> </div>
              <div className={style.div2}></div>
              <div className={style.div3}></div>
              <div className={style.div4}></div>
              </div>
              <div className={style.text1}>
                <p>Alert Text<br />D44314</p>
                <p>Alert fill <br />DE43FEC163<br />opesity 20%</p>
                <p>Alert border <br />De43FEC163 </p>
                <p>Disabled<br />E7E7E7</p>
              </div>
              <div className={style.box2}>
              <div className={style.div1}> </div>
              <div className={style.div2}></div>
              <div className={style.div3}></div>
              <div className={style.div4}></div>
              </div>
              <div className={style.text2}>
                <p>Success<br />43BA69</p>
                <p>Success 2<br />D7EDDO</p>
                <p>Danger 1<br />F77177</p>
                <p>Danger 2<br />FFOOOO</p>
              </div>
            <br />
            <div className={style.background}>
                <p>BACKGROUND</p>
            </div>
            <div className={style.box4}>
            <div className={style.div1}></div>
            </div>
               
            </div>
        </article>
       </section>
    </article>
</section>
       </div>
    )
}
export default Edyoda