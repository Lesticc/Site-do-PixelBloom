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
                        <img src='https://media.discordapp.net/attachments/1407892703592714474/1410400055692754974/canvas.png?ex=68b0e0e9&is=68af8f69&hm=4ee363a7a6983f8aa0358e250af4ba4eb8b1c9c9210924b4209c3bc8a6933b40&=&format=webp&quality=lossless&width=929&height=938' alt="Canvas exenplo do PixelBloom" className='PixelBloomCanvas'/>
                    </div>
                </div>
            </main>
        </>
    )
}