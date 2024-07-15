
import SuspendedList from "../SuspendedList"
import Buttom from "../Buttom"
import TextField from "../TextField"
import "./style.css"
import { useState } from "react"

const CardForm = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX-Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [img, setIMG] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        console.log("Form foi submetido", name, office, img, team)
    }

    return (
        <section className="card-form">
            <form onSubmit={onSave} >
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
                    items={times}
                    value={team}
                    onChange={value => setTeam(value)}
                />
                <Buttom>Criar Card</Buttom>
            </form>
        </section>
    )
}

export default CardForm