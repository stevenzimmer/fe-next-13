


type Props = {
  params: {
    id: Array<string>
  }
}

export default function DocsId({params}:Props) {
  console.log( params );

  return (
    <div>DocsId {  params.id.map( (id) => {
      return id ;
    } ).join( ' - ' )}</div>
  )
}
