
function Card(props){
    const{
      name,
      lastname,
      title,
      description,
      onClickDelete,
      onClickEdit,
    } = props;

    function handleDelete(){
      console.log(`Clickeo en delete`)
      onClickDelete(props)
    }

    function handleEdit(){
      console.log(`Clickeo en editar`)
      onClickEdit(props)
    }
  
    return (
      <article>
        <ul>
          <li>Full Name: {name} {lastname}</li>
          <li>Titulo: {title}</li>
          <li>Descripcion: {description}</li>
        </ul>
        <button onClick={handleDelete}>Eliminar</button>
        <button onClick={handleEdit}>Editar</button>
      </article>
    )
};
  
export { Card };