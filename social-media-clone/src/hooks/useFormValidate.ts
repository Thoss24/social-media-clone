import { useState } from "react"

const useFormValidate = () => {
    
    const [touched, setIsTouched] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>('');

    

    const validateEmail = (str: string) => {
        // improve email validation
        return str.includes('@')
    };

    const validatePassword = (str: string) => {
        // improve password validation 
        
    };

    const updateInput = (event: Event) => {
        const {value} = event.target as unknown as {value: string}
        setInputValue(value)
    };

    const updateInputTouched = () => {
        setIsTouched(true)
    };

    const resetInput = () => {
        setIsTouched(false)
        setInputValue('')
    }

    return {
        
    }
}