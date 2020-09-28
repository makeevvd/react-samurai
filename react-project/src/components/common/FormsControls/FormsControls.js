import React from "react";
import styles from "./FormsContros.module.css"

// export const Textarea = ({input, meta, ...props}) => {
//     let hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (hasError && styles.error)}>
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//
//     )
// }
//
// export const Input = ({input, meta, ...props}) => {
//     let hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' ' + (hasError && styles.error)}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//
//     )
// }


export const Element = Element => ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            <div>
                <Element {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Input = Element('input');
export const Textarea = Element('textarea');