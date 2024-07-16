import Banner from './components/Banner';
import Footer from './components/Footer'
import CardForm from './components/CardForm';
import { useState } from 'react';
import Team from './components/Team';

function App() {

  const listTeams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF',
    },
    {
      name: 'Data Sciense',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8',
    },
    {
      name: 'UX-Design',
      primaryColor: '#D86EBF',
      secundaryColor: '#FAE5F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FEBA05',
      secundaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação & Gestão',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF',
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const onNewCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div>
      <Banner/>
      <CardForm teams={listTeams.map(team => team.name)} onRegistered={collaborator => onNewCollaboratorAdded(collaborator)}/>
      {listTeams.map(team => {
        return (
          <Team 
          key={team.name} 
          name={team.name} 
          primaryColor={team.primaryColor} 
          secundaryColor={team.secundaryColor}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.name)} />
        )
      })}
      <Footer/>
    </div>
  );
}

export default App;
