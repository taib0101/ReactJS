export const Text = ({ propsFunction, propsFunction1 }) => {
    if(propsFunction1)
        return <p>{propsFunction1("nested composition")}</p>

    if(propsFunction)
        return <p>{propsFunction("Text", "props Function")}</p>
    
    return <p>There have no composition</p>
}