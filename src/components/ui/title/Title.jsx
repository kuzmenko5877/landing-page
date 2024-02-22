export const Title = (props) => {
    return (
        <div className={`${props.size} ${props.margin}`}>
            { props.title }
        </div>
    )
}

