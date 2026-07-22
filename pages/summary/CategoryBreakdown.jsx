import CategoryProgress from "./CategoryProgress";

export default function CategoryBreakdown({ categories }) {

    return (

        <>

            <h4 className="mb-3">

                Category Breakdown

            </h4>

            {categories.length === 0 ? (

                <div className="alert alert-info">

                    No expenses recorded for this month.

                </div>

            ) : (

                categories.map(category => (

                    <CategoryProgress

                        key={category.category}

                        category={category}

                    />

                ))

            )}

        </>

    );

}
