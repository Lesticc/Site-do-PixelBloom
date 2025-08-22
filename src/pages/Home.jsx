import { VariablesContext } from '../contexts/variablesContext';
import { useContext } from 'react';

export default function Home(){

    const {textColor} = useContext(VariablesContext);
    const {menuOn} = useContext(VariablesContext);

    return (
        <>
            <main style={{color: `var(--colorText${textColor})`}} className={`mainHome ${menuOn ? 'hide' : ''}`}>
                <div className="homeBlock1">
                    <div className="leftSection">
                        <div className="tituloHome">
                            <h1>PixelBloom</h1>
                        </div>
                        <div className="desc">
                            <p>PixelBloom - The living canvas é uma activity do discord que tem um canvas global onde qualquer um pode colocar pixeis nele. Você pode desenhar o que você quiser! Como também qualquer outro jogador também pode fazer a mesma coisa, pois é um jogo multiplayer global.</p>
                            <p className="subtexto">Se você já jogou o /r/place do Reddit ou o wplace, a ideia é a mesma.</p>
                        </div>
                    </div>
                    <hr className='hr'/>
                    <div className="rightSection">
                        <img src='https://media.discordapp.net/attachments/1407892703592714474/1408070138531549244/canvas.png?ex=68a86701&is=68a71581&hm=478b1dabc6db9b002c267a5eaddb9e898bb6d16138c0917cdc6de138a7b152c5&=&format=webp&quality=lossless&width=1152&height=879' alt="Canvas exenplo do PixelBloom" className='PixelBloomCanvas'/>
                    </div>
                </div>
            </main>
        </>
    )
}