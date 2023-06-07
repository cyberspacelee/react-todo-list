import React, {ChangeEvent} from 'react';
import {PlusCircleOutlined, PlusOutlined} from "@ant-design/icons";

interface InputProps {
    onChange: (value: string, isCompleted ?: boolean) => void;
    value: string;
    className: string;
}

function Input(props: InputProps) {
    const { onChange, value, className} = props;
    const [isInputing, setIsInputing] = React.useState<boolean>(false);
    const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value, false);
        setIsInputing(true);
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Entry") {
            onChange(event.currentTarget.value, true);
        }
    }

    const handleButtonBlur = () => {
        setIsInputing(false);
    }

    return (
        <div className={`bg-blue-700 h-10 p-2 flex items-center ${className}`}>
            <div className="icon mr-2 text-white flex items-center">
                {
                    isInputing ? <PlusCircleOutlined /> : <PlusOutlined />
                }
            </div>
            <input
                value={value}
                onChange={handleChangeValue}
                onKeyDown={handleKeyDown}
                onBlur={handleButtonBlur}
                className="bg-transparent w-full flex-auto text-white outline-inherit text-center"/>
        </div>
    );
}

export default React.memo(Input);