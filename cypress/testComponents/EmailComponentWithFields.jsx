import React, { useEffect } from 'react';
import { validateFields } from '../../src/formUtils';
import { useValidation } from '../../src/useValidation';

const EmailComponentWithFields = (props) => {
    const email = useValidation(props.email, props.emailValidation);

    useEffect(() => {
        var validationResult = validateFields([email]);
        if (typeof validationResult === "boolean") {
            props.onValidateFields(validationResult);
        } else  {
            validationResult.then(r => props.onValidateFields(r));
        }
    }, []);

    return (<div></div>);
}

export default EmailComponentWithFields;