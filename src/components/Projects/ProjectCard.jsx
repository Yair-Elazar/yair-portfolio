import React from 'react'
import styles from "./ProjectCard.module.css"

export const ProjectCard = ({
  project: {title, imageSrc, description, skills, demo, source}
}) => {
  return(
    <div className={styles.container}>
      <img 
        src={"/assets/" + imageSrc} 
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        {demo && <a href={demo} target="_blank" rel="noreferrer" className={styles.link}>Demo</a>}
        {source && <a href={source} target="_blank" rel="noreferrer" className={styles.link}>Source</a>}
      </div>     
    </div>
  )
}
