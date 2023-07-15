import Button from "./Button"
import logo from "../assets/logo.png"
import { useState } from "react";
const divide = <svg xmlns="http://www.w3.org/2000/svg" width="41" height="54" viewBox="0 0 41 54" fill="none">
<path d="M40.4195 27.0919L1.99999 27.3276" stroke="black" stroke-width="11"/>
<circle cx="20.6875" cy="45.6875" r="5.5" stroke="black" stroke-width="4.375"/>
<circle cx="20.6875" cy="7.6875" r="5.5" stroke="black" stroke-width="4.375"/>
</svg>
const deleteico = <svg xmlns="http://www.w3.org/2000/svg" width="81" height="59" viewBox="0 0 81 59" fill="none">
<g filter="url(#filter0_i_58_124)">
  <path d="M81 54.5C81 56.3856 81 57.3284 80.4142 57.9142C79.8284 58.5 78.8856 58.5 77 58.5L30.5984 58.5C29.7747 58.5 29.3628 58.5 28.993 58.3456C28.6232 58.1913 28.3336 57.8984 27.7544 57.3128L2.78185 32.0628C1.46924 30.7356 0.812935 30.072 0.812935 29.25C0.812935 28.428 1.46924 27.7644 2.78185 26.4372L27.7544 1.18725C28.3336 0.601566 28.6232 0.308727 28.993 0.154366C29.3628 0 29.7747 3.8147e-06 30.5984 3.8147e-06L77 3.8147e-06C78.8856 3.8147e-06 79.8284 3.8147e-06 80.4142 0.585789C81 1.17157 81 2.11438 81 4V54.5Z" fill="white"/>
  <rect x="37.6339" y="50.0122" width="12" height="46.6667" rx="1" transform="rotate(-132.5 37.6339 50.0122)" fill="black"/>
  <rect x="29.6544" y="16.6342" width="12" height="46.6667" rx="1" transform="rotate(-42.5 29.6544 16.6342)" fill="black"/>
</g>
<defs>
  <filter id="filter0_i_58_124" x="0" y="0" width="81" height="62.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_58_124"/>
  </filter>
</defs>
</svg>;  
function CalcBody () {
    const [equation, setEquation] = useState({
        eq:"",
        res:"",
    })
    function handleClick(event) {
        const value = event.target.value;
        if (value === "=") {
            if (equation.eq !== "") {
                var ans = "";
                try {
                    ans = eval(equation.eq)
                }
                catch (err) {
                    setEquation({res: "Math Error"});
                }
                if (ans === undefined) 
                {setEquation({res: "Math Error"})}
                else {setEquation ({res: ans, eq: ""})}
            }
        }
        else if (value === "clear") {
            setEquation({eq:"", res:""})
        }
        else if (value === "delete") {
            var str = equation.eq;
            var subStr = str.slice(0, -1);
            setEquation({eq: subStr});
        }
        else {
            setEquation({eq: (equation.eq += value) });
        }
    }
    console.log(equation.eq) 
    return (
        <div className="calcbody-container">
            <div className="equation">
                <span className="equation-1">{equation.eq}</span>
            </div>
            <div className="result">
                <span className="result-1">{equation.res}</span>
                <img src={logo} id="logo" />
            </div>
            <div className="buttons-container">
                <Button value="clear" onClick={handleClick} className="rect" number="C" />
                <Button value="/" onClick={handleClick} number="/" className="rect"/>
                <Button value="*" onClick={handleClick} className="rect" number="X" />
                <Button value="delete" onClick={handleClick} className="rect del" number="Del" />
                <Button value="1" onClick={handleClick} className="round" number="1" />
                <Button value="2" onClick={handleClick} className="round" number="2" />
                <Button value="3" onClick={handleClick} className="round" number="3"/>
                <Button value="-" onClick={handleClick} className="rect" number="-"/>
                <Button value="4" onClick={handleClick} className="round" number="4"/>
                <Button value="5" onClick={handleClick} className="round" number="5"/>
                <Button value="6" onClick={handleClick} className="round" number="6"/>
                <Button value="+" onClick={handleClick} className="rect" number="+"/>
                <Button value="7" onClick={handleClick} className="round" number="7"/>
                <Button value="8" onClick={handleClick} className="round" number="8"/>
                <Button value="9" onClick={handleClick} className="round" number="9"/>
                <Button value="=" onClick={handleClick} className="equal" id="equal" number="="/>
                <Button value="%" onClick={handleClick} className="round" number="%"/>
                <Button value="0" onClick={handleClick} className="round" number="0"/>
                <Button value="." onClick={handleClick} className="round" number="."/>
            </div>
        </div>
    )
}
export default CalcBody;