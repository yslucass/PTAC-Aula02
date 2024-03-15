import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("")
    return (
        <main>
            <form>
                <input type="text" name="" id="" onChange={(event)=> setNome(event.target.value)}/>
                {nome}

                <input type="text" name="" id="" onChange={(event)=> setTelefone(event.target.value)}/>
                {telefone}
            </form>
        </main>
    )
}