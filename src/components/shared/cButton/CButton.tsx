import React, {ReactElement, useState} from "react";
import SpinnerIcon from "../../../public/icons/Spinner.icon";

type ButtonProps = {
    text?: string
    type?: 'button' | 'submit' | 'reset'
    icon?: ReactElement
    disabled?: boolean
    size?: 'small' | 'medium' | 'large'
    className?: string
    variant?: 'primary' | 'secondary' | 'special' | 'danger' | 'success' | 'gray'
    loading?: boolean
    outlined?: boolean
    capitalize?: boolean
    iconSide?: 'left' | 'right'
    onClick?: () => void
    subText?: string
    id?: string
    download?: boolean
}
const CButton: React.FC<ButtonProps> = ({
    text = '',
    type = 'button',
    icon,
    disabled = false,
    size = 'medium',
    className,
    variant = 'primary',
    loading = false,
    outlined = false,
    capitalize = false,
    iconSide = 'left',
    onClick,
    subText = '',
    id,
    download = false
}) => {
    const [isLoading, setISLoading] = useState(loading ?? false)
    return (
        <>
            <h1>this is button</h1>
            <button
                id={id}
                type={type}
                disabled={disabled}
                onClick={onClick}
            >

                {isLoading && (
                    <div>
                        <SpinnerIcon size={18} />
                    </div>
                )}

                <div>
                    <div>
                        {text}
                    </div>
                    <div>{subText}</div>
                </div>

            </button>
        </>
    )
}

export default CButton