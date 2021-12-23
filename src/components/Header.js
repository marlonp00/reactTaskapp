
import Button from './Button'

const Header = (props) => {

    const onClick = () => {
        console.log('clicked')
    }
    
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick={onClick} color='green' text='add' />        
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
  }

  Header.props = {title : 'test'}

export default Header
