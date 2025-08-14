import React from 'react'

export default function PubTable({ data }) {
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
          {data.map(({ year, journal, title, link}) => (
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
