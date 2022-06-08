import React from 'react'
import selfie from "../assets/AN1.jpg"

export const About = () => {
  return (
    <div style={{display:"flex", paddingTop:"2em"}}>
        <img style={{width:"300px", borderRadius:"12px"}} src={selfie} alt="" />
        <div style={{paddingLeft:"2em"}}>
            <h1>Aleksy Nowak</h1>
            <div>
                Moim jednym z zainteresowań jest granie w gry komputerowe, jedną z moich ulubionych jest Phasmophobia, RDR2 czy Total war warhammer 2.
                Moje kolejne hobby to programowanie, znam takie języki jak: Phyton, Java, JavaScript oraz HTML. Programowania nauczył mnie mój ojciec, który sam pracuje jako programista.
                Innymi mniej ważnymi pasjami są: duchy / paranormalne zjawiska, dziki zachód oraz składanie komputerów.
            </div>
        </div>
    </div>
  )
}
