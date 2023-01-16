import Tags from 'components/Tags.js'

const TagSection = ({tagsData}) => {

    <section>
        {tagsData.map((item, index)=>{
            return <Tags tagText = {tagsData[index]}/>
        }) 
        }    
    </section>

}

export default TagSection