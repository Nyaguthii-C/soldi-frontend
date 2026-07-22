const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default function SummaryHeader({

    month,

    year,

    onMonthChange,

    onYearChange,

    onLoad,

}) {

    const currentYear = new Date().getFullYear();

    return (

        <div className="card shadow-sm mb-4">

            <div className="card-body">

                <h3 className="mb-4">

                    Monthly Summary

                </h3>

                <div className="row">

                    <div className="col-md-5">

                        <select

                            className="form-select"

                            value={month}

                            onChange={(e)=>

                                onMonthChange(

                                    Number(e.target.value)

                                )

                            }

                        >

                            {MONTHS.map((name,index)=>(

                                <option

                                    key={index}

                                    value={index+1}

                                >

                                    {name}

                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="col-md-3">

                        <select

                            className="form-select"

                            value={year}

                            onChange={(e)=>

                                onYearChange(

                                    Number(e.target.value)

                                )

                            }

                        >

                            {[

                                currentYear-2,

                                currentYear-1,

                                currentYear,

                                currentYear+1

                            ].map(y=>(

                                <option key={y}>

                                    {y}

                                </option>

                            ))}

                        </select>

                    </div>

                    <div className="col-md-4">

                        <button

                            className="btn btn-primary w-100"

                            onClick={()=>

                                onLoad(year,month)

                            }

                        >

                            Load Summary

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}
