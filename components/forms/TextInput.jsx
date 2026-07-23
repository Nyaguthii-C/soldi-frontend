// export default function TextInput({
//     label,
//     name,
//     value,
//     onChange,
//     type = "text",
//     placeholder = "",
//     error = "",
// }) {
//     return (
//         <div className="mb-3">

//             <label className="form-label">
//                 {label}
//             </label>

//             <input
//                 type={type}
//                 name={name}
//                 value={value}
//                 placeholder={placeholder}
//                 onChange={onChange}
//                 className={`form-control ${error ? "is-invalid" : ""}`}
//             />

//             {error && (
//                 // <div className="invalid-feedback">
//                 //     {error}
//                 // </div>
//                 <div className="invalid-feedback">
//                     {Array.isArray(error) ? error[0] : error}
//                 </div>
//             )}

//         </div>
//     );
// }



export default function TextInput({

    label,

    name,

    value,

    onChange,

    type = "text",

    placeholder = "",

    readOnly = false,

}) {

    return (

        <div className="mb-3">

            <label className="form-label">

                {label}

            </label>

            <input

                type={type}

                name={name}

                value={value}

                placeholder={placeholder}

                onChange={onChange}

                readOnly={readOnly}

                className="form-control"

            />

        </div>

    );

}