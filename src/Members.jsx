function Members(props) {
  const { name, city } = props;

  return (
    <div className="membermain">
      <h1>{name}</h1>
      <p>{city}</p>
    </div>
  );
}
export default Members;
