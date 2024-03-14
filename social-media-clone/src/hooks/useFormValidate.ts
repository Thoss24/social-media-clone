import { useState } from "react"

const useFormValidate = (validate: (str: string) => boolean) => {
    
    const [isTouched, setIsTouched] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const inputIsValid: boolean = validate(inputValue);
    const inputIsInvalid = isTouched && !inputIsValid;

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    };

    const updateInputTouched = () => {
        setIsTouched(true)
    };

    const resetInput = () => {
        setIsTouched(false)
        setInputValue('')
    };

    return {
        inputIsValid,
        inputIsInvalid,
        updateInput,
        updateInputTouched,
        resetInput
    }
}

export default useFormValidate