import { useReducer } from "react";
import formFieldsReducer from "../reducers/form-fields-reducer";
import { 
    FormFieldsReducerInput, 
    FormFieldsReducerState, 
    FormFieldsReducerType 
} from "../types/form-reducer.d";

const useFormFields = (initialState?: FormFieldsReducerState)=>{
    
    const [state, dispatch] = useReducer(formFieldsReducer.reducer, initialState ?? formFieldsReducer.initialState)

    const handleFirtsname = (value: string)=>{
        dispatch({type: FormFieldsReducerType.FIRSTNAME, payload: {value} })
    }

    const handleLastname = (value: string)=>{
        dispatch({type: FormFieldsReducerType.LASTNAME, payload: {value} })
    }

    const handleEmail = (value: string)=>{
        dispatch({type: FormFieldsReducerType.EMAIL, payload: { value } })
    }

    const handlePhone = (value: string)=>{
        dispatch({type: FormFieldsReducerType.PHONE, payload: {value} })
    }

    const handleAddress1 = (value: string)=>{
        dispatch({type: FormFieldsReducerType.ADDRESS1, payload: {value} })
    }

    const handleAddress2 = (value: string)=>{
        dispatch({type: FormFieldsReducerType.ADDRESS2, payload: {value} })
    }

    const handleCompany = (value: string)=>{
        dispatch({type: FormFieldsReducerType.COMPANY, payload: {value}})
    }

    const handleCountry = (value: string)=>{
        dispatch({type: FormFieldsReducerType.COUNTRY, payload: {value}})
    }

    const handleProvince = (value: string)=>{
        dispatch({type: FormFieldsReducerType.PROVINCE, payload: {value}})
    }

    const handleCity = (value: string)=>{
        dispatch({type: FormFieldsReducerType.CITY, payload: {value}})
    }

    const handleZip= (value: string)=>{
        dispatch({type: FormFieldsReducerType.ZIP, payload: {value}})
    }

    const isFieldsOk = (): boolean => {
        for(let key of Object.keys(state)){
            let field = state[key as keyof(FormFieldsReducerState)] as FormFieldsReducerInput;
            if(field.error) return false;
        }

        return true;
    };

    return {
        state,
        isFieldsOk,
        handleFirtsname,
        handleLastname,
        handleEmail,
        handlePhone,
        handleAddress1,
        handleAddress2,
        handleCompany,
        handleCountry,
        handleProvince,
        handleCity,
        handleZip
    }
}

export default useFormFields;