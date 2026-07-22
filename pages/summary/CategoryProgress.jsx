export default function CategoryProgress({

    category,

}){

return(

<div className="card shadow-sm mb-3">

<div className="card-body">

<div className="d-flex justify-content-between">

<strong>

{category.category}

</strong>

<span>

KES {Number(category.spent).toLocaleString()}

</span>

</div>

<div className="progress mt-3">

<div

className="progress-bar"

style={{

width:`${category.percentage_used}%`

}}

>

{category.percentage_used}%

</div>

</div>

</div>

</div>

)

}
