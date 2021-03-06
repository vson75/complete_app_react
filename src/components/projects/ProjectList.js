import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        //
        let projects = this.props.projects;
        const projectList = projects ? (
            projects.map(project => {
                return(
                        <ProjectSummary projectDetail={project} key={project.id}/>
                );
            })
        ) : 
        (
            <div className="project-list">
                No project available
            </div>
        );
        return (
            <div className="project-list section">
              {projectList}
            </div>
        );
    }
}


export default ProjectList;