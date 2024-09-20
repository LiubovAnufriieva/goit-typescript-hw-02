import css from "./ErrorMessage.module.css"
import { ErrorProps } from "./ErrorMessage.types";

const ErrorMassage: React.FC<ErrorProps> = ({message}) => {
    return (
        <p className={css.error}>{message}</p>
    )
}
export default ErrorMassage;