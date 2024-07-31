import './LoadingSpinner.scss'

export default function LoadingSpinner({ ...props }) {
    const { } = props;

    return (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    )
}