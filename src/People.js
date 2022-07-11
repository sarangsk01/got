function People(props) {
  return (
    <ul className="cards">
      {props.everyone.map((person) => {
        return (
          <li key={person.name} className="person">
            <img
              className="person-image"
              src={person.image}
              alt={person.name}
            />
            <h2 className="name">{person.name}</h2>
            <p className="description">{person.description}</p>
            <button className="btn">Know More!</button>
          </li>
        );
      })}
    </ul>
  );
}
export default People;
