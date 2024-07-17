
import SuspendedList from "../SuspendedList"
import Buttom from "../Buttom"
import TextField from "../TextField"
import ColorField from "../ColorField"
import "./style.css"
import { useState } from "react"

const CardForm = (props) => {
    
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [img, setIMG] = useState('')
    const [team, setTeam] = useState('')

    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const onSaveCollaborator = (event) => {
        event.preventDefault()
        props.onRegistered({name, office, img, team})
        setName('')
        setOffice('')
        setIMG('')
        setTeam('')
    }

    const onSaveTeam = (event) => {
        event.preventDefault()
        props.onNewTeam({name: teamName,color:teamColor})
        setTeamName('')
        setTeamColor('')
    }

    return (
        <section className="card-form">
            <form onSubmit={event => onSaveCollaborator(event)} >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo"
                    value={office}
                    onChange={value => setOffice(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    value={img}
                    onChange={value => setIMG(value)}
                />
                <SuspendedList 
                    required={true} 
                    label="Times" 
                    items={props.teams}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Buttom>Criar Card</Buttom>
            </form>
            <form onSubmit={event => onSaveTeam(event)}>
                <h2>Preencha os campos para criar um novo time</h2>
                <TextField 
                    required
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onChange={value => setTeamName(value)}
                />
                <ColorField 
                    required
                    label="Cor" 
                    value={teamColor}
                    onChange={value => setTeamColor(value)}
                />
                <Buttom>Criar time</Buttom>
            </form>
        </section>
    )
}

export default CardForm