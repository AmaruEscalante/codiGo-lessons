
export default function Card(props){
    const{
      name,
      lastname,
      title,
      description,
    } = props;
  
    return (
      <article>
        <ul>
          <li>Full Name: {name} {lastname}</li>
          <li>Titulo: {title}</li>
          <li>Descripcion: {description}</li>
        </ul>
      </article>
    )
};
  
// export default Card;