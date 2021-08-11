import { Card } from './Card'

export const Cards = (props) => {
  const { ebayData } = props
  return (
    <>
      <div style={{ display: 'flex',flexFlow: 'wrap',justifyContent:'space-between',maxWidth: 1100 }}>
        {ebayData.map((data, index) => {
          // let breakLine
          // if (index % 3 === 0)
          //    breakLine =  <hr/>
            return(
            <div>
             {/* {breakLine} */}
            <Card
              key={data}
              data={data}
            />
            </div>
        )})}
      </div>
    </>
  )
}