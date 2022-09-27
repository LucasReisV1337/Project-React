import {useHistory} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() { 
    
   //const history = useHistory()

    //function createPost(project) { 
        
    // initialize cost and services
        //project.cost = 0
        //project.services = []
    
   // }
    
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
 }
 
 
 export default NewProject