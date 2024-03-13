import { useState } from "react"

const useFormValidate = (validate: (str: string) => boolean) => {
    
    const [isTouched, setIsTouched] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>('');

    const inputIsValid: boolean = validate(inputValue);
    const inputIsInvalid = isTouched && !inputIsValid;

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        console.log(inputIsInvalid)
    };

    const updateInputTouched = () => {
        setIsTouched(true)
        console.log(isTouched)
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