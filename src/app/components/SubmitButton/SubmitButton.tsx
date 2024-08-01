import { useFormStatus } from "react-dom";
import Button from "../Button/Button";

export default function SubmitButton({ ...props }) {
    const {
        buttonText = "Submit",
    } = props;

    const { pending, data, method, action } = useFormStatus();
    console.log(pending);
    console.log(data);
    console.log(method);
    console.log(action);
    return (
        <Button type="submit" disabled={pending}>{buttonText}</Button>
    )
}