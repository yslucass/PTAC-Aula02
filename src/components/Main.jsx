import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("")
    const [listaContatos, setListaContatos] = useState([])
    const [cpf, setCpf] = useState("")

   const registrar = (event) =>{
     setListaContatos([...listaContatos, {nome, telefone, cpf}])
     
   };
  
    return (
        <main>
            <form action="" onSubmit={registrar} >
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="" id="" onChange={(event)=> setNome(event.target.value)}/>
                {nome}
          
                <label htmlFor="telefone">Telefone:</label>
                <input type="tel" name="" id="" onChange={(event)=> setTelefone(event.target.value)}/>
                {telefone}

                <label htmlFor="cpf">Cpf:</label>
                <input type="text" name="" id="" onChange={(event)=> setCpf(event.target.value)}
                  {cpf}
          <button>Salvar</button>
            </form>
        </main>
    )
}