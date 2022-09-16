import './listQuestions.css'


export default function ListQuestion() {


    return (
        <div>
            {.map((e, index) => {
                <button
                    type='button'
                >{index + 1}</button>
            })}
        </div>
    )
}

