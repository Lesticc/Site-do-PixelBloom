import { VariablesContext } from "../contexts/variablesContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";
import { SiBuymeacoffee } from "react-icons/si";

import logo from "../assets/PixelBloom-Tituloo.svg";

import '../css/Vars.css';
import '../css/Header.css';

export default function Header(){
    const {color, setColor} = useContext(VariablesContext);
    const {textColor, setTextColor} = useContext(VariablesContext);
    const {menuOn, setMenuOn} = useContext(VariablesContext);

    function mudarCor(){
        color === 1 ? setColor(2) : setColor(1);
        color === 1 ? setTextColor(2) : setTextColor(1);
    }

    function fMenuOn(){
        setMenuOn(!menuOn);
    }

    function estoucommedo(){
        setMenuOn(false)
    }

    return (
        <>
            <header>
                <div className="headerContent" style={{backgroundColor: `${color === 1 ? 'var(--colorBackgroundHeader1)' : 'var(--colorBackgroundHeader2)'}`}}>
                    <div className="headerEncheEspacoVazio headerS">
                        <button  
                            onClick = {() => fMenuOn()}
                            className="socialButtonHeader menuButtonHeader"
                        >
                            <div className="linhas">
                                <div className={`linha linha1${menuOn ? ' rotate1' : ''}`}/>
                                <div className={`linha linha2${menuOn ? ' hide' :     ''}`}/>
                                <div className={`linha linha3${menuOn ? ' rotate3' : ''}`}/>
                            </div>
                        </button>
                        <Link to="https://github.com/Lesticc/Site-do-PixelBloom" className="linkHeader" target="_blank">
                            <motion.button  
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }} 
                            style={{color: `var(--colorGithubIcon)`}}
                            className="socialButtonHeader"
                            >
                                <FaGithub className="iconGithubHeader"/>
                            </motion.button>
                        </Link>
                        <Link to="https://buymeacoffee.com/meleus" className="linkHeader" target="_blank">
                            <motion.button  
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }} 
                            style={{color: `var(--colorGithubIcon)`}}
                            className="socialButtonHeader"
                            >
                                <SiBuymeacoffee className="iconGithubHeader"/>
                            </motion.button>
                        </Link>
                    </div>
                    <div className="headerTitle headerS">
                        <Link to="/" className="linkHeader">
                            <img src={logo} alt="Logo do PixelBloom" className="headerLogo"/>
                        </Link>
                    </div>
                    <div className="headerLinks headerS">
                        <Link to="https://discord.gg/pixelbloom" className="linkHeader" target="_blank">
                            <motion.button  
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.9 }} 
                                style={{color: `var(--colorDiscordIcon)`}}
                                className="socialButtonHeader"
                            >
                                <FaDiscord className="iconDiscordHeader"/>
                            </motion.button>
                        </Link>
                        <motion.button  
                            onClick={() => mudarCor()}
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }} 
                            style={{color: `var(--)`}}
                            className="socialButtonHeader colorButtonHeader"
                        >
                            {color === 1 ? <AiOutlineSun/> : <AiOutlineMoon/>}
                        </motion.button>
                    </div>
                </div>
            </header>
            <div className={`menuLinks ${menuOn? '' : 'hide'}`}>
                <div className="menuLinksContent" style={{backgroundColor: `var(--colorBackground${color})`}}>
                    <div className="linksMenu">
                        <Link to="https://github.com/Lesticc/Site-do-PixelBloom" className="linkHeader" target="_blank">
                            <motion.button  
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }} 
                            style={{color: `var(--colorGithubIcon)`}}
                            className="socialButtonHeader socialButtonMenu"
                            >
                                <FaGithub className="iconGithubHeader"/>
                                <p className="titleLinkMenu">Github</p>
                            </motion.button>
                        </Link>
                        <Link to="https://discord.gg/pixelbloom" className="linkHeader" target="_blank">
                            <motion.button  
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.9 }} 
                                style={{color: `var(--colorDiscordIcon)`}}
                                className="socialButtonHeader socialButtonMenu"
                            >
                                <FaDiscord className="iconDiscordHeader"/>
                                <p className="titleLinkMenu">Discord</p>
                            </motion.button>
                        </Link>
                        <Link to="https://buymeacoffee.com/meleus" className="linkHeader" target="_blank">
                            <motion.button  
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }} 
                            style={{color: `var(--colorGithubIcon)`}}
                            className="socialButtonHeader socialButtonMenu"
                            >
                                <SiBuymeacoffee className="iconGithubHeader"/>
                                <p className="titleLinkMenu linkBuyMeACoffeeTitle">Buy me a Coffee</p>
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => estoucommedo()}
                            className="estoucommedo"
                        >
                            estou com medo (clica aqui para sair do menu)
                        </motion.button>
                        <p className="creditosMenu" style={{color:`var(--colorText${textColor})`}}>Site feito por Lestic - 2025</p>
                    </div>
                </div>
            </div>
        </>
    );
}