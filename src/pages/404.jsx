import { VariablesContext } from "../contexts/variablesContext";
import { useContext } from "react";

export default function NotFound() {
    const { textColor } = useContext(VariablesContext);
    const url = window.location.href;

  return (
    <main className="notFound" style={{color: `var(--colorText${textColor})`}}>
        <h1 style={{
            fontFamily:"Roboto",
            fontWeight:"500",
            textAlign:"center",
        }}>404 - Página não encontrada</h1>
        <p style={{
            fontFamily:"Roboto",
            fontWeight:"300",
            textAlign:"center",
        }}>A página que você está procurando não existe.</p>

        <p style={{
            fontFamily:"Roboto",
            fontWeight:"300",
            fontSize:"12px",
            textAlign:"center",
            marginTop:"10vh",
        }}>{url}</p>
    </main>
  );
}