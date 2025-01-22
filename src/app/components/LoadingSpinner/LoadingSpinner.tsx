import './LoadingSpinner.scss'

export default function LoadingSpinner({ ...props }) {
    const { } = props;

    return (
        <div className='container relative flex justify-center items-center h-[inherit]'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}