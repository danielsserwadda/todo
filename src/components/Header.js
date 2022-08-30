import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, toggleForm, showForm }) => {
  return (
    <header className='header'>
        <h1>{ title }</h1>
        <Button btnController={toggleForm} showForm={showForm} btnText={ showForm ? 'Close' : 'Add' } color={ showForm ? 'red' : 'green' } />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header