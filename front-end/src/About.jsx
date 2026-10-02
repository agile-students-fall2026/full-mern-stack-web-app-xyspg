import { useState, useEffect } from 'react'

const AboutPage = props => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data?.text }} />
      <br />
      <img src={data?.imageUrl} alt="" />
    </div>
  )
}

export default AboutPage
