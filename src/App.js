import Banner from './components/Banner';
import Footer from './components/Footer'
import CardForm from './components/CardForm';
import { useState } from 'react';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#D9F7E9',
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#E8F8FF',
    },
    {
      id: uuidv4(),
      name: 'Data Sciense',
      color: '#F0F8E2',
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#FDE7E8',
    },
    {
      id: uuidv4(),
      name: 'UX-Design',
      color: '#FAE5F5',
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFF5D9',
    },
    {
      id: uuidv4(),
      name: 'Inovação & Gestão',
      color: '#FFEEDF',
    }
  ])

  const [collaborators, setCollaborators] = useState([])

  const onNewCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, {...collaborator, id: uuidv4(), fav: false}])
  }

  const onNewTeamAdded = (newTeam) => {
    setTeams([...teams, {...newTeam, id: uuidv4()}])
  }

  const changeTeamColor = (id, color) => {
    setTeams(teams.map(team => {
      if(team.id === id) {
        team.color = color
      }
      return team
    }))
  }

  const deletCollaborator = (id) => {
    setCollaborators(collaborators.filter( collaborator => {
      if(collaborator.id !== id) {
        return collaborator
      }
      return null
    }))
  }

  const favoriter = (id) => {
    console.log(id)
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id) {
        collaborator.fav = !collaborator.fav
      }
      return collaborator
    }))
  }

  return (
    <div>
      <Banner/>
      <CardForm 
        teams={teams.map(team => team.name)} 
        onRegistered={collaborator => onNewCollaboratorAdded(collaborator)}
        onNewTeam={team => onNewTeamAdded(team)}
      />
      {(collaborators.length > 0) && <section className='teams-section'>
        <h2>Minha Organização</h2>
        {teams.map((team, index) => {
          return (
            <Team 
              key={index}
              collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} 
              team={team}
              onDelet={deletCollaborator}
              changeColor={changeTeamColor}
              onFav={favoriter}
            />
          )
        })}
      </section>}
      <Footer/>
    </div>
  );
}

export default App;
