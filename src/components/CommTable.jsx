import React from 'react'

export default function CommTable({ data }) {
  return (
    <table className="comm-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Type</th>
          <th>Title</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ year, type, title, link, venue }) => (
          <tr key={`${year}-${title}`}>
            <td>{year}</td>
            <td>{type}</td>
            <td>
              {link
                ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                : title}
            </td>
            <td>{venue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function MainPubTable({ data }) {
  return (
    <table className="pub-table">
          <thead>
          <tr>
              <th>Year</th>
              <th>Journal</th>
              <th>Title</th>
          </tr>
          </thead>
          <tbody>
          {mainPublications.map(({ year, journal, title, link}) => (
              <tr key={`${year}-${title}`}>
              <td>{year}</td>
              <td>{journal}</td>
              <td>
                  {link
                  ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                  : title}
              </td>
              </tr>
          ))}
          </tbody>
      </table>
  )
}
