import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  relatedData: {
    height: 20,
    color: 'blueviolet',
    cursor: 'pointer',
    fontSize: 14,
    textAlign: 'center'
  },
  relatedText:{
    fontSize: 14,
    height: 20,
    textAlign: 'center'
  },
  relatedDataContainer: {
    display: 'flex',
    maxWidth: 800,
    height: 50,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    justifyContent: 'space-between',
  }
})


export const RelatedData = (props) => {
  const classes = useStyles()
  const { relatedData } = props
  return (
    <>
      <div className={classes.relatedDataContainer}>
        <div className={classes.relatedText}>
          {'Related:'}
        </div>
        {relatedData.map(data =>
          <div key={data} className={classes.relatedData}>
            {data}
          </div>
        )
        }
      </div>
    </>
  )
}