

import { useEffect, useState } from 'react'
import { postData } from './Api/getPage'
import { Cards } from './Cards'
import { RelatedData } from './RelatedData'


export function Crawler(props) {
  const { searchedName } = props
  const [ebayData, setEbayData] = useState()

  useEffect(() => {
    postData('http://localhost:4000/root', { name: searchedName })
      .then(res => { setEbayData(res); console.log(res) })
  }, [searchedName])
  return (
    <>
      {ebayData ?
        (
          <div>
            <RelatedData relatedData={ebayData.relatedData} />
            <Cards ebayData={ebayData.items} />
          </div>) : <></>}
    </>
  )
}
