export const Description = (props) => {
    return (
        <div className={`${props.size} ${props.margin} ${props.color}`}>
            {props.description}
        </div>
    )
}
