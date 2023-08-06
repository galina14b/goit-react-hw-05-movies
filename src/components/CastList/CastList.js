const CastList = ({name, img, character}) => {
  return (
    <>
      <img src={img} alt="" width={200}/>
      <h3>{name}</h3>
      <p>Character: {name} / {character}</p>
    </>
  )
}

export default CastList;