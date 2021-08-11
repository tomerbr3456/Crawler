import { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Crawler } from './Crawler'

const useStyles = createUseStyles({
  searchBarContainer: {
    display: 'flex',
    width:'1100px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  space: {
    height: 50
  },
  searchBar: {
    width: '90%',
    height: 50,
    border: '2px solid rgb(59, 59, 59)',
    paddingLeft: 10,
    color: 'black',
    fontSize: 16,
    borderRadius: 3
  },
  searchButton: {
    width: '10%',
    height: 56,
    color: '#fff',
    backgroundColor: '#3665f3',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export function SearchBar(props) {
  const [searchedName, setSearchedName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSearchedName = (e) => {
    setSearchedName(e.target.value)
    setIsSubmitted(false)
  }

  const handleIsSubmitted = () => {
    setIsSubmitted(true)
  }


  const classes = useStyles()
  return (
    <>
      <div className={classes.space} />
      <div className={classes.searchBarContainer}>
        <input className={classes.searchBar} value={searchedName} placeholder={'search somthing'} onChange={handleSearchedName} />
        <div className={classes.searchButton} onClick={handleIsSubmitted}>
          {'Search'}
        </div>
      </div>
      {isSubmitted ? <Crawler searchedName={searchedName} /> : <></>}

    </>
  )
}
