
const Tags = ({tagText}) => {
  return (
  <>
    <button type="button" className="bg-slate-700 text-slate-100">{tagText}</button>
    <button type="button" className="bg-slate-700 text-slate-100">bye</button>
    {console.log(tagText)}
  </>
  )
}

export default Tags