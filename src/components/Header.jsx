import { VariablesContext } from "../contexts/variablesContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { FaDiscord, FaGithub } from "react-icons/fa";
import { AiOutlineSun, AiOutlineMoon } from "react-icons/ai";

import logo from "../assets/PixelBloom-Tituloo.svg";

import '../css/Vars.css';
import '../css/Header.css';

export default function Header(){
    const {color, setColor} = useContext(VariablesContext);
    const {textColor, setTextColor} = useContext(VariablesContext);

    function mudarCor(){
        color === 1 ? setColor(2) : setColor(1);
        color === 1 ? setTextColor(2) : setTextColor(1);
    }

    return (
        <header>
            <div className="headerContent" style={{backgroundColor: `${color === 1 ? 'var(--colorBackgroundHeader1)' : 'var(--colorBackgroundHeader2)'}`}}>
                <div className="headerEncheEspacoVazio headerS">
                    <Link to="#" className="linkHeader" /*target="_blank"*/>
                        <motion.button  
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                        style={{color: `var(--colorGithubIcon)`}}
                        className="socialButtonHeader"
                        >
                            <FaGithub className="iconGithubHeader"/>
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
                        className="socialButtonHeader"
                    >
                        {color === 1 ? <AiOutlineSun/> : <AiOutlineMoon/>}
                    </motion.button>
                </div>
            </div>
        </header>
    );
}