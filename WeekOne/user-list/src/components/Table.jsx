import PropTypes from 'prop-types'
import './Table.css'

const Table = ({list}) => {
  return(
    <table>
        <thead>
          <tr>
            <th>#</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {list.map((currentElement, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{currentElement}</td>
            </tr>
          ))}
        </tbody>
    </table>
  )
}

Table.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string)
};


export default Table;