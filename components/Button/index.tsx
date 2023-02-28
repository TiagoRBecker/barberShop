export type Props={
 className:string
 title:string
}


const Button = ({title, className}:Props)=>{
    return (
        <button className={className}>{title}</button>
    )
}
export default Button