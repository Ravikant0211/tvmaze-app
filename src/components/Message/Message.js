import styles from './Message.module.css'

const Message = props => {
  return (
    <div className={styles.text}>
        Search by {props.selectedChoice} name
    </div>
  )
}

export default Message