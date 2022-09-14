import './listQuestions.css'


export default function ListQuestion() {


    return (
        <div>
            {dataResults.map((e, index) => {
                <button
                    type='button'
                >{index + 1}</button>
            })}
        </div>
    )
}

