
export const onHeaderFilters=()=>{
    
    const onMaleGender = ()=>{
        dispatch(selectGender('male'))
    }
    const onFemaleGender =()=>{
        dispatch(selectGender('female'))
    }
    const onSale = ()=>{
        dispatch(selectSale(!sale))
    }
    const onAllProducts =()=>{
        dispatch(selectGender(''))
    }

    const onShowRegistrationForm = (x=true)=>{
        setShowRegistrationForm(x)
    }
}